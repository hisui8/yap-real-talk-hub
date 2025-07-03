import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
      description: 'Transform disagreements by truly hearing others',
      realWorldUse: 'Essential for family discussions, workplace conflicts, and social debates',
      steps: [
        'Give your full attention - put away distractions and make genuine eye contact',
        'Use body language to show engagement: nod, lean in, maintain open posture',
        'Ask clarifying questions: "What I hear you saying is..." or "Help me understand..."',
        'Reflect back emotions AND content: "It sounds like you\'re feeling frustrated about..."',
        'Resist the urge to plan your rebuttal while they\'re speaking',
        'Summarize their main points before sharing your perspective'
      ],
      powerExample: 'In heated political discussions, reflecting someone\'s concerns back often makes them more willing to hear your viewpoint'
    },
    {
      id: 'empathy',
      title: 'Empathy Building',
      icon: '❤️',
      description: 'Bridge divides by understanding the person behind the opinion',
      realWorldUse: 'Critical for cross-generational talks, cultural differences, and value conflicts',
      steps: [
        'Ask about personal experiences that shaped their views: "What led you to feel this way?"',
        'Listen for underlying emotions, fears, and needs - not just logical arguments',
        'Share your own vulnerable experiences when it builds connection',
        'Acknowledge valid concerns even when you disagree with conclusions',
        'Use validation phrases: "That must have been difficult" or "I can understand why you\'d think that"',
        'Find shared values beneath different approaches: safety, fairness, family, etc.'
      ],
      powerExample: 'When someone opposes immigration, exploring their job security fears often reveals shared concerns about economic stability'
    },
    {
      id: 'boundaries',
      title: 'Healthy Boundaries',
      icon: '🛡️',
      description: 'Maintain respect while engaging difficult topics',
      realWorldUse: 'Prevents conversations from becoming personal attacks or emotional manipulation',
      steps: [
        'Set expectations upfront: "I\'d like to understand your view, and I hope you\'ll hear mine too"',
        'Use "I" statements for your feelings: "I feel concerned when..." instead of "You always..."',
        'Call out behavior, not character: "That comment felt dismissive" vs "You\'re being dismissive"',
        'Take strategic breaks: "I need a moment to process this" when emotions escalate',
        'Know your exit strategy: "I don\'t think we\'re making progress right now"',
        'Agree to disagree while maintaining relationship: "We see this differently, and that\'s okay"'
      ],
      powerExample: 'In family arguments, taking a 10-minute break often prevents saying things that damage relationships permanently'
    },
    {
      id: 'curiosity',
      title: 'Curious Inquiry',
      icon: '🔍',
      description: 'Replace arguments with genuine investigation',
      realWorldUse: 'Transforms debates into collaborative truth-seeking sessions',
      steps: [
        'Ask questions you don\'t know the answer to: "What experiences shaped this view for you?"',
        'Dig deeper with follow-ups: "Can you give me an example?" or "What would need to change for you to feel differently?"',
        'Explore the "why behind the why": Keep asking until you reach core values or fears',
        'Share your own uncertainty: "I\'m still figuring this out myself"',
        'Look for nuance: "Are there any situations where you might see it differently?"',
        'Express genuine appreciation for their honesty: "Thank you for explaining that to me"'
      ],
      powerExample: 'When someone shares conspiracy theories, asking "What would convince you this might not be true?" opens space for rational discussion'
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
      title: "Climate Change Debate",
      situation: "Friend dismisses climate science as just theories",
      dialogue: {
        person1: "Climate change is just a theory. Scientists have been wrong before.",
        person2: "I hear that you have concerns about trusting scientific predictions. What specific examples made you feel that way? I'd love to understand your perspective better.",
        technique: "Active Listening + Empathy Building",
        explanation: "Rather than attacking, Person 2 acknowledges the emotion behind the statement and asks for the personal experience that shaped this view."
      }
    },
    {
      title: "Political Discussion at Work",
      situation: "Colleague makes sweeping statement about opposing political party",
      dialogue: {
        person1: "All [political party] voters are just selfish and don't care about others.",
        person2: "That's a pretty broad statement. I actually know some [party] voters who volunteer regularly. What specific policies concern you most? Maybe we can focus on those instead.",
        technique: "Setting Boundaries + Steel Man Technique",
        explanation: "Person 2 gently challenges the generalization while redirecting to specific, actionable topics rather than personal attacks."
      }
    },
    {
      title: "Family Immigration Discussion", 
      situation: "Grandparent expresses anti-immigration views during dinner",
      dialogue: {
        person1: "These immigrants are taking all our jobs and don't even try to fit in.",
        person2: "I can hear that you're worried about job security - that's a real concern. Can you tell me more about what you've experienced? I'd also love to share some stories about immigrants I know who are working really hard to contribute.",
        technique: "Empathy Building + Sharing Personal Experience",
        explanation: "Person 2 validates the underlying fear, asks for personal context, and offers to share counter-experiences rather than dismissing the concern."
      }
    },
    {
      title: "Social Media Misinformation",
      situation: "Friend shares conspiracy theory post",
      dialogue: {
        person1: "The mainstream media never reports the real truth about what's happening.",
        person2: "I understand feeling frustrated with media coverage - I've felt that way too. What sources do you trust most? And would you be open to looking at this specific story together to see what different outlets are saying?",
        technique: "Finding Common Ground + Collaborative Inquiry", 
        explanation: "Person 2 acknowledges shared frustration, shows curiosity about their sources, and suggests examining evidence together rather than arguing."
      }
    },
    {
      title: "Generational Technology Gap",
      situation: "Parent criticizes young people's phone usage",
      dialogue: {
        person1: "Your generation is addicted to phones. You can't even have a real conversation anymore.",
        person2: "You're right that phones can be distracting. I've noticed that too. What do you miss most about conversations before smartphones? Maybe we could try having phone-free dinners together?",
        technique: "Finding Common Ground + Solution Building",
        explanation: "Person 2 agrees with the valid concern, asks about the deeper need, and proposes a collaborative solution."
      }
    },
    {
      title: "Campus Free Speech Debate",
      situation: "Classmate argues certain speakers shouldn't be allowed on campus",
      dialogue: {
        person1: "Some viewpoints are just hate speech and shouldn't be given a platform.",
        person2: "I hear that you're concerned about protecting students from harmful rhetoric - that shows you really care about people's wellbeing. Can you help me understand where you draw the line between protecting people and preserving open dialogue?",
        technique: "Reflecting Values + Seeking Understanding",
        explanation: "Person 2 identifies the positive intention behind the stance and asks for clarification on boundaries rather than dismissing the concern."
      }
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
            <p className="text-xl text-gunmetal/90 max-w-3xl mx-auto font-light">
              Master the art of difficult conversations with evidence-based techniques that transform conflict into understanding. 
              See real dialogue examples and learn when each method creates the biggest impact.
            </p>
            
            {/* Credit to Peter Nixon */}
            <div className="mt-8 p-4 bg-sage/10 rounded-lg border border-sage/20">
              <p className="text-sm text-gunmetal mb-2">
                Many of these techniques are inspired by the work of <strong>Peter Nixon</strong>, 
                a renowned expert in dialogue and conflict resolution.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-sage text-sage hover:bg-sage hover:text-white"
                onClick={() => window.open('https://www.ted.com/speakers/peter_nixon', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Watch Peter Nixon's TED Talk
              </Button>
            </div>
          </div>

          {/* Rest of the component remains the same */}
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
                  <Card key={guide.id} className="bg-pearl border-0 shadow-lg hover-scale">
                    <Collapsible
                      open={openSections[guide.id]}
                      onOpenChange={() => toggleSection(guide.id)}
                    >
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-dusty/10 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <span className="text-3xl">{guide.icon}</span>
                              <div className="flex-1">
                                <CardTitle className="text-xl text-gunmetal font-display">
                                  {guide.title}
                                </CardTitle>
                                <p className="text-dusty mb-2">{guide.description}</p>
                                <p className="text-xs text-sage font-medium">
                                  💡 {guide.realWorldUse}
                                </p>
                              </div>
                            </div>
                            <ChevronDown className={`h-5 w-5 text-gunmetal transition-transform ${
                              openSections[guide.id] ? 'rotate-180' : ''
                            }`} />
                          </div>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="pt-0 space-y-6">
                          {/* Step-by-Step Guide */}
                          <div className="bg-sage/10 p-6 rounded-lg">
                            <h4 className="font-semibold text-sage mb-4">🛠️ Step-by-Step Techniques:</h4>
                            <ol className="space-y-3">
                              {guide.steps.map((step, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                  <span className="bg-sage text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                                    {index + 1}
                                  </span>
                                  <span className="text-gunmetal leading-relaxed">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                          
                          {/* Power Example */}
                          <div className="bg-gradient-to-r from-forest/10 to-sage/10 p-5 rounded-lg border border-sage/20">
                            <h4 className="font-semibold text-forest mb-3 flex items-center">
                              <span className="mr-2">⚡</span>
                              Real-World Impact
                            </h4>
                            <p className="text-gunmetal/90 italic">{guide.powerExample}</p>
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
                  <Card key={index} className="bg-gradient-to-br from-plum/20 to-wine/10 border-0 shadow-lg hover-scale">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gunmetal mb-4 font-display">
                        {scenario.title}
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-plum mb-2">📍 Situation:</h4>
                          <p className="text-gunmetal/80">{scenario.situation}</p>
                        </div>
                        
                        {/* Dialogue Exchange */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-plum mb-3">💬 Dialogue in Action:</h4>
                          
                          {/* Person 1 */}
                          <div className="bg-rose-50 border-l-4 border-rose-300 p-4 rounded-r-lg">
                            <div className="flex items-center mb-2">
                              <span className="font-semibold text-rose-700">Person 1:</span>
                            </div>
                            <p className="text-gunmetal italic">"{scenario.dialogue.person1}"</p>
                          </div>
                          
                          {/* Person 2 Response */}
                          <div className="bg-emerald-50 border-l-4 border-emerald-300 p-4 rounded-r-lg">
                            <div className="flex items-center mb-2">
                              <span className="font-semibold text-emerald-700">Person 2 (Using Technique):</span>
                            </div>
                            <p className="text-gunmetal italic">"{scenario.dialogue.person2}"</p>
                          </div>
                        </div>
                        
                        {/* Technique Analysis */}
                        <div className="bg-plum/10 p-4 rounded-lg border border-plum/20">
                          <h4 className="font-semibold text-plum mb-2">🎯 Technique Used: {scenario.dialogue.technique}</h4>
                          <p className="text-gunmetal/90 text-sm">{scenario.dialogue.explanation}</p>
                        </div>
                        
                        {/* Impact Indicator */}
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="bg-sage text-white px-3 py-1 rounded-full font-medium">
                            ✓ De-escalation achieved
                          </span>
                          <span className="bg-forest text-white px-3 py-1 rounded-full font-medium">
                            ✓ Understanding promoted
                          </span>
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
