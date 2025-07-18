
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface WallPost {
  id: string;
  content: string;
  user_id: string;
  created_at: string;
  status: string;
  month_tag: string | null;
}

export const useWallPosts = () => {
  const [posts, setPosts] = useState<WallPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApprovedPosts();
  }, []);

  const fetchApprovedPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('wall_posts')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching approved posts:', error);
      } else {
        setPosts(data || []);
      }
    } catch (error) {
      console.error('Error fetching approved posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return { posts, loading, refetch: fetchApprovedPosts };
};
