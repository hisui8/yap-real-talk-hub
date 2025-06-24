
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCards";
import MapPreview from "../components/MapPreview";
import StatsStrip from "../components/StatsStrip";
import FeaturedContent from "../components/FeaturedContent";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream font-sans">
      <Header />
      <HeroSection />
      <FeatureCards />
      <MapPreview />
      <FeaturedContent />
      <StatsStrip />
      <Footer />
    </div>
  );
};

export default Index;
