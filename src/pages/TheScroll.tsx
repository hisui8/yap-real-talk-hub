
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TheScroll = () => {
  const newsItems = [
    {
      id: 1,
      type: "News",
      title: "Global Youth Climate Summit Announces 2024 Action Plan",
      summary: "Representatives from 50 countries commit to concrete climate actions",
      source: "Climate News Network",
      verified: true,
      category: "Environment",
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      type: "Art",
      title: "Student Creates Viral Mural About Mental Health",
      summary: "High school artist's work sparks nationwide conversation",
      source: "Student Showcase",
      verified: true,
      category: "Art & Culture",
      timeAgo: "4 hours ago"
    },
    {
      id: 3,
      type: "News",
      title: "New Study: Social Media's Impact on Teen Political Engagement",
      summary: "Research shows 73% of teens get political news from social platforms",
      source: "Youth Research Institute",
      verified: true,
      category: "Technology",
      timeAgo: "6 hours ago"
    }
  ];

  const studentArt = [
    {
      id: 1,
      title: "Voices Unheard",
      artist: "Jordan M., 16",
      medium: "Digital Art",
      description: "A powerful piece about amplifying marginalized voices in political discourse"
    },
    {
      id: 2,
      title: "Bridge Builder",
      artist: "Casey L., 18",
      medium: "Photography",
      description: "A photo series documenting intergenerational political conversations"
    }
  ];

  return (
    <div className="min-h-screen bg-ivory font-sans">
      <Header />
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight font-display">
              The Scroll 📜
            </h1>
            <p className="text-xl text-gunmetal/90 max-w-2xl mx-auto font-light">
              Fact-checked news, student art, and unbiased content curated for thoughtful minds
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main News Feed */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold text-charcoal mb-6 font-display">Latest News</h2>
              {newsItems.map((item) => (
                <Card key={item.id} className="bg-pearl border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-sage text-white">{item.category}</Badge>
                        {item.verified && <Badge variant="outline" className="border-forest text-forest">✓ Verified</Badge>}
                      </div>
                      <span className="text-sm text-dusty">{item.timeAgo}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gunmetal mb-3 font-display">{item.title}</h3>
                    <p className="text-gunmetal/80 mb-4 leading-relaxed">{item.summary}</p>
                    <p className="text-sm text-dusty">Source: {item.source}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Student Art Sidebar */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-charcoal mb-6 font-display">Student Spotlight</h2>
              {studentArt.map((art) => (
                <Card key={art.id} className="bg-gradient-to-br from-plum/20 to-wine/10 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-full h-32 bg-dusty/20 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-4xl">🎨</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gunmetal mb-2 font-display">{art.title}</h3>
                    <p className="text-sm text-sage font-medium mb-2">{art.artist}</p>
                    <p className="text-xs text-dusty mb-3">{art.medium}</p>
                    <p className="text-sm text-gunmetal/80 leading-relaxed">{art.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheScroll;
