
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
      // Only track activity for authenticated users
      if (!user || loading) {
        console.log('User activity not tracked: user not authenticated');
        return;
      }

      try {
        console.log('Tracking user activity:', { activity, metadata, userId: user.id });
        
        const { error } = await supabase
          .from('user_activity')
          .insert({
            user_id: user.id,
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

    // Only track when user is confirmed to be authenticated
    if (user && !loading) {
      trackActivity();
    }
  }, [user, loading, activity, JSON.stringify(metadata)]);
};
