
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface GlobalEvent {
  id: number;
  region: string;
  country: string;
  event: string;
  type: 'positive' | 'negative';
  description: string;
  impact: string;
  verified: boolean;
  coordinates: { lat: number; lng: number };
  position: { top: string; left: string };
}

interface InteractiveMapProps {
  events: GlobalEvent[];
  selectedRegion: string | null;
  onSelectRegion: (region: string | null) => void;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ events, selectedRegion, onSelectRegion }) => {
  return (
    <Card className="bg-pearl border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-charcoal font-display">Global Event Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gradient-to-br from-sage/10 to-forest/5 rounded-xl h-[500px] flex items-center justify-center relative overflow-hidden">
          {/* World Map Image Background */}
          <img 
            src="/lovable-uploads/9baf92e2-d116-42e9-9c52-e1a4d58e6e97.png" 
            alt="World Map" 
            className="absolute inset-0 w-full h-full object-contain opacity-80"
          />
          
          {/* Interactive Event Markers */}
          {events.map((event) => (
            <HoverCard key={event.id}>
              <HoverCardTrigger asChild>
                <div
                  className={`absolute w-4 h-4 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-150 z-10 ${
                    event.type === 'positive' ? 'bg-sage animate-pulse' : 'bg-copper animate-pulse'
                  }`}
                  style={{
                    top: event.position.top,
                    left: event.position.left,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => onSelectRegion(selectedRegion === event.region ? null : event.region)}
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
  );
};

export default InteractiveMap;
