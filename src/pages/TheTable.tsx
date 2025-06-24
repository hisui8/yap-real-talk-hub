
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TheTable = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const conversationStarters = {
    dinner: [
      {
        id: 1,
        question: "If you could change one policy to help your generation, what would it be?",
        context: "Great for discussing priorities and values across generations",
        tips: "Listen for underlying values, not just surface opinions"
      },
      {
        id: 2,
        question: "What's one thing your generation does better than previous ones?",
        context: "Builds appreciation and positive dialogue",
        tips: "Focus on strengths and acknowledge contributions"
      }
    ],
    holidays: [
      {
        id: 1,
        question: "What traditions do you want to keep, and what new ones should we create?",
        context: "Perfect for bridging generational differences during family gatherings",
        tips: "Honor the past while embracing change"
      },
      {
        id: 2,
        question: "How has the world changed since you were my age?",
        context: "Encourages storytelling and perspective sharing",
        tips: "Ask follow-up questions about specific changes"
      }
    ],
    social: [
      {
        id: 1,
        question: "What's one issue you've changed your mind about recently?",
        context: "Great for showing intellectual humility and growth",
        tips: "Share your own examples first to create safety"
      },
      {
        id: 2,
        question: "If we had to solve [current issue] together, what would be your first step?",
        context: "Moves from debate to collaboration",
        tips: "Focus on solutions, not blame"
      }
    ]
  };

  const handleCardClick = (id: number) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-ivory font-sans">
      <Header />
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight font-display">
              The Table 🍽️
            </h1>
            <p className="text-xl text-gunmetal/90 max-w-2xl mx-auto font-light">
              Conversation starters for dinner, holidays, and social gatherings that bring people together
            </p>
          </div>

          <Tabs defaultValue="dinner" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-pearl">
              <TabsTrigger value="dinner" className="data-[state=active]:bg-sage data-[state=active]:text-white">
                Dinner Table
              </TabsTrigger>
              <TabsTrigger value="holidays" className="data-[state=active]:bg-sage data-[state=active]:text-white">
                Holiday Gatherings
              </TabsTrigger>
              <TabsTrigger value="social" className="data-[state=active]:bg-sage data-[state=active]:text-white">
                Social Events
              </TabsTrigger>
            </TabsList>

            {Object.entries(conversationStarters).map(([category, starters]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {starters.map((starter) => (
                    <Card 
                      key={starter.id}
                      className={`cursor-pointer transition-all duration-300 border-0 shadow-lg hover:shadow-xl ${
                        selectedCard === starter.id 
                          ? 'bg-gradient-to-br from-sage/20 to-forest/10 scale-105' 
                          : 'bg-pearl hover:bg-dusty/10'
                      }`}
                      onClick={() => handleCardClick(starter.id)}
                    >
                      <CardHeader>
                        <CardTitle className="text-lg text-gunmetal font-display">
                          {starter.question}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gunmetal/80 mb-4 leading-relaxed">
                          {starter.context}
                        </p>
                        {selectedCard === starter.id && (
                          <div className="mt-4 p-4 bg-sage/10 rounded-lg border border-sage/20">
                            <h4 className="font-semibold text-sage mb-2">💡 Conversation Tip:</h4>
                            <p className="text-gunmetal text-sm">{starter.tips}</p>
                          </div>
                        )}
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-4 border-sage text-sage hover:bg-sage hover:text-white"
                        >
                          {selectedCard === starter.id ? 'Hide Tips' : 'Show Tips'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Guidelines Section */}
          <Card className="mt-12 bg-gradient-to-br from-copper/20 to-gold/10 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-charcoal font-display">Guidelines for Meaningful Conversations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gunmetal mb-2">Do:</h4>
                  <ul className="space-y-1 text-gunmetal/80">
                    <li>• Listen to understand, not to respond</li>
                    <li>• Ask follow-up questions</li>
                    <li>• Share personal experiences</li>
                    <li>• Acknowledge different perspectives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gunmetal mb-2">Avoid:</h4>
                  <ul className="space-y-1 text-gunmetal/80">
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
