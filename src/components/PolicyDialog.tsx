
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface PolicyDialogProps {
  isOpen: boolean;
  userInitials: string;
  setUserInitials: (value: string) => void;
  onAgreement: () => void;
  isWallSpecific?: boolean;
}

const PolicyDialog = ({ isOpen, userInitials, setUserInitials, onAgreement, isWallSpecific = false }: PolicyDialogProps) => {
  if (isWallSpecific) {
    return (
      <Dialog open={isOpen} onOpenChange={() => {}}>
        <DialogContent className="bg-ivory border-2 border-charcoal/20 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-charcoal font-display text-center mb-3">
              Quick Reminder 💭
            </DialogTitle>
            <DialogDescription className="sr-only">
              Guidelines for respectful participation on The Wall
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-sage/20 p-4 rounded-lg text-center">
              <p className="text-gunmetal font-medium mb-2">
                These are personal thoughts and conversation starters
              </p>
              <p className="text-sm text-gunmetal/80">
                Engage respectfully with an open mind. Every perspective has value.
              </p>
            </div>
            
            <div className="pt-2">
              <Input
                placeholder="Your initials (e.g., J.D.)"
                value={userInitials}
                onChange={(e) => setUserInitials(e.target.value)}
                className="border-dusty/30 focus:border-sage text-center mb-3"
                maxLength={10}
              />
              <Button 
                onClick={onAgreement}
                disabled={userInitials.trim().length < 2}
                className="w-full bg-sage hover:bg-sage/90 text-white disabled:opacity-50"
              >
                Got it!
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="bg-ivory border-2 border-charcoal/20 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-charcoal font-display text-center mb-4">
            Welcome to Our Community 🌟
          </DialogTitle>
          <DialogDescription className="sr-only">
            Community guidelines and purpose statement
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-pearl/60 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-charcoal mb-2">A Safe Space for Scholars</h3>
            <p className="text-gunmetal text-sm leading-relaxed">
              This platform was created for thoughtful individuals to discuss important but challenging topics 
              in a respectful environment where every voice matters.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-sage/20 p-3 rounded-lg">
              <h4 className="font-medium text-charcoal mb-1 text-sm">✓ Respectful dialogue</h4>
              <p className="text-xs text-gunmetal/80">Listen to understand</p>
            </div>
            
            <div className="bg-dusty/30 p-3 rounded-lg">
              <h4 className="font-medium text-charcoal mb-1 text-sm">✓ Open minds</h4>
              <p className="text-xs text-gunmetal/80">Challenge assumptions</p>
            </div>
            
            <div className="bg-copper/20 p-3 rounded-lg">
              <h4 className="font-medium text-charcoal mb-1 text-sm">✗ Harassment</h4>
              <p className="text-xs text-gunmetal/80">Zero tolerance</p>
            </div>
            
            <div className="bg-gold/20 p-3 rounded-lg">
              <h4 className="font-medium text-charcoal mb-1 text-sm">✗ Hate speech</h4>
              <p className="text-xs text-gunmetal/80">Not welcome here</p>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gunmetal/20">
            <p className="text-sm text-gunmetal/80 mb-3 text-center">
              Enter your initials to join our community of thoughtful voices
            </p>
            <Input
              placeholder="Your initials (e.g., J.D.)"
              value={userInitials}
              onChange={(e) => setUserInitials(e.target.value)}
              className="border-dusty/30 focus:border-sage text-center"
              maxLength={10}
            />
            <Button 
              onClick={onAgreement}
              disabled={userInitials.trim().length < 2}
              className="w-full mt-3 bg-sage hover:bg-sage/90 text-white disabled:opacity-50"
            >
              Join the Community
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PolicyDialog;
