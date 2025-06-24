
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedContent = () => {
  const featuredItems = [
    {
      type: "Artwork",
      title: "Climate Change Through My Eyes",
      author: "Maya, 17",
      preview: "🎨",
      bgColor: "bg-coral/10"
    },
    {
      type: "Post",
      title: "Why Gen Z Voting Matters More Than Ever",
      author: "Alex, 19", 
      preview: "✊",
      bgColor: "bg-teal/10"
    },
    {
      type: "Video",
      title: "Bridging the Political Divide at Home",
      author: "Sam, 18",
      preview: "🎥",
      bgColor: "bg-mustard/10"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Featured Voices
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
            Discover powerful content created by young advocates making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <Card key={index} className={`${item.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer`}>
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-center">{item.preview}</div>
                <div className="text-sm font-semibold text-coral mb-2">{item.type}</div>
                <h3 className="text-xl font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal/70">by {item.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
