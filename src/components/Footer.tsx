
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-storm to-slate text-white py-20 px-4">
      <div className="container mx-auto">
        {/* Email Signup */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold mb-6 tracking-wide font-display">Stay in the Loop</h3>
          <p className="text-white/80 mb-8 max-w-lg mx-auto font-light">
            Get weekly updates on trending conversations and new opportunities to make your voice heard
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="w-full px-6 py-4 rounded-xl text-storm focus:outline-none focus:ring-2 focus:ring-emerald bg-cream shadow-lg"
            />
            <Button className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 rounded-xl whitespace-nowrap font-medium shadow-lg">
              Join YAP
            </Button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Mission */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-emerald mb-6 tracking-tight font-display">YAP</div>
            <p className="text-white/80 mb-6 max-w-md font-light leading-relaxed">
              Empowering young voices to create meaningful dialogue and drive authentic change in communities worldwide.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-emerald transition-colors font-light">Instagram</a>
              <a href="#" className="text-white/60 hover:text-emerald transition-colors font-light">TikTok</a>
              <a href="#" className="text-white/60 hover:text-emerald transition-colors font-light">Twitter</a>
              <a href="#" className="text-white/60 hover:text-emerald transition-colors font-light">YouTube</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 tracking-wide font-display">Explore</h4>
            <div className="space-y-3">
              <a href="#" className="block text-white/60 hover:text-emerald transition-colors font-light">The Wall</a>
              <a href="#" className="block text-white/60 hover:text-emerald transition-colors font-light">The Scroll</a>
              <a href="#" className="block text-white/60 hover:text-emerald transition-colors font-light">The Table</a>
              <a href="#" className="block text-white/60 hover:text-emerald transition-colors font-light">The Map</a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-6 tracking-wide font-display">Resources</h4>
            <div className="space-y-3">
              <a href="#" className="block text-white/60 hover:text-emerald transition-colors font-light">The How To</a>
              <a href="#" className="block text-white/60 hover:text-emerald transition-colors font-light">The Shop</a>
              <a href="#" className="block text-white/60 hover:text-emerald transition-colors font-light">About Us</a>
              <a href="#" className="block text-white/60 hover:text-emerald transition-colors font-light">Contact</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm font-light">
              © 2024 Youth Advocacy Platform. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-emerald transition-colors text-sm font-light">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-emerald transition-colors text-sm font-light">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
