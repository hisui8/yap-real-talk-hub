
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';

interface AddPostDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  newPost: string;
  setNewPost: (value: string) => void;
  userName: string;
  setUserName: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const AddPostDialog = ({ 
  isOpen, 
  setIsOpen, 
  newPost, 
  setNewPost, 
  userName, 
  setUserName, 
  onSubmit 
}: AddPostDialogProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            className="w-16 h-16 rounded-full bg-sage hover:bg-sage/90 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <Plus className="w-8 h-8" />
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-ivory border-2 border-sage/20 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-charcoal font-display">Add Your Voice</DialogTitle>
          </DialogHeader>
          <form onSubmit={onSubmit} className="space-y-4 mt-4">
            <Input
              placeholder="Your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="border-dusty/30 focus:border-sage"
              required
            />
            <Textarea
              placeholder="Share your perspective on this month's prompt..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="min-h-[120px] border-dusty/30 focus:border-sage resize-none"
              required
            />
            <div className="flex justify-end space-x-2 pt-4">
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
                Add to Wall
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddPostDialog;
