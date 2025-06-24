
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-cream via-lavender/30 to-mint/20 py-24 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Main Tagline */}
        <h1 className="text-6xl md:text-7xl font-bold text-slate mb-8 leading-tight tracking-tight font-display">
          Real Talk.<br />
          Real Change.<br />
          <span className="text-emerald">One Voice at a Time.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-storm/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Join the conversation that's changing the world. Where thoughtful voices create meaningful dialogue and drive authentic change.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-emerald hover:bg-emerald/90 text-white px-10 py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
            Join the Dialogue
          </Button>
          <Button variant="outline" className="border-2 border-indigo text-indigo hover:bg-indigo hover:text-white px-10 py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
            See What's Trending
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
