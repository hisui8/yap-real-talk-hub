
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const FeatureCards = () => {
  const features = [
    {
      title: "The Wall",
      path: "/the-wall",
      description: "Share your thoughts on monthly prompts in our collaborative space",
      color: "bg-gradient-to-br from-sage to-forest",
      textColor: "text-white",
      icon: "🧱"
    },
    {
      title: "The Scroll",
      path: "/the-scroll",
      description: "Fact-checked news, student art, and unbiased content in your feed",
      color: "bg-gradient-to-br from-plum to-wine",
      textColor: "text-white", 
      icon: "📜"
    },
    {
      title: "The Table",
      path: "/the-table",
      description: "Conversation starters for dinner, holidays, and social gatherings",
      color: "bg-gradient-to-br from-copper to-gold",
      textColor: "text-white",
      icon: "🍽️"
    },
    {
      title: "The Map",
      path: "/the-map",
      description: "Interactive world map of positive and negative global events",
      color: "bg-gradient-to-br from-charcoal to-gunmetal",
      textColor: "text-white",
      icon: "🗺️"
    },
    {
      title: "The Shop",
      path: "/the-shop",
      description: "Trendy merch that sparks meaningful conversations",
      color: "bg-gradient-to-br from-pearl to-dusty/50",
      textColor: "text-charcoal",
      icon: "🛍️"
    },
    {
      title: "The How To",
      path: "/the-how-to",
      description: "Resources for effective dialogue and conflict resolution",
      color: "bg-gradient-to-br from-ivory to-pearl",
      textColor: "text-gunmetal",
      icon: "📚"
    }
  ];

  return (
    <section className="py-24 px-4 bg-ivory">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-charcoal mb-20 tracking-tight font-display">
          Explore YAP
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link key={feature.title} to={feature.path} className="block">
              <Card 
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
