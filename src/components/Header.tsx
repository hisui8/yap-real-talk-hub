
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const navItems = [
    'The Wall',
    'The Scroll', 
    'The Table',
    'The Map',
    'The Shop',
    'The How To'
  ];

  return (
    <header className="bg-pearl/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold text-navy tracking-tight">
            YAP
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-charcoal hover:text-coral transition-colors duration-200 font-medium tracking-wide"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden">
            <Menu className="w-6 h-6 text-charcoal" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
