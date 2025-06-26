
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
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
      coordinates: { lat: -23.5505, lng: -46.6333 },
      position: { top: '65%', left: '25%' }
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
      coordinates: { lat: -1.2921, lng: 36.8219 },
      position: { top: '55%', left: '55%' }
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
      coordinates: { lat: 0, lng: 0 },
      position: { top: '40%', left: '50%' }
    },
    {
      id: 4,
      region: "Southeast Asia",
      country: "Philippines",
      event: "Ocean Cleanup Progress",
      type: "positive",
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
      type: "positive",
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
              Witness the pulse of youth-driven change across continents. Every dot tells a story of progress or challenge shaping our generation.
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Interactive World Map */}
            <div className="lg:col-span-2">
              <Card className="bg-pearl border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-charcoal font-display">Global Event Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-dusty/10 to-dusty/20 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
                    {/* World Map Silhouette */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl text-gunmetal/30">🌍</div>
                    </div>
                    
                    {/* Interactive Event Markers */}
                    {filteredEvents.map((event) => (
                      <HoverCard key={event.id}>
                        <HoverCardTrigger asChild>
                          <div
                            className={`absolute w-4 h-4 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-150 ${
                              event.type === 'positive' ? 'bg-sage animate-pulse' : 'bg-copper animate-pulse'
                            }`}
                            style={{
                              top: event.position.top,
                              left: event.position.left
                            }}
                            onClick={() => setSelectedRegion(selectedRegion === event.region ? null : event.region)}
                          />
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 bg-white/95 backdrop-blur-sm">
                          <div className="space-y-2">
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
                            <h4 className="text-lg font-semibold text-gunmetal">{event.event}</h4>
                            <p className="text-sm text-gunmetal/80">{event.description}</p>
                            <Badge variant="outline" className={`${
                              event.impact === 'High' ? 'border-plum text-plum' : 'border-dusty text-dusty'
                            }`}>
                              {event.impact} Impact
                            </Badge>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                  <p className="text-sm text-dusty mt-4 text-center">
                    Hover over markers to explore events • Click to select regions
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* News Updates Column */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-charcoal mb-6 font-display">Live Updates</h2>
              {newsUpdates.map((news) => (
                <Card key={news.id} className="border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-ivory to-pearl/50">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="border-sage text-sage text-xs">
                        {news.category}
                      </Badge>
                      <span className="text-xs text-dusty">{news.time}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-gunmetal mb-2 leading-tight">
                      {news.headline}
                    </h3>
                    <p className="text-xs text-gunmetal/80 leading-relaxed">
                      {news.summary}
                    </p>
                  </CardContent>
                </Card>
              ))}
              
              {/* Recent Events List */}
              <div className="space-y-4 mt-8">
                <h3 className="text-lg font-bold text-charcoal font-display">Recent Events</h3>
                {filteredEvents.slice(0, 3).map((event) => (
                  <Card 
                    key={event.id} 
                    className={`border-0 shadow-sm hover:shadow-md transition-all cursor-pointer ${
                      selectedRegion === event.region ? 'ring-2 ring-sage' : ''
                    } ${
                      event.type === 'positive' 
                        ? 'bg-gradient-to-br from-sage/10 to-forest/5' 
                        : 'bg-gradient-to-br from-copper/10 to-gold/5'
                    }`}
                    onClick={() => setSelectedRegion(selectedRegion === event.region ? null : event.region)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className={`w-3 h-3 rounded-full ${event.type === 'positive' ? 'bg-sage' : 'bg-copper'}`}></div>
                        <p className="font-semibold text-gunmetal text-sm">{event.region}</p>
                      </div>
                      <h4 className="text-sm font-medium text-gunmetal mb-1">
                        {event.event}
                      </h4>
                      <p className="text-xs text-gunmetal/70 leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheMap;
