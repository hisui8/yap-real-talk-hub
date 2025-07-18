
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

interface PendingPost {
  id: string;
  content: string;
  user_id: string;
  created_at: string;
  status: string;
  month_tag: string | null;
}

const AdminPostManager = () => {
  const [pendingPosts, setPendingPosts] = useState<PendingPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchPendingPosts();
  }, []);

  const fetchPendingPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('wall_posts')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching pending posts:', error);
        toast({
          title: "Error",
          description: "Failed to fetch pending posts.",
          variant: "destructive",
        });
      } else {
        setPendingPosts(data || []);
      }
    } catch (error) {
      console.error('Error fetching pending posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const updatePostStatus = async (postId: string, newStatus: 'approved' | 'rejected') => {
    try {
      const { error } = await supabase
        .from('wall_posts')
        .update({ status: newStatus })
        .eq('id', postId);

      if (error) {
        toast({
          title: "Error",
          description: `Failed to ${newStatus} post.`,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: `Post ${newStatus} successfully.`,
        });
        
        // Remove from pending list
        setPendingPosts(posts => posts.filter(post => post.id !== postId));
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sage"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-charcoal mb-2 font-display">
          Admin: Pending Posts
        </h2>
        <p className="text-gunmetal">
          {pendingPosts.length} posts awaiting review
        </p>
      </div>

      {pendingPosts.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <Clock className="w-12 h-12 text-sage mx-auto mb-4" />
            <p className="text-gunmetal text-lg">No pending posts to review</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {pendingPosts.map((post) => (
            <Card key={post.id} className="border-l-4 border-l-amber-400">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-gunmetal/70">
                  Submitted: {new Date(post.created_at).toLocaleDateString()}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-pearl/30 p-4 rounded-lg">
                  <p className="text-gunmetal leading-relaxed">{post.content}</p>
                </div>
                
                <div className="flex gap-3 justify-end">
                  <Button
                    onClick={() => updatePostStatus(post.id, 'rejected')}
                    variant="outline"
                    className="border-red-200 text-red-600 hover:bg-red-50"
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Reject
                  </Button>
                  <Button
                    onClick={() => updatePostStatus(post.id, 'approved')}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPostManager;
