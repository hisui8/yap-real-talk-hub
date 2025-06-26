
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TheTable = () => {
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const navigate = useNavigate();

  const tableSeats = {
    'dinner-1': {
      position: { top: '20%', left: '30%' },
      event: 'Family Dinner',
      topics: [
        "If you could change one policy to help your generation, what would it be?",
        "What's one thing your generation does better than previous ones?",
        "What traditions do you want to keep from our family?"
      ]
    },
    'dinner-2': {
      position: { top: '20%', left: '70%' },
      event: 'Date Night',
      topics: [
        "What's something you've changed your mind about recently?",
        "If we had to solve a problem together, what would be your approach?",
        "What's a meaningful conversation you remember from childhood?"
      ]
    },
    'holiday-1': {
      position: { top: '80%', left: '20%' },
      event: 'Holiday Gathering',
      topics: [
        "What traditions should we keep and what new ones should we create?",
        "How has the world changed since you were my age?",
        "What's the most important lesson you've learned this year?"
      ]
    },
    'holiday-2': {
      position: { top: '80%', left: '50%' },
      event: 'Thanksgiving',
      topics: [
        "What are you most grateful for that others might not know about?",
        "How do you think our family has grown this year?",
        "What's one way we could better support each other?"
      ]
    },
    'holiday-3': {
      position: { top: '80%', left: '80%' },
      event: 'Birthday Party',
      topics: [
        "What's the best advice someone has given you?",
        "If you could relive one moment from this past year, what would it be?",
        "What are you most excited about for the year ahead?"
      ]
    },
    'social-1': {
      position: { top: '50%', left: '15%' },
      event: 'Coffee Chat',
      topics: [
        "What's something you're passionate about that others might not expect?",
        "How do you handle disagreements with people you care about?",
        "What's a belief you hold that has evolved over time?"
      ]
    },
    'social-2': {
      position: { top: '50%', left: '85%' },
      event: 'Book Club',
      topics: [
        "What book or story has changed how you see the world?",
        "How do you think technology is changing human relationships?",
        "What's a difficult conversation you're glad you had?"
      ]
    }
  };

  const handleSeatClick = (seatId: string) => {
    setSelectedSeat(seatId);
  };

  const handleCloseDialog = () => {
    setSelectedSeat(null);
  };

  const handleGoToHowTo = () => {
    navigate('/the-how-to');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 font-sans">
      <Header />
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 tracking-tight font-display">
              The Table 🍽️
            </h1>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto font-light">
              Transform any gathering into meaningful connection. Click a seat to unlock conversation starters that spark real dialogue.
            </p>
          </div>

          {/* Table Container */}
          <div className="relative mx-auto max-w-4xl h-96 md:h-[500px]">
            {/* Table Surface */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-40 md:w-80 md:h-52 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full shadow-2xl border-8 border-slate-500">
              {/* Table Grain Effect */}
              <div className="w-full h-full rounded-full bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>
              
              {/* Center Button */}
              <Button
                onClick={handleGoToHowTo}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                How To Guide 📚
              </Button>
            </div>

            {/* Seats */}
            {Object.entries(tableSeats).map(([seatId, seat]) => (
              <button
                key={seatId}
                onClick={() => handleSeatClick(seatId)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-slate-400 to-slate-500 hover:from-slate-500 hover:to-slate-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border-4 border-slate-300 flex items-center justify-center group"
                style={{
                  top: seat.position.top,
                  left: seat.position.left,
                }}
              >
                <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform">
                  🪑
                </span>
                
                {/* Seat Label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white px-2 py-1 rounded text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {seat.event}
                </div>
              </button>
            ))}
          </div>

          {/* Dialog for Seat Topics */}
          <Dialog open={selectedSeat !== null} onOpenChange={handleCloseDialog}>
            <DialogContent className="max-w-md bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200">
              <DialogHeader>
                <DialogTitle className="text-2xl text-slate-800 font-display text-center">
                  {selectedSeat && tableSeats[selectedSeat as keyof typeof tableSeats]?.event} 🍽️
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-slate-700 text-center font-medium">
                  Perfect conversation starters for this occasion:
                </p>
                <div className="space-y-3">
                  {selectedSeat && tableSeats[selectedSeat as keyof typeof tableSeats]?.topics.map((topic, index) => (
                    <Card key={index} className="bg-white/70 border-slate-200 shadow-sm">
                      <CardContent className="p-4">
                        <p className="text-slate-800 text-sm leading-relaxed">
                          "{topic}"
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center pt-4">
                  <Button
                    onClick={handleGoToHowTo}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2"
                  >
                    Learn How To Guide Conversations 📚
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Guidelines Section */}
          <Card className="mt-12 bg-gradient-to-br from-slate-100/80 to-slate-200/80 border-slate-300 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 font-display text-center">
                Creating Meaningful Moments Around The Table
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                    <span className="mr-2">✨</span>
                    Do:
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Listen to understand, not to respond</li>
                    <li>• Ask follow-up questions</li>
                    <li>• Share personal experiences</li>
                    <li>• Acknowledge different perspectives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                    <span className="mr-2">⚠️</span>
                    Avoid:
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Making assumptions</li>
                    <li>• Interrupting or dominating</li>
                    <li>• Using absolute statements</li>
                    <li>• Getting defensive</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheTable;
