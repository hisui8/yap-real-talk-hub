
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface PolicyDialogProps {
  isOpen: boolean;
  userInitials: string;
  setUserInitials: (value: string) => void;
  onAgreement: () => void;
}

const PolicyDialog = ({ isOpen, userInitials, setUserInitials, onAgreement }: PolicyDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="bg-ivory border-2 border-charcoal/20 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-charcoal font-display text-center mb-4">
            Community Guidelines
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-pearl/60 p-4 rounded-lg border border-gunmetal/10">
            <h3 className="font-semibold text-charcoal mb-2">No Tolerance for Disrespect</h3>
            <p className="text-gunmetal text-sm leading-relaxed">
              This is a space for meaningful dialogue. We maintain a zero-tolerance policy for harassment, 
              hate speech, or disrespectful behavior of any kind.
            </p>
          </div>
          
          <div className="bg-sage/20 p-4 rounded-lg border border-gunmetal/10">
            <h3 className="font-semibold text-charcoal mb-2">Diverse Opinions Welcome</h3>
            <p className="text-gunmetal text-sm leading-relaxed">
              Different perspectives are essential for meaningful dialogue. We encourage thoughtful 
              disagreement and ask that you approach conversations with curiosity and respect.
            </p>
          </div>
          
          <div className="bg-dusty/30 p-4 rounded-lg border border-gunmetal/10">
            <h3 className="font-semibold text-charcoal mb-2">Keep an Open Mind</h3>
            <p className="text-gunmetal text-sm leading-relaxed">
              Challenge your own assumptions. Listen to understand, not just to respond. 
              Growth happens when we engage with ideas that stretch our thinking.
            </p>
          </div>
          
          <div className="pt-4 border-t border-gunmetal/20">
            <p className="text-sm text-gunmetal/80 mb-3 text-center">
              By entering your initials below, you agree to maintain a respectful and responsible 
              presence in our community.
            </p>
            <Input
              placeholder="Enter your initials (e.g., J.D.)"
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
              I Understand & Agree
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PolicyDialog;
