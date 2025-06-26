
import React, { useState, useEffect, useRef } from 'react';
import ScrollHeader from '../components/scroll/ScrollHeader';
import VideoPost from '../components/scroll/VideoPost';
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

  const handleUpload = () => {
    console.log('Upload content');
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

      <ScrollHeader onUpload={handleUpload} />

      <div ref={containerRef} className="scroll-snap-container h-screen overflow-y-scroll relative pt-32">
        {samplePosts.map((post, index) => (
          <VideoPost
            key={post.id}
            post={post}
            index={index}
            isPlaying={isPlaying}
            isMuted={isMuted}
            isLiked={likedPosts[post.id]}
            onTogglePlay={togglePlay}
            onToggleMute={toggleMute}
            onLike={handleLike}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default TheScroll;
