
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageCircle, HelpCircle, FileText, Heart, AlertCircle } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  type: 'perspective' | 'question' | 'fact' | 'support' | 'challenge';
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
  commentType: 'perspective' | 'question' | 'fact' | 'support' | 'challenge';
  setCommentType: (value: 'perspective' | 'question' | 'fact' | 'support' | 'challenge') => void;
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
  commentType,
  setCommentType,
  onSubmit
}: CommentDialogProps) => {
  const getCommentStyle = (type: string) => {
    switch (type) {
      case 'perspective':
        return 'bg-blue-50/80 border-l-4 border-blue-400';
      case 'question':
        return 'bg-purple-50/80 border-l-4 border-purple-400';
      case 'fact':
        return 'bg-green-50/80 border-l-4 border-green-400';
      case 'support':
        return 'bg-emerald-50/80 border-l-4 border-emerald-400';
      case 'challenge':
        return 'bg-orange-50/80 border-l-4 border-orange-400';
      default:
        return 'bg-pearl/40 border-l-4 border-sage/50';
    }
  };

  const getCommentIcon = (type: string) => {
    switch (type) {
      case 'perspective':
        return <MessageCircle className="w-4 h-4 text-blue-600" />;
      case 'question':
        return <HelpCircle className="w-4 h-4 text-purple-600" />;
      case 'fact':
        return <FileText className="w-4 h-4 text-green-600" />;
      case 'support':
        return <Heart className="w-4 h-4 text-emerald-600" />;
      case 'challenge':
        return <AlertCircle className="w-4 h-4 text-orange-600" />;
      default:
        return <MessageCircle className="w-4 h-4 text-sage" />;
    }
  };

  const commentTypes = [
    { value: 'perspective', label: 'Personal Opinion', icon: MessageCircle, color: 'text-blue-600' },
    { value: 'question', label: 'Question', icon: HelpCircle, color: 'text-purple-600' },
    { value: 'fact', label: 'Fact/Data', icon: FileText, color: 'text-green-600' },
    { value: 'support', label: 'Agreement/Support', icon: Heart, color: 'text-emerald-600' },
    { value: 'challenge', label: 'Challenge/Counterpoint', icon: AlertCircle, color: 'text-orange-600' }
  ];
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-ivory border-2 border-sage/20 max-w-lg max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl text-charcoal font-display">
            Comments on {selectedPost?.author}'s post
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto space-y-4">
          {/* Comment Type Key */}
          <div className="bg-gradient-to-r from-sage/10 to-forest/5 p-3 rounded-lg border border-sage/20">
            <h4 className="text-xs font-semibold text-gunmetal mb-2">Comment Type Key:</h4>
            <div className="grid grid-cols-2 gap-1 text-xs">
              {commentTypes.map((type) => (
                <div key={type.value} className="flex items-center space-x-1">
                  <type.icon className={`w-3 h-3 ${type.color}`} />
                  <span className="text-gunmetal/80">{type.label}</span>
                </div>
              ))}
            </div>
          </div>

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
              <div key={comment.id} className={`p-3 rounded-lg ${getCommentStyle(comment.type)}`}>
                <div className="flex items-start space-x-2 mb-1">
                  {getCommentIcon(comment.type)}
                  <p className="text-gunmetal text-sm flex-1">"{comment.content}"</p>
                </div>
                <p className="text-xs text-gunmetal/60 ml-6">- {comment.author} at {comment.timestamp}</p>
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
          
          {/* Comment Type Selector */}
          <div>
            <label className="text-sm font-medium text-gunmetal mb-1 block">Comment Type:</label>
            <Select value={commentType} onValueChange={setCommentType}>
              <SelectTrigger className="border-dusty/30 focus:border-sage">
                <SelectValue placeholder="Select comment type" />
              </SelectTrigger>
              <SelectContent>
                {commentTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    <div className="flex items-center space-x-2">
                      <type.icon className={`w-4 h-4 ${type.color}`} />
                      <span>{type.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
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
