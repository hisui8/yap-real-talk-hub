
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../Header';

interface ScrollHeaderProps {
  onUpload: () => void;
}

const ScrollHeader: React.FC<ScrollHeaderProps> = ({ onUpload }) => {
  return (
    <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent">
      <Header />
      <div className="text-center py-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-display">
          The Scroll 📱
        </h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto font-light mb-6">
          Watch meaningful conversations unfold. Real voices, real stories, real change - one scroll at a time.
        </p>
        <Button 
          onClick={onUpload}
          className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Share Your Voice
        </Button>
      </div>
    </div>
  );
};

export default ScrollHeader;
