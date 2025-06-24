
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TheMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'positive' | 'negative'>('all');

  const globalEvents = [
    {
      id: 1,
      region: "Brazil",
      country: "Brazil",
      event: "Youth Climate Summit 2024",
      type: "positive",
      description: "Over 1,000 young activists gather in São Paulo to develop climate action plans",
      impact: "High",
      verified: true,
      coordinates: { lat: -23.5505, lng: -46.6333 }
    },
    {
      id: 2,
      region: "Kenya",
      country: "Kenya",
      event: "Education Initiative Launch",
      type: "positive",
      description: "New program provides free digital learning tools to rural communities",
      impact: "Medium",
      verified: true,
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      id: 3,
      region: "Global",
      country: "Multiple",
      event: "Rising Food Insecurity",
      type: "negative",
      description: "UN reports 30% increase in food insecurity among youth populations worldwide",
      impact: "High",
      verified: true,
      coordinates: { lat: 0, lng: 0 }
    },
    {
      id: 4,
      region: "Southeast Asia",
      country: "Multiple",
      event: "Ocean Cleanup Progress",
      type: "positive",
      description: "Youth-led organizations remove 50 tons of plastic from ocean waters",
      impact: "Medium",
      verified: true,
      coordinates: { lat: 1.3521, lng: 103.8198 }
    },
    {
      id: 5,
      region: "Europe",
      country: "Germany",
      event: "Student Strike for Democracy",
      type: "positive",
      description: "Students across 15 cities demonstrate for democratic reform and youth representation",
      impact: "Medium",
      verified: true,
      coordinates: { lat: 52.5200, lng: 13.4050 }
    }
  ];

  const filteredEvents = globalEvents.filter(event => 
    filterType === 'all' || event.type === filterType
  );

  const positiveCount = globalEvents.filter(e => e.type === 'positive').length;
  const negativeCount = globalEvents.filter(e => e.type === 'negative').length;

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
              Interactive world map tracking positive and negative global events that matter to young people
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-sage/20 to-forest/10 border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-sage mb-2">{positiveCount}</div>
                <div className="text-gunmetal font-medium">Positive Events</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-copper/20 to-gold/10 border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-copper mb-2">{negativeCount}</div>
                <div className="text-gunmetal font-medium">Challenges</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-plum/20 to-wine/10 border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-plum mb-2">{globalEvents.length}</div>
                <div className="text-gunmetal font-medium">Total Events</div>
              </CardContent>
            </Card>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Visualization */}
            <Card className="bg-pearl border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-charcoal font-display">Global Event Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-dusty/10 to-dusty/20 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
                  <div className="text-8xl text-gunmetal/30">🌍</div>
                  
                  {/* Event Markers */}
                  {filteredEvents.map((event, index) => (
                    <div
                      key={event.id}
                      className={`absolute w-4 h-4 rounded-full shadow-lg cursor-pointer animate-pulse ${
                        event.type === 'positive' ? 'bg-sage' : 'bg-copper'
                      }`}
                      style={{
                        top: `${20 + (index * 15)}%`,
                        left: `${15 + (index * 20)}%`
                      }}
                      onClick={() => setSelectedRegion(selectedRegion === event.region ? null : event.region)}
                    />
                  ))}
                </div>
                <p className="text-sm text-dusty mt-4 text-center">
                  Click on markers to explore events • Interactive map coming soon
                </p>
              </CardContent>
            </Card>

            {/* Event List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-charcoal mb-6 font-display">Recent Events</h2>
              {filteredEvents.map((event) => (
                <Card 
                  key={event.id} 
                  className={`border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                    selectedRegion === event.region ? 'ring-2 ring-sage' : ''
                  } ${
                    event.type === 'positive' 
                      ? 'bg-gradient-to-br from-sage/10 to-forest/5' 
                      : 'bg-gradient-to-br from-copper/10 to-gold/5'
                  }`}
                  onClick={() => setSelectedRegion(selectedRegion === event.region ? null : event.region)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Badge className={event.type === 'positive' ? 'bg-sage text-white' : 'bg-copper text-white'}>
                          {event.region}
                        </Badge>
                        {event.verified && (
                          <Badge variant="outline" className="border-forest text-forest">
                            ✓ Verified
                          </Badge>
                        )}
                      </div>
                      <Badge variant="outline" className={`${
                        event.impact === 'High' ? 'border-plum text-plum' : 'border-dusty text-dusty'
                      }`}>
                        {event.impact} Impact
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-gunmetal mb-2 font-display">
                      {event.event}
                    </h3>
                    <p className="text-gunmetal/80 leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheMap;
