
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
}

interface Post {
  id: number;
  author: string;
  age: number;
  content: string;
  likes: number;
  color: string;
  position: { x: number; y: number };
  comments: Comment[];
}

interface CommentDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedPost: Post | null;
  newComment: string;
  setNewComment: (value: string) => void;
  commentAuthor: string;
  setCommentAuthor: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const CommentDialog = ({
  isOpen,
  setIsOpen,
  selectedPost,
  newComment,
  setNewComment,
  commentAuthor,
  setCommentAuthor,
  onSubmit
}: CommentDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-ivory border-2 border-sage/20 max-w-lg max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl text-charcoal font-display">
            Comments on {selectedPost?.author}'s post
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto space-y-4">
          {/* Original Post */}
          {selectedPost && (
            <div className="bg-dusty/20 p-4 rounded-lg">
              <p className="text-gunmetal font-medium mb-2">"{selectedPost.content}"</p>
              <p className="text-sm text-gunmetal/70">- {selectedPost.author}, Age {selectedPost.age}</p>
            </div>
          )}
          
          {/* Comments */}
          <div className="space-y-3">
            {selectedPost?.comments.map((comment) => (
              <div key={comment.id} className="bg-pearl/40 p-3 rounded-lg border-l-4 border-sage/50">
                <p className="text-gunmetal text-sm mb-1">"{comment.content}"</p>
                <p className="text-xs text-gunmetal/60">- {comment.author} at {comment.timestamp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Add Comment Form */}
        <form onSubmit={onSubmit} className="space-y-3 pt-4 border-t border-dusty/30">
          <Input
            placeholder="Your name"
            value={commentAuthor}
            onChange={(e) => setCommentAuthor(e.target.value)}
            className="border-dusty/30 focus:border-sage"
            required
          />
          <Textarea
            placeholder="Add your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[80px] border-dusty/30 focus:border-sage resize-none"
            required
          />
          <div className="flex justify-end space-x-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="border-dusty/30 text-gunmetal hover:bg-dusty/10"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-sage hover:bg-sage/90 text-white"
            >
              Add Comment
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CommentDialog;
