
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
    <section className="py-24 px-4 bg-gradient-to-r from-sage/5 to-teal/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-navy mb-8 tracking-tight">
            What's Happening Worldwide
          </h2>
          <p className="text-xl text-slate/90 max-w-2xl mx-auto font-light">
            Track global events that matter to young people, submitted and fact-checked by our community
          </p>
        </div>

        <Card className="bg-pearl shadow-2xl rounded-2xl border-0">
          <CardContent className="p-12">
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-sage/10 to-navy/10 rounded-xl h-80 mb-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-world-pattern opacity-20"></div>
              <div className="text-6xl text-navy/30">🌍</div>
              
              {/* Event Markers */}
              <div className="absolute top-6 left-12 w-4 h-4 bg-teal rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-16 right-20 w-4 h-4 bg-coral rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute bottom-12 left-1/3 w-4 h-4 bg-teal rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute bottom-20 right-12 w-4 h-4 bg-coral rounded-full animate-pulse shadow-lg"></div>
            </div>

            {/* Event List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {events.map((event, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-blush/30 hover:bg-blush/50 transition-colors">
                  <div className={`w-4 h-4 rounded-full ${event.color} shadow-sm`}></div>
                  <div>
                    <p className="font-semibold text-charcoal tracking-wide">{event.location}</p>
                    <p className="text-sm text-slate/80 font-light">{event.event}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button className="bg-navy hover:bg-navy/90 text-white px-10 py-4 rounded-xl font-medium shadow-lg">
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
