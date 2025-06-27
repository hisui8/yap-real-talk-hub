import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InteractiveMap from '../components/map/InteractiveMap';
import NewsUpdates from '../components/map/NewsUpdates';

const TheMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'positive' | 'negative'>('all');

  const globalEvents = [
    {
      id: 1,
      region: "Brazil",
      country: "Brazil",
      event: "Youth Climate Summit 2024",
      type: "positive" as const,
      description: "Over 1,000 young activists gather in São Paulo to develop climate action plans",
      impact: "High",
      verified: true,
      coordinates: { lat: -23.5505, lng: -46.6333 },
      position: { top: '65%', left: '25%' }
    },
    {
      id: 2,
      region: "Kenya",
      country: "Kenya",
      event: "Education Initiative Launch",
      type: "positive" as const,
      description: "New program provides free digital learning tools to rural communities",
      impact: "Medium",
      verified: true,
      coordinates: { lat: -1.2921, lng: 36.8219 },
      position: { top: '55%', left: '55%' }
    },
    {
      id: 3,
      region: "Global", 
      country: "Multiple",
      event: "Rising Food Insecurity",
      type: "negative" as const,
      description: "UN reports 30% increase in food insecurity among youth populations worldwide",
      impact: "High",
      verified: true,
      coordinates: { lat: 0, lng: 0 },
      position: { top: '40%', left: '50%' }
    },
    {
      id: 4,
      region: "Southeast Asia",
      country: "Philippines",
      event: "Ocean Cleanup Progress",
      type: "positive" as const,
      description: "Youth-led organizations remove 50 tons of plastic from ocean waters",
      impact: "Medium",
      verified: true,
      coordinates: { lat: 1.3521, lng: 103.8198 },
      position: { top: '60%', left: '75%' }
    },
    {
      id: 5,
      region: "Europe",
      country: "Germany",
      event: "Student Strike for Democracy",
      type: "positive" as const,
      description: "Students across 15 cities demonstrate for democratic reform and youth representation",
      impact: "Medium",
      verified: true,
      coordinates: { lat: 52.5200, lng: 13.4050 },
      position: { top: '30%', left: '52%' }
    }
  ];

  const newsUpdates = [
    {
      id: 1,
      headline: "Youth Voter Turnout Reaches Record High in 12 Countries",
      summary: "Gen Z engagement in democratic processes shows unprecedented growth across Europe and Asia.",
      time: "2 hours ago",
      category: "Politics"
    },
    {
      id: 2,
      headline: "Climate Action Groups Launch Global Coordination Platform",
      summary: "Young activists from 50 countries unite to share resources and strategies.",
      time: "4 hours ago", 
      category: "Environment"
    },
    {
      id: 3,
      headline: "Mental Health Support Networks Expand in Universities Worldwide",
      summary: "Student-led initiatives address rising mental health concerns on campuses.",
      time: "6 hours ago",
      category: "Health"
    }
  ];

  const filteredEvents = globalEvents.filter(event => 
    filterType === 'all' || event.type === filterType
  );

  return (
    <div className="min-h-screen bg-ivory font-sans">
      <Header />
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight font-display">
              The Map 🗺️
            </h1>
            <p className="text-xl text-gunmetal/90 max-w-2xl mx-auto font-light">
              Track the pulse of youth movements worldwide. Every marker tells a story of change happening right now.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button 
              onClick={() => setFilterType('all')}
              className={filterType === 'all' ? 'bg-charcoal text-white' : 'bg-pearl text-gunmetal hover:bg-dusty/20'}
            >
              All Events
            </Button>
            <Button 
              onClick={() => setFilterType('positive')}
              className={filterType === 'positive' ? 'bg-sage text-white' : 'bg-pearl text-gunmetal hover:bg-dusty/20'}
            >
              Positive
            </Button>
            <Button 
              onClick={() => setFilterType('negative')}
              className={filterType === 'negative' ? 'bg-copper text-white' : 'bg-pearl text-gunmetal hover:bg-dusty/20'}
            >
              Challenges
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-4">
              <InteractiveMap
                events={filteredEvents}
                selectedRegion={selectedRegion}
                onSelectRegion={setSelectedRegion}
              />
            </div>

            <div className="lg:col-span-4">
              <NewsUpdates
                newsUpdates={newsUpdates}
                events={filteredEvents}
                selectedRegion={selectedRegion}
                onSelectRegion={setSelectedRegion}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheMap;
