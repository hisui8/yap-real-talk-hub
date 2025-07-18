
import { useAuth } from './useAuth';
import { supabase } from '@/integrations/supabase/client';

export const useProductClick = () => {
  const { user } = useAuth();

  const trackProductClick = async (productId: string) => {
    try {
      console.log('Tracking product click:', { productId, userId: user?.id || 'anonymous' });
      
      const { error } = await supabase
        .from('product_clicks')
        .insert({
          user_id: user?.id || crypto.randomUUID(), // Generate ID for anonymous users
          product_id: productId
        });

      if (error) {
        console.error('Error tracking product click:', error);
      } else {
        console.log('Product click tracked successfully');
      }
    } catch (error) {
      console.error('Error tracking product click:', error);
    }
  };

  return { trackProductClick };
};
