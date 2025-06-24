
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MapPreview = () => {
  const events = [
    { location: "Brazil", event: "Youth Climate Summit", type: "positive", color: "bg-teal" },
    { location: "Kenya", event: "Education Initiative Launch", type: "positive", color: "bg-teal" },
    { location: "Global", event: "Rising Food Insecurity", type: "negative", color: "bg-coral" },
    { location: "Southeast Asia", event: "Ocean Cleanup Progress", type: "positive", color: "bg-teal" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-navy/5 to-teal/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            What's Happening Worldwide
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
            Track global events that matter to young people, submitted and fact-checked by our community
          </p>
        </div>

        <Card className="bg-white shadow-xl">
          <CardContent className="p-8">
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-teal/10 to-navy/10 rounded-lg h-80 mb-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-world-pattern opacity-20"></div>
              <div className="text-6xl text-navy/30">🌍</div>
              
              {/* Event Markers */}
              <div className="absolute top-4 left-8 w-4 h-4 bg-teal rounded-full animate-pulse"></div>
              <div className="absolute top-12 right-16 w-4 h-4 bg-coral rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-1/3 w-4 h-4 bg-teal rounded-full animate-pulse"></div>
              <div className="absolute bottom-16 right-8 w-4 h-4 bg-coral rounded-full animate-pulse"></div>
            </div>

            {/* Event List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {events.map((event, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                  <div className={`w-3 h-3 rounded-full ${event.color}`}></div>
                  <div>
                    <p className="font-semibold text-charcoal">{event.location}</p>
                    <p className="text-sm text-charcoal/70">{event.event}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-full">
                Explore The Map
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MapPreview;
