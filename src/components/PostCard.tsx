
import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
}

interface Post {
  id: number;
  author: string;
  age: number;
  content: string;
  likes: number;
  color: string;
  position: { x: number; y: number };
  comments: Comment[];
}

interface PostCardProps {
  post: Post;
  index: number;
  onLike: (postId: number) => void;
  onComment: (post: Post) => void;
}

const PostCard = ({ post, index, onLike, onComment }: PostCardProps) => {
  const rotation = Math.random() * 4 - 2;
  const isOddRow = Math.floor(index / 3) % 2 === 1;

  return (
    <div
      className={`${post.color} p-6 rounded-lg shadow-lg transform transition-all duration-200 hover:shadow-xl cursor-pointer border border-gunmetal/20 ${
        isOddRow && index % 3 === 0 ? 'ml-16' : ''
      } ${isOddRow && index % 3 === 2 ? 'mr-16' : ''}`}
      style={{
        minHeight: '220px',
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center center'
      }}
    >
      <div className="h-full flex flex-col justify-between">
        <div>
          <p className="text-gunmetal leading-relaxed mb-4 font-medium text-sm">
            "{post.content}"
          </p>
        </div>
        <div className="mt-auto">
          <div className="flex justify-between items-end mb-2">
            <div>
              <p className="font-semibold text-charcoal text-sm">{post.author}</p>
              <p className="text-xs text-gunmetal/70">Age {post.age}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => onLike(post.id)}
                className="flex items-center space-x-1 text-wine/80 hover:text-wine transition-colors"
              >
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">{post.likes}</span>
              </button>
              <button 
                onClick={() => onComment(post)}
                className="flex items-center space-x-1 text-sage/80 hover:text-sage transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">{post.comments.length}</span>
              </button>
            </div>
          </div>
          {post.comments.length > 0 && (
            <div className="border-t border-gunmetal/20 pt-2 mt-2">
              <div className="text-xs text-gunmetal/60">
                Latest: "{post.comments[post.comments.length - 1].content.slice(0, 30)}..."
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
