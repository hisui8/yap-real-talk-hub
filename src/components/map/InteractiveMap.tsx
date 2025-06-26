
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
          {/* World Map SVG Background */}
          <svg 
            viewBox="0 0 1000 500" 
            className="absolute inset-0 w-full h-full opacity-20"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          >
            {/* Simplified world map paths */}
            <path d="M150,200 Q200,180 250,200 L300,180 L350,200 L400,190 L450,200 L500,180 L550,200 L600,190 L650,200 L700,180 L750,200 L800,190 L850,200" 
                  stroke="#8B9467" strokeWidth="2" fill="none" opacity="0.6"/>
            <path d="M100,250 Q150,230 200,250 L250,230 L300,250 L350,240 L400,250 L450,230 L500,250 L550,240 L600,250 L650,230 L700,250 L750,240 L800,250 L850,230 L900,250" 
                  stroke="#8B9467" strokeWidth="2" fill="none" opacity="0.6"/>
            <path d="M80,300 Q130,280 180,300 L230,280 L280,300 L330,290 L380,300 L430,280 L480,300 L530,290 L580,300 L630,280 L680,300 L730,290 L780,300 L830,280 L880,300" 
                  stroke="#8B9467" strokeWidth="2" fill="none" opacity="0.6"/>
            
            {/* Continent shapes (simplified) */}
            <circle cx="200" cy="180" r="40" fill="#8B9467" opacity="0.3" />
            <circle cx="150" cy="250" r="35" fill="#8B9467" opacity="0.3" />
            <circle cx="500" cy="200" r="45" fill="#8B9467" opacity="0.3" />
            <circle cx="550" cy="280" r="30" fill="#8B9467" opacity="0.3" />
            <circle cx="750" cy="220" r="50" fill="#8B9467" opacity="0.3" />
            <circle cx="300" cy="320" r="25" fill="#8B9467" opacity="0.3" />
          </svg>
          
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
