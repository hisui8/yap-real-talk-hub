import React, { useState, useEffect, useRef } from 'react';
import { Heart, MessageCircle, Share, Play, Pause, Volume2, VolumeX, MoreHorizontal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TheScroll = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [likedPosts, setLikedPosts] = useState<{ [key: number]: boolean }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const samplePosts = [
    {
      id: 1,
      username: 'YAP_Original',
      description: 'Discussing the importance of community. #community #unity #yap',
      videoUrl: 'https://joy.videvo.net/videvo_files/video/free/2014-08/small_watermarked/Running_On_Tarmac_preview.webm',
      likes: 123,
      comments: 45,
      shares: 12,
    },
    {
      id: 2,
      username: 'Debate_Now',
      description: 'Is technology isolating us? #tech #debate #yap',
      videoUrl: 'https://joy.videvo.net/videvo_files/video/free/2017-03/small_watermarked/StockFootage_1703_057-preview.webm',
      likes: 678,
      comments: 90,
      shares: 34,
    },
    {
      id: 3,
      username: 'Global_Talk',
      description: 'Cultural exchange programs benefit society. #culture #global #yap',
      videoUrl: 'https://joy.videvo.net/videvo_files/video/free/2017-03/small_watermarked/StockFootage_1703_034-preview.webm',
      likes: 901,
      comments: 23,
      shares: 56,
    },
    {
      id: 4,
      username: 'Open_Mic',
      description: 'The role of art in social change. #art #socialchange #yap',
      videoUrl: 'https://joy.videvo.net/videvo_files/video/free/2017-03/small_watermarked/StockFootage_1703_078-preview.webm',
      likes: 345,
      comments: 67,
      shares: 78,
    },
    {
      id: 5,
      username: 'Future_Forward',
      description: 'Rethinking education for the 21st century. #education #future #yap',
      videoUrl: 'https://joy.videvo.net/videvo_files/video/free/2017-03/small_watermarked/StockFootage_1703_115-preview.webm',
      likes: 567,
      comments: 89,
      shares: 90,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const scrollPosition = container.scrollTop;
        const itemHeight = container.clientHeight;
        const newVideoIndex = Math.round(scrollPosition / itemHeight);

        setCurrentVideo(newVideoIndex);
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const video = document.getElementById(`video-${currentVideo}`) as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
      video.muted = isMuted;
    }

    return () => {
      if (video) {
        video.pause();
      }
    };
  }, [currentVideo, isPlaying, isMuted]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleLike = (postId: number) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <div className="min-h-screen bg-black font-sans overflow-hidden">
      <style>
        {`
          .scroll-snap-container {
            scroll-snap-type: y mandatory;
            scroll-behavior: smooth;
          }
          
          .scroll-snap-item {
            scroll-snap-align: start;
            scroll-snap-stop: always;
          }
          
          .tiktok-gradient {
            background: linear-gradient(45deg, #ff0050, #ff4d6d, #c44569);
          }
          
          .interaction-button {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .pulse-like {
            animation: pulse 0.6s ease-in-out;
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        `}
      </style>

      <Header />

      <div ref={containerRef} className="scroll-snap-container h-[calc(100vh-100px)] overflow-y-scroll relative">
        {samplePosts.map((post, index) => (
          <div key={post.id} className="scroll-snap-item h-screen flex items-center justify-center relative">
            <video
              id={`video-${index}`}
              src={post.videoUrl}
              className="w-full h-full object-cover"
              loop
              muted={isMuted}
              onClick={togglePlay}
            />

            {/* TikTok Style Sidebar */}
            <div className="absolute right-4 bottom-24 z-10 flex flex-col items-center space-y-4">
              <button onClick={() => handleLike(post.id)} className="interaction-button rounded-full p-3">
                <Heart className={`w-7 h-7 text-white ${likedPosts[post.id] ? 'pulse-like' : ''}`} fill={likedPosts[post.id] ? 'red' : 'none'} />
                <span className="block text-xs mt-1 text-white">{post.likes}</span>
              </button>

              <button className="interaction-button rounded-full p-3">
                <MessageCircle className="w-7 h-7 text-white" />
                <span className="block text-xs mt-1 text-white">{post.comments}</span>
              </button>

              <button className="interaction-button rounded-full p-3">
                <Share className="w-7 h-7 text-white" />
                <span className="block text-xs mt-1 text-white">{post.shares}</span>
              </button>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-8 left-4 z-10 text-white">
              <div className="flex items-center space-x-3 mb-2">
                <div className="rounded-full bg-gray-700 w-8 h-8 flex items-center justify-center text-white">
                  {post.username.charAt(0).toUpperCase()}
                </div>
                <span className="font-semibold">{post.username}</span>
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black">Follow</Button>
              </div>
              <div className="text-sm">{post.description}</div>
            </div>

            {/* Play/Pause Button */}
            <button onClick={togglePlay} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-4 z-10">
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
            </button>

            {/* Mute/Unmute Button */}
            <button onClick={toggleMute} className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10">
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>

            {/* More Options */}
            <button className="absolute top-4 left-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10">
              <MoreHorizontal className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default TheScroll;
