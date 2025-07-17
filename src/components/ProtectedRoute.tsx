
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { AuthDialog } from './AuthDialog';
import { useState } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const [authDialogOpen, setAuthDialogOpen] = useState(!user && !loading);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const switchAuthMode = () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sage mx-auto mb-4"></div>
          <p className="text-gunmetal">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-4xl font-bold text-charcoal mb-4 font-display">
            Welcome to YAP
          </h1>
          <p className="text-gunmetal mb-6">
            Please sign in to access The Wall and share your thoughts with the community.
          </p>
          <button
            onClick={() => setAuthDialogOpen(true)}
            className="bg-sage hover:bg-sage/90 text-ivory px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Sign In to Continue
          </button>
        </div>
        
        <AuthDialog
          isOpen={authDialogOpen}
          onClose={() => setAuthDialogOpen(false)}
          mode={authMode}
          onSwitchMode={switchAuthMode}
        />
      </div>
    );
  }

  return <>{children}</>;
};
