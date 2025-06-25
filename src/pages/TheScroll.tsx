
import React, { useState, useRef, useEffect } from 'react';
import { Heart, MessageCircle, Share, MoreVertical, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TheScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const feedItems = [
    {
      id: 1,
      type: "news",
      title: "Global Youth Climate Summit Announces 2024 Action Plan",
      content: "Representatives from 50 countries commit to concrete climate actions including renewable energy targets and youth-led initiatives.",
      author: "Climate News Network",
      avatar: "🌍",
      verified: true,
      likes: 2453,
      comments: 189,
      shares: 67,
      category: "Environment",
      bgGradient: "from-emerald-400 to-teal-600",
      timeAgo: "2h"
    },
    {
      id: 2,
      type: "art",
      title: "Student Creates Viral Mural About Mental Health",
      content: "High school artist Jordan's powerful mural sparks nationwide conversation about teen mental health and breaks stigma barriers.",
      author: "Jordan M.",
      age: "16",
      avatar: "🎨",
      verified: false,
      likes: 8921,
      comments: 445,
      shares: 234,
      category: "Art & Culture",
      bgGradient: "from-purple-400 to-pink-600",
      timeAgo: "4h"
    },
    {
      id: 3,
      type: "news",
      title: "New Study: Social Media's Impact on Teen Political Engagement",
      content: "Research shows 73% of teens get political news from social platforms, reshaping how young people engage with democracy.",
      author: "Youth Research Institute",
      avatar: "📊",
      verified: true,
      likes: 1567,
      comments: 298,
      shares: 89,
      category: "Technology",
      bgGradient: "from-blue-400 to-indigo-600",
      timeAgo: "6h"
    },
    {
      id: 4,
      type: "student-voice",
      title: "Why Our Generation Will Change Politics",
      content: "We're not just waiting for change - we're creating it. From climate action to social justice, here's why Gen Z is different.",
      author: "Alex Chen",
      age: "18",
      avatar: "💪",
      verified: false,
      likes: 12543,
      comments: 876,
      shares: 445,
      category: "Politics",
      bgGradient: "from-orange-400 to-red-600",
      timeAgo: "8h"
    },
    {
      id: 5,
      type: "art",
      title: "Poetry That Heals: Words for Our Generation",
      content: "In a world of noise, sometimes poetry cuts through. These verses speak to what it means to grow up in uncertain times.",
      author: "Maya Rodriguez",
      age: "17",
      avatar: "✍️",
      verified: false,
      likes: 3456,
      comments: 234,
      shares: 123,
      category: "Literature",
      bgGradient: "from-rose-400 to-pink-600",
      timeAgo: "12h"
    }
  ];

  const handleScroll = (direction: 'up' | 'down') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const newIndex = direction === 'down' 
      ? Math.min(currentIndex + 1, feedItems.length - 1)
      : Math.max(currentIndex - 1, 0);
    
    setCurrentIndex(newIndex);
    container.scrollTo({
      top: newIndex * window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleLike = (itemId: number) => {
    // Handle like functionality
    console.log('Liked item:', itemId);
  };

  const handleComment = (itemId: number) => {
    // Handle comment functionality
    console.log('Comment on item:', itemId);
  };

  const handleShare = (itemId: number) => {
    // Handle share functionality
    console.log('Share item:', itemId);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        handleScroll('down');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        handleScroll('up');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="h-screen bg-black font-sans overflow-hidden">
      <Header />
      
      <div 
        ref={scrollContainerRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {feedItems.map((item, index) => (
          <div
            key={item.id}
            className={`h-screen w-full snap-start relative bg-gradient-to-br ${item.bgGradient} flex items-center justify-center`}
          >
            {/* Content Container */}
            <div className="relative w-full h-full flex items-center justify-center p-6">
              {/* Main Content */}
              <div className="max-w-2xl text-center text-white z-10">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-black/30 rounded-full text-sm font-medium backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {item.title}
                </h1>
                
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90">
                  {item.content}
                </p>
                
                {/* Author Info */}
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm">
                    {item.avatar}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{item.author}</span>
                      {item.verified && <span className="text-blue-300">✓</span>}
                    </div>
                    {item.age && <span className="text-sm text-white/80">Age {item.age}</span>}
                    <span className="text-sm text-white/70">{item.timeAgo}</span>
                  </div>
                </div>
              </div>

              {/* Side Actions */}
              <div className="absolute right-4 bottom-24 flex flex-col space-y-6 z-20">
                <button
                  onClick={() => handleLike(item.id)}
                  className="flex flex-col items-center space-y-1 text-white hover:scale-110 transition-transform"
                >
                  <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Heart className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium">{item.likes.toLocaleString()}</span>
                </button>

                <button
                  onClick={() => handleComment(item.id)}
                  className="flex flex-col items-center space-y-1 text-white hover:scale-110 transition-transform"
                >
                  <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium">{item.comments}</span>
                </button>

                <button
                  onClick={() => handleShare(item.id)}
                  className="flex flex-col items-center space-y-1 text-white hover:scale-110 transition-transform"
                >
                  <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Share className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium">{item.shares}</span>
                </button>

                <button className="flex flex-col items-center space-y-1 text-white hover:scale-110 transition-transform">
                  <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MoreVertical className="w-6 h-6" />
                  </div>
                </button>
              </div>

              {/* Media Controls */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-4 z-20">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm hover:scale-110 transition-transform"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm hover:scale-110 transition-transform"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>

              {/* Navigation Dots */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-20">
                {feedItems.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-8 rounded-full transition-all ${
                      idx === index ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Scroll Hints */}
              {index === 0 && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm flex flex-col items-center space-y-2 animate-bounce z-20">
                  <span>Swipe up for more</span>
                  <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/40 rounded-full mt-2"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/20 z-0"></div>
          </div>
        ))}
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TheScroll;
