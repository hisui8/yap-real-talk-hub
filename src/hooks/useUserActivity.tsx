
import { useEffect } from 'react';
import { useAuth } from './useAuth';
import { supabase } from '@/integrations/supabase/client';

interface ActivityMetadata {
  page?: string;
  [key: string]: any;
}

export const useUserActivity = (activity: string, metadata: ActivityMetadata = {}) => {
  const { user, loading } = useAuth();

  useEffect(() => {
    const trackActivity = async () => {
      try {
        console.log('Tracking user activity:', { activity, metadata, userId: user?.id || 'anonymous' });
        
        const { error } = await supabase
          .from('user_activity')
          .insert({
            user_id: user?.id || null, // Allow null for anonymous users
            activity,
            metadata
          });

        if (error) {
          console.error('Error inserting user activity:', error);
        } else {
          console.log('User activity tracked successfully');
        }
      } catch (error) {
        console.error('Error tracking user activity:', error);
      }
    };

    // Track activity for both authenticated and anonymous users
    if (!loading) {
      trackActivity();
    }
  }, [user, loading, activity, JSON.stringify(metadata)]);
};
