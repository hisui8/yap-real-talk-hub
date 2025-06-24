
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TheHowTo = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const dialogueGuides = [
    {
      id: 'listening',
      title: 'Active Listening',
      icon: '👂',
      description: 'Master the art of truly hearing others',
      steps: [
        'Give your full attention - put away distractions',
        'Make eye contact and use body language to show engagement',
        'Ask clarifying questions: "What I hear you saying is..."',
        'Reflect back what you heard before responding',
        'Avoid planning your response while they\'re speaking'
      ]
    },
    {
      id: 'empathy',
      title: 'Building Empathy',
      icon: '❤️',
      description: 'Connect with different perspectives',
      steps: [
        'Ask about personal experiences behind opinions',
        'Try to understand the emotions, not just the logic',
        'Share your own vulnerable experiences when appropriate',
        'Acknowledge valid points even when you disagree',
        'Use phrases like "I can see why you feel that way"'
      ]
    },
    {
      id: 'boundaries',
      title: 'Setting Boundaries',
      icon: '🛡️',
      description: 'Keep conversations respectful and productive',
      steps: [
        'Establish ground rules before difficult conversations',
        'Use "I" statements instead of "you" accusations',
        'Take breaks when emotions run high',
        'Know when to agree to disagree',
        'End conversations that become harmful or unproductive'
      ]
    }
  ];

  const conflictResolution = [
    {
      id: 'deescalation',
      title: 'De-escalation Techniques',
      strategies: [
        'Lower your voice and speak slowly',
        'Acknowledge the other person\'s feelings',
        'Find common ground to build on',
        'Use humor appropriately to lighten tension',
        'Take responsibility for your part in the conflict'
      ]
    },
    {
      id: 'mediation',
      title: 'Mediation Skills',
      strategies: [
        'Stay neutral and avoid taking sides',
        'Help each person feel heard',
        'Identify underlying needs, not just positions',
        'Guide toward collaborative solutions',
        'Follow up to ensure agreements are working'
      ]
    }
  ];

  const practicalScenarios = [
    {
      title: 'Family Dinner Politics',
      situation: 'Your uncle makes a comment about "kids these days" that frustrates you',
      approach: 'Ask genuine questions about his experiences growing up, then share yours',
      example: '"What was it like when you were starting your career? I\'d love to understand your perspective better."'
    },
    {
      title: 'Social Media Arguments',
      situation: 'A friend posts something you strongly disagree with',
      approach: 'Move the conversation to private messages or in-person',
      example: '"I saw your post and have a different view. Would you be open to chatting about it over coffee?"'
    },
    {
      title: 'Classroom Debates',
      situation: 'Heated discussion in class about a controversial topic',
      approach: 'Use the "steel man" technique - present the strongest version of opposing views',
      example: '"I think what Sarah is saying is... [restate their best argument]. Is that right, Sarah?"'
    }
  ];

  return (
    <div className="min-h-screen bg-ivory font-sans">
      <Header />
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight font-display">
              The How To 📚
            </h1>
            <p className="text-xl text-gunmetal/90 max-w-2xl mx-auto font-light">
              Resources for effective dialogue and conflict resolution to help you navigate challenging conversations
            </p>
          </div>

          <Tabs defaultValue="dialogue" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-pearl">
              <TabsTrigger value="dialogue" className="data-[state=active]:bg-sage data-[state=active]:text-white">
                Dialogue Skills
              </TabsTrigger>
              <TabsTrigger value="conflict" className="data-[state=active]:bg-sage data-[state=active]:text-white">
                Conflict Resolution
              </TabsTrigger>
              <TabsTrigger value="scenarios" className="data-[state=active]:bg-sage data-[state=active]:text-white">
                Real Scenarios
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dialogue">
              <div className="space-y-6">
                {dialogueGuides.map((guide) => (
                  <Card key={guide.id} className="bg-pearl border-0 shadow-lg">
                    <Collapsible
                      open={openSections[guide.id]}
                      onOpenChange={() => toggleSection(guide.id)}
                    >
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-dusty/10 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <span className="text-3xl">{guide.icon}</span>
                              <div>
                                <CardTitle className="text-xl text-gunmetal font-display">
                                  {guide.title}
                                </CardTitle>
                                <p className="text-dusty">{guide.description}</p>
                              </div>
                            </div>
                            <ChevronDown className={`h-5 w-5 text-gunmetal transition-transform ${
                              openSections[guide.id] ? 'rotate-180' : ''
                            }`} />
                          </div>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="pt-0">
                          <div className="bg-sage/10 p-6 rounded-lg">
                            <h4 className="font-semibold text-sage mb-4">Step-by-Step Guide:</h4>
                            <ol className="space-y-3">
                              {guide.steps.map((step, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                  <span className="bg-sage text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                                    {index + 1}
                                  </span>
                                  <span className="text-gunmetal">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="conflict">
              <div className="space-y-6">
                {conflictResolution.map((section) => (
                  <Card key={section.id} className="bg-gradient-to-br from-copper/20 to-gold/10 border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl text-gunmetal font-display">
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.strategies.map((strategy, index) => (
                          <div key={index} className="bg-ivory/50 p-4 rounded-lg">
                            <div className="flex items-start space-x-3">
                              <span className="bg-copper text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                                {index + 1}
                              </span>
                              <span className="text-gunmetal">{strategy}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="scenarios">
              <div className="space-y-6">
                {practicalScenarios.map((scenario, index) => (
                  <Card key={index} className="bg-gradient-to-br from-plum/20 to-wine/10 border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gunmetal mb-4 font-display">
                        {scenario.title}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-plum mb-2">Situation:</h4>
                          <p className="text-gunmetal/80">{scenario.situation}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-plum mb-2">Approach:</h4>
                          <p className="text-gunmetal/80">{scenario.approach}</p>
                        </div>
                        <div className="bg-plum/10 p-4 rounded-lg border border-plum/20">
                          <h4 className="font-semibold text-plum mb-2">Example Response:</h4>
                          <p className="text-gunmetal italic">"{scenario.example}"</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Quick Reference Card */}
          <Card className="mt-12 bg-gradient-to-br from-sage/20 to-forest/10 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-charcoal font-display text-center">
                Quick Reference: The BRIDGE Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { letter: 'B', word: 'Breathe', tip: 'Take a moment before responding' },
                  { letter: 'R', word: 'Reflect', tip: 'Mirror back what you heard' },
                  { letter: 'I', word: 'Inquire', tip: 'Ask genuine questions' },
                  { letter: 'D', word: 'Dialogue', tip: 'Share your perspective' },
                  { letter: 'G', word: 'Grace', tip: 'Extend kindness and patience' },
                  { letter: 'E', word: 'Evolve', tip: 'Be open to changing your mind' }
                ].map((item) => (
                  <div key={item.letter} className="text-center">
                    <div className="bg-sage text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">
                      {item.letter}
                    </div>
                    <h4 className="font-semibold text-gunmetal mb-2">{item.word}</h4>
                    <p className="text-sm text-gunmetal/80">{item.tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheHowTo;
