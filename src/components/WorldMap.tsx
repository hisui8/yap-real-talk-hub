
import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapEvent {
  id: string;
  location: string;
  title: string;
  description: string;
  x: number;
  y: number;
}

const WorldMap = () => {
  const [selectedEvent, setSelectedEvent] = useState<MapEvent | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const markers = useRef<L.Marker[]>([]);

  // Sample events with lat/lng coordinates for Leaflet
  const events: MapEvent[] = [
    {
      id: '1',
      location: 'New York',
      title: 'Climate Action Rally',
      description: 'Thousands gather in Central Park demanding urgent climate action from world leaders.',
      x: 40.7831, // latitude
      y: -73.9712  // longitude
    },
    {
      id: '2',
      location: 'Gaza',
      title: 'Humanitarian Crisis',
      description: 'International aid organizations working to provide essential supplies to affected civilians.',
      x: 31.3547,
      y: 34.3088
    },
    {
      id: '3',
      location: 'Jakarta',
      title: 'Student Protests',
      description: 'University students organize peaceful demonstrations calling for educational reform.',
      x: -6.2088,
      y: 106.8456
    }
  ];

  const handleEventClick = (event: MapEvent) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    map.current = L.map(mapContainer.current).setView([20, 0], 2);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map.current);

    // Add markers for events
    events.forEach((event) => {
      const marker = L.marker([event.x, event.y]).addTo(map.current!);
      
      marker.bindPopup(`<strong>${event.location}</strong><br/>${event.title}`);
      
      marker.on('click', () => {
        handleEventClick(event);
      });
      
      markers.current.push(marker);
    });

    // Cleanup function
    return () => {
      markers.current.forEach(marker => marker.remove());
      markers.current = [];
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Card className="overflow-hidden">
        <CardContent className="p-0 relative">
          {/* Leaflet Map Container */}
          <div 
            ref={mapContainer} 
            className="w-full h-96"
          />
        </CardContent>
      </Card>

      {/* Event Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-ivory border-dusty/20">
          <DialogHeader>
            <DialogTitle className="text-charcoal font-display">
              {selectedEvent?.location}
            </DialogTitle>
          </DialogHeader>
          {selectedEvent && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gunmetal">
                {selectedEvent.title}
              </h3>
              <p className="text-gunmetal leading-relaxed">
                {selectedEvent.description}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WorldMap;
