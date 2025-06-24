
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-cream via-white to-teal/10 py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Main Tagline */}
        <h1 className="text-6xl md:text-7xl font-bold text-navy mb-8 leading-tight">
          Real Talk.<br />
          Real Change.<br />
          <span className="text-coral">One Post at a Time.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-charcoal/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the conversation that's changing the world. Where young voices create meaningful dialogue and drive authentic change.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-coral hover:bg-coral/90 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
            Join the Dialogue
          </Button>
          <Button variant="outline" className="border-2 border-teal text-teal hover:bg-teal hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
            See What's Trending
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
