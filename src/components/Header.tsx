
import React from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'The Wall', path: '/the-wall' },
    { name: 'The Scroll', path: '/the-scroll' }, 
    { name: 'The Table', path: '/the-table' },
    { name: 'The Map', path: '/the-map' },
    { name: 'The Shop', path: '/the-shop' },
    { name: 'The How To', path: '/the-how-to' }
  ];

  return (
    <header className="bg-ivory/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-dusty/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-charcoal font-display tracking-tight hover:text-sage transition-colors">
            YAP
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-sage border-b-2 border-sage'
                    : 'text-gunmetal hover:text-sage'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden">
            <Menu className="w-6 h-6 text-gunmetal" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
