
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const FeatureCards = () => {
  const features = [
    {
      title: "The Wall",
      path: "/the-wall",
      description: "Share anonymous thoughts on monthly prompts. Real voices, unfiltered perspectives, authentic community dialogue.",
      color: "bg-gradient-to-br from-sage to-forest",
      textColor: "text-white",
      icon: "🧱"
    },
    {
      title: "The Scroll",
      path: "/the-scroll",
      description: "Curated conversations that matter. Student voices, fact-checked content, meaningful discourse in short-form.",
      color: "bg-gradient-to-br from-plum to-wine",
      textColor: "text-white", 
      icon: "📜"
    },
    {
      title: "The Table",
      path: "/the-table",
      description: "Break the silence at dinner. Conversation starters that bridge generational gaps and spark understanding.",
      color: "bg-gradient-to-br from-copper to-gold",
      textColor: "text-white",
      icon: "🍽️"
    },
    {
      title: "The Map",
      path: "/the-map",
      description: "Your generation's impact, visualized. Track youth movements, social change, and global progress in real-time.",
      color: "bg-gradient-to-br from-charcoal to-gunmetal",
      textColor: "text-white",
      icon: "🗺️"
    },
    {
      title: "The Shop",
      path: "/the-shop",
      description: "Wear your values. Conversation-starting merch that funds youth programs and amplifies important messages.",
      color: "bg-gradient-to-br from-pearl to-dusty/50",
      textColor: "text-charcoal",
      icon: "🛍️"
    },
    {
      title: "The How To",
      path: "/the-how-to",
      description: "Master difficult conversations. Evidence-based techniques for dialogue, empathy, and positive conflict resolution.",
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
                className={`${feature.color} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden group rounded-2xl h-full`}
              >
                <CardContent className="p-10 flex flex-col h-full">
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className={`text-2xl font-semibold mb-4 ${feature.textColor} tracking-wide font-display`}>
                    {feature.title}
                  </h3>
                  <p className={`${feature.textColor} opacity-90 leading-relaxed font-light flex-grow`}>
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
