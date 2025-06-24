
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FeatureCards = () => {
  const features = [
    {
      title: "The Wall",
      description: "Share your thoughts on monthly prompts in our collaborative space",
      color: "bg-coral",
      textColor: "text-white",
      icon: "🧱"
    },
    {
      title: "The Scroll",
      description: "Fact-checked news, student art, and unbiased content in your feed",
      color: "bg-teal",
      textColor: "text-white", 
      icon: "📜"
    },
    {
      title: "The Table",
      description: "Conversation starters for dinner, holidays, and social gatherings",
      color: "bg-mustard",
      textColor: "text-charcoal",
      icon: "🍽️"
    },
    {
      title: "The Map",
      description: "Interactive world map of positive and negative global events",
      color: "bg-navy",
      textColor: "text-white",
      icon: "🗺️"
    },
    {
      title: "The Shop",
      description: "Trendy merch that sparks meaningful conversations",
      color: "bg-coral/20",
      textColor: "text-charcoal",
      icon: "🛍️"
    },
    {
      title: "The How To",
      description: "Resources for effective dialogue and conflict resolution",
      color: "bg-teal/20",
      textColor: "text-charcoal",
      icon: "📚"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-navy mb-16">
          Explore YAP
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className={`${feature.color} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden group`}
            >
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className={`text-2xl font-bold mb-4 ${feature.textColor}`}>
                  {feature.title}
                </h3>
                <p className={`${feature.textColor} opacity-90 leading-relaxed`}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
