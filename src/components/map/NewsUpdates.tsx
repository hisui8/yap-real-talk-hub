
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface NewsUpdate {
  id: number;
  headline: string;
  summary: string;
  time: string;
  category: string;
}

interface GlobalEvent {
  id: number;
  region: string;
  event: string;
  type: 'positive' | 'negative';
  description: string;
}

interface NewsUpdatesProps {
  newsUpdates: NewsUpdate[];
  events: GlobalEvent[];
  selectedRegion: string | null;
  onSelectRegion: (region: string | null) => void;
}

const NewsUpdates: React.FC<NewsUpdatesProps> = ({ 
  newsUpdates, 
  events, 
  selectedRegion, 
  onSelectRegion 
}) => {
  return (
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
        {events.slice(0, 3).map((event) => (
          <Card 
            key={event.id} 
            className={`border-0 shadow-sm hover:shadow-md transition-all cursor-pointer ${
              selectedRegion === event.region ? 'ring-2 ring-sage' : ''
            } ${
              event.type === 'positive' 
                ? 'bg-gradient-to-br from-sage/10 to-forest/5' 
                : 'bg-gradient-to-br from-copper/10 to-gold/5'
            }`}
            onClick={() => onSelectRegion(selectedRegion === event.region ? null : event.region)}
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
  );
};

export default NewsUpdates;
