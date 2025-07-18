
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Plus } from 'lucide-react';

const MediaSubmissionForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [mediaType, setMediaType] = useState('');
  const [description, setDescription] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { user } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to submit media.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('scroll_media')
        .insert({
          user_id: user.id,
          title,
          media_type: mediaType,
          description,
          media_url: mediaUrl
        });

      if (error) {
        toast({
          title: "Submission Failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success!",
          description: "Your media has been submitted successfully.",
        });
        
        // Reset form
        setTitle('');
        setMediaType('');
        setDescription('');
        setMediaUrl('');
        setIsOpen(false);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-sage hover:bg-sage/90 text-ivory">
          <Plus className="w-4 h-4 mr-2" />
          Submit Media
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-ivory border-dusty/20 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-charcoal font-display">
            Submit Your Media
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-gunmetal">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="border-dusty/30 focus:border-sage"
              placeholder="Enter media title"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mediaType" className="text-gunmetal">Media Type</Label>
            <Select value={mediaType} onValueChange={setMediaType} required>
              <SelectTrigger className="border-dusty/30 focus:border-sage">
                <SelectValue placeholder="Select media type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="photo">Photo</SelectItem>
                <SelectItem value="poem">Poem</SelectItem>
                <SelectItem value="video">Video</SelectItem>
                <SelectItem value="art">Art</SelectItem>
                <SelectItem value="story">Story</SelectItem>
                <SelectItem value="music">Music</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mediaUrl" className="text-gunmetal">Media URL</Label>
            <Input
              id="mediaUrl"
              type="url"
              value={mediaUrl}
              onChange={(e) => setMediaUrl(e.target.value)}
              className="border-dusty/30 focus:border-sage"
              placeholder="https://example.com/your-media"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-gunmetal">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border-dusty/30 focus:border-sage min-h-[80px]"
              placeholder="Describe your media..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-sage hover:bg-sage/90 text-ivory"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Media'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MediaSubmissionForm;
