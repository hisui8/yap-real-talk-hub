
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';

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

  // Sample events - you can later fetch these from Supabase
  const events: MapEvent[] = [
    {
      id: '1',
      location: 'New York',
      title: 'Climate Action Rally',
      description: 'Thousands gather in Central Park demanding urgent climate action from world leaders.',
      x: 25, // percentage from left
      y: 35  // percentage from top
    },
    {
      id: '2',
      location: 'Gaza',
      title: 'Humanitarian Crisis',
      description: 'International aid organizations working to provide essential supplies to affected civilians.',
      x: 55,
      y: 45
    },
    {
      id: '3',
      location: 'Jakarta',
      title: 'Student Protests',
      description: 'University students organize peaceful demonstrations calling for educational reform.',
      x: 80,
      y: 60
    }
  ];

  const handleEventClick = (event: MapEvent) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Card className="overflow-hidden">
        <CardContent className="p-0 relative">
          {/* World Map Image */}
          <div className="relative w-full h-96 bg-gradient-to-b from-blue-100 to-green-100">
            {/* Placeholder for world map - you can upload your own image */}
            <div className="absolute inset-0 flex items-center justify-center text-gunmetal/50">
              <span className="text-lg">Upload your world map image here</span>
            </div>
            
            {/* Event Dots */}
            {events.map((event) => (
              <button
                key={event.id}
                onClick={() => handleEventClick(event)}
                className="absolute w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg hover:bg-red-600 hover:scale-110 transition-all duration-200 animate-pulse"
                style={{
                  left: `${event.x}%`,
                  top: `${event.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                title={event.location}
              />
            ))}
          </div>
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
