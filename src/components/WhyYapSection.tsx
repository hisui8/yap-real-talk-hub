import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WhyYapSection = () => {
  const beliefs = [
    {
      title: "Effective dialogue",
      description: "Where people actually listen to each other.",
      icon: "👂"
    },
    {
      title: "Learningful exchanges", 
      description: "Where ideas are explored, not attacked.",
      icon: "💡"
    },
    {
      title: "Productive boundaries",
      description: "Inspired by time-tested methods (like Nixon's 5-step process or Indigenous traditions of respectful pacing), we guide conversations so they stay respectful and constructive.",
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-pearl to-ivory">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal mb-8 tracking-tight font-display">
            Why YAP?
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gunmetal/90 leading-relaxed">
            <p>
              <strong className="text-charcoal">YAP (Youth, Articulation, Perspective)</strong> exists to spark meaningful, grounded conversations among young people—the future shapers of our world.
            </p>
            <p>
              We're living in a time where social media often amplifies noise over nuance. It's easy to fall into cycles of conformity, conflict, or shallow communication. YAP is here to break that cycle.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-charcoal mb-8 text-center font-display">
            We believe in:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <Card key={index} className="bg-white/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{belief.icon}</div>
                  <h4 className="text-xl font-semibold text-charcoal mb-4 font-display">
                    {belief.title}
                  </h4>
                  <p className="text-gunmetal/80 leading-relaxed">
                    {belief.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-sage/20 to-forest/10 rounded-2xl p-8 md:p-12 border border-sage/20">
          <div className="max-w-4xl mx-auto text-center space-y-6 text-lg text-gunmetal/90 leading-relaxed">
            <p>
              Through experience, we've learned that having real conversations about real problems—climate, identity, technology, justice—requires more than just open forums. It takes care. It takes structure. It takes intention.
            </p>
            <p className="text-xl font-semibold text-charcoal">
              YAP is that intentional space.
            </p>
            <div className="bg-white/30 rounded-lg p-6 mt-8">
              <p className="text-2xl font-bold text-charcoal font-display">
                Let's talk better, not louder. Let's create dialogue that helps us grow, not divide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyYapSection;