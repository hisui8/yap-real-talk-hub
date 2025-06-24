
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedContent = () => {
  const featuredItems = [
    {
      type: "Artwork",
      title: "Climate Change Through My Eyes",
      author: "Maya, 17",
      preview: "🎨",
      bgColor: "bg-gradient-to-br from-coral/10 to-blush"
    },
    {
      type: "Post",
      title: "Why Gen Z Voting Matters More Than Ever",
      author: "Alex, 19", 
      preview: "✊",
      bgColor: "bg-gradient-to-br from-teal/10 to-sage/10"
    },
    {
      type: "Video",
      title: "Bridging the Political Divide at Home",
      author: "Sam, 18",
      preview: "🎥",
      bgColor: "bg-gradient-to-br from-mustard/10 to-pearl"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-pearl to-blush/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-navy mb-8 tracking-tight">
            Featured Voices
          </h2>
          <p className="text-xl text-slate/90 max-w-2xl mx-auto font-light">
            Discover powerful content created by young advocates making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <Card key={index} className={`${item.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer rounded-2xl`}>
              <CardContent className="p-8">
                <div className="text-5xl mb-6 text-center">{item.preview}</div>
                <div className="text-sm font-semibold text-coral mb-3 tracking-wide">{item.type}</div>
                <h3 className="text-xl font-semibold text-charcoal mb-3 tracking-wide">{item.title}</h3>
                <p className="text-slate/80 font-light">by {item.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
