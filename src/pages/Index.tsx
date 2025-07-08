
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureCards from '../components/FeatureCards';
import WhyYapSection from '../components/WhyYapSection';
import StatsStrip from '../components/StatsStrip';
import FeaturedContent from '../components/FeaturedContent';
import Footer from '../components/Footer';
import PolicyDialog from '../components/PolicyDialog';

const Index = () => {
  const [showPolicyDialog, setShowPolicyDialog] = useState(false);
  const [userInitials, setUserInitials] = useState('');

  useEffect(() => {
    const hasAgreed = localStorage.getItem('site-policy-agreed');
    if (!hasAgreed) {
      setShowPolicyDialog(true);
    }
  }, []);

  const handlePolicyAgreement = () => {
    if (userInitials.trim().length >= 2) {
      localStorage.setItem('site-policy-agreed', 'true');
      setShowPolicyDialog(false);
    }
  };

  return (
    <div className="min-h-screen bg-ivory">
      <PolicyDialog
        isOpen={showPolicyDialog}
        userInitials={userInitials}
        setUserInitials={setUserInitials}
        onAgreement={handlePolicyAgreement}
      />
      
      <Header />
      <HeroSection />
      <WhyYapSection />
      <FeatureCards />
      <StatsStrip />
      <FeaturedContent />
      <Footer />
    </div>
  );
};

export default Index;
