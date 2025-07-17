
import React, { useState } from 'react';
import { Menu, LogIn, UserPlus, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AuthDialog } from './AuthDialog';
import { useAuth } from '@/hooks/useAuth';

const Header = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  
  const navItems = [
    { name: 'The How To', path: '/the-how-to' },
    { name: 'The Wall', path: '/the-wall' },
    { name: 'The Scroll', path: '/the-scroll' }, 
    { name: 'The Table', path: '/the-table' },
    { name: 'The Map', path: '/the-map' },
    { name: 'The Shop', path: '/the-shop' }
  ];

  const handleSignIn = () => {
    setAuthMode('signin');
    setAuthDialogOpen(true);
  };

  const handleSignUp = () => {
    setAuthMode('signup');
    setAuthDialogOpen(true);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const switchAuthMode = () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
  };

  return (
    <header className="bg-ivory/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-dusty/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Auth Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Link to="/" className="text-3xl font-bold text-charcoal font-display tracking-tight hover:text-sage transition-colors">
                YAP
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-ivory border-dusty/20 shadow-lg">
              {user ? (
                <>
                  <DropdownMenuItem className="hover:bg-sage/10 focus:bg-sage/10">
                    <User className="w-4 h-4 mr-2 text-gunmetal" />
                    <span className="text-gunmetal">{user.email}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={handleSignOut}
                    className="hover:bg-sage/10 focus:bg-sage/10 cursor-pointer"
                  >
                    <LogIn className="w-4 h-4 mr-2 text-gunmetal" />
                    <span className="text-gunmetal">Sign Out</span>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem 
                    onClick={handleSignIn}
                    className="hover:bg-sage/10 focus:bg-sage/10 cursor-pointer"
                  >
                    <LogIn className="w-4 h-4 mr-2 text-gunmetal" />
                    <span className="text-gunmetal">Sign In</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={handleSignUp}
                    className="hover:bg-sage/10 focus:bg-sage/10 cursor-pointer"
                  >
                    <UserPlus className="w-4 h-4 mr-2 text-gunmetal" />
                    <span className="text-gunmetal">Sign Up</span>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

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
      
      <AuthDialog
        isOpen={authDialogOpen}
        onClose={() => setAuthDialogOpen(false)}
        mode={authMode}
        onSwitchMode={switchAuthMode}
      />
    </header>
  );
};

export default Header;
