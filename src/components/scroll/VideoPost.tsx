
import React from 'react';
import { Heart, MessageCircle, Share, Play, Pause, Volume2, VolumeX, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Post {
  id: number;
  username: string;
  description: string;
  videoUrl: string;
  likes: number;
  comments: number;
  shares: number;
}

interface VideoPostProps {
  post: Post;
  index: number;
  isPlaying: boolean;
  isMuted: boolean;
  isLiked: boolean;
  onTogglePlay: () => void;
  onToggleMute: () => void;
  onLike: (postId: number) => void;
}

const VideoPost: React.FC<VideoPostProps> = ({
  post,
  index,
  isPlaying,
  isMuted,
  isLiked,
  onTogglePlay,
  onToggleMute,
  onLike
}) => {
  return (
    <div className="scroll-snap-item h-screen flex items-center justify-center relative">
      <video
        id={`video-${index}`}
        src={post.videoUrl}
        className="w-full h-full object-cover"
        loop
        muted={isMuted}
        onClick={onTogglePlay}
      />

      {/* TikTok Style Sidebar */}
      <div className="absolute right-4 bottom-24 z-10 flex flex-col items-center space-y-4">
        <button onClick={() => onLike(post.id)} className="interaction-button rounded-full p-3">
          <Heart 
            className={`w-7 h-7 text-white ${isLiked ? 'pulse-like' : ''}`} 
            fill={isLiked ? 'red' : 'none'} 
          />
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
          <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black">
            Follow
          </Button>
        </div>
        <div className="text-sm">{post.description}</div>
      </div>

      {/* Play/Pause Button */}
      <button 
        onClick={onTogglePlay} 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-4 z-10"
      >
        {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
      </button>

      {/* Mute/Unmute Button */}
      <button 
        onClick={onToggleMute} 
        className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10"
      >
        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
      </button>

      {/* More Options */}
      <button className="absolute top-4 left-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10">
        <MoreHorizontal className="w-6 h-6" />
      </button>
    </div>
  );
};

export default VideoPost;
