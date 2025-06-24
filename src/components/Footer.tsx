
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-16 px-4">
      <div className="container mx-auto">
        {/* Email Signup */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Stay in the Loop</h3>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Get weekly updates on trending conversations and new opportunities to make your voice heard
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-full text-charcoal focus:outline-none focus:ring-2 focus:ring-coral"
            />
            <Button className="bg-coral hover:bg-coral/90 text-white px-8 py-3 rounded-full whitespace-nowrap">
              Join YAP
            </Button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Mission */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-coral mb-4">YAP</div>
            <p className="text-white/80 mb-4 max-w-md">
              Empowering young voices to create meaningful dialogue and drive authentic change in communities worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-coral transition-colors">Instagram</a>
              <a href="#" className="text-white/60 hover:text-coral transition-colors">TikTok</a>
              <a href="#" className="text-white/60 hover:text-coral transition-colors">Twitter</a>
              <a href="#" className="text-white/60 hover:text-coral transition-colors">YouTube</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <div className="space-y-2">
              <a href="#" className="block text-white/60 hover:text-coral transition-colors">The Wall</a>
              <a href="#" className="block text-white/60 hover:text-coral transition-colors">The Scroll</a>
              <a href="#" className="block text-white/60 hover:text-coral transition-colors">The Table</a>
              <a href="#" className="block text-white/60 hover:text-coral transition-colors">The Map</a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-white/60 hover:text-coral transition-colors">The How To</a>
              <a href="#" className="block text-white/60 hover:text-coral transition-colors">The Shop</a>
              <a href="#" className="block text-white/60 hover:text-coral transition-colors">About Us</a>
              <a href="#" className="block text-white/60 hover:text-coral transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 Youth Advocacy Platform. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-coral transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-coral transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
