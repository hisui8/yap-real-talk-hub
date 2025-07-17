import { useEffect } from 'react';
import { useAuth } from './useAuth';
import { supabase } from '@/integrations/supabase/client';

interface ActivityMetadata {
  page?: string;
  [key: string]: any;
}

export const useUserActivity = (activity: string, metadata: ActivityMetadata = {}) => {
  const { user } = useAuth();

  useEffect(() => {
    const trackActivity = async () => {
      if (!user) return;

      try {
        await supabase
          .from('user_activity')
          .insert({
            user_id: user.id,
            activity,
            metadata
          });
      } catch (error) {
        console.error('Error tracking user activity:', error);
      }
    };

    trackActivity();
  }, [user, activity, JSON.stringify(metadata)]);
};