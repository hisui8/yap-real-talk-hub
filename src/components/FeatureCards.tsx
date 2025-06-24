
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FeatureCards = () => {
  const features = [
    {
      title: "The Wall",
      description: "Share your thoughts on monthly prompts in our collaborative space",
      color: "bg-gradient-to-br from-emerald to-emerald/80",
      textColor: "text-white",
      icon: "🧱"
    },
    {
      title: "The Scroll",
      description: "Fact-checked news, student art, and unbiased content in your feed",
      color: "bg-gradient-to-br from-indigo to-indigo/80",
      textColor: "text-white", 
      icon: "📜"
    },
    {
      title: "The Table",
      description: "Conversation starters for dinner, holidays, and social gatherings",
      color: "bg-gradient-to-br from-amber to-amber/80",
      textColor: "text-slate",
      icon: "🍽️"
    },
    {
      title: "The Map",
      description: "Interactive world map of positive and negative global events",
      color: "bg-gradient-to-br from-slate to-storm",
      textColor: "text-white",
      icon: "🗺️"
    },
    {
      title: "The Shop",
      description: "Trendy merch that sparks meaningful conversations",
      color: "bg-gradient-to-br from-peach to-cream",
      textColor: "text-storm",
      icon: "🛍️"
    },
    {
      title: "The How To",
      description: "Resources for effective dialogue and conflict resolution",
      color: "bg-gradient-to-br from-mint/40 to-lavender/40",
      textColor: "text-storm",
      icon: "📚"
    }
  ];

  return (
    <section className="py-24 px-4 bg-cream">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-slate mb-20 tracking-tight font-display">
          Explore YAP
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className={`${feature.color} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden group rounded-2xl`}
            >
              <CardContent className="p-10">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className={`text-2xl font-semibold mb-4 ${feature.textColor} tracking-wide font-display`}>
                  {feature.title}
                </h3>
                <p className={`${feature.textColor} opacity-90 leading-relaxed font-light`}>
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
