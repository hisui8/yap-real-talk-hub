import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PolicyDialog from '../components/PolicyDialog';
import PostCard from '../components/PostCard';
import AddPostDialog from '../components/AddPostDialog';
import CommentDialog from '../components/CommentDialog';

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  type: 'perspective' | 'question' | 'fact' | 'support' | 'challenge';
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

const TheWall = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "Maya S.",
      age: 17,
      content: "Climate change isn't just an environmental issue - it's about justice. When we talk about rising sea levels, we're talking about displaced communities.",
      likes: 24,
      color: "bg-stone-200/60",
      position: { x: 0, y: 0 },
      comments: []
    },
    {
      id: 2,
      author: "Alex K.",
      age: 19,
      content: "Mental health conversations need to happen everywhere - at dinner tables, in classrooms, with friends. Breaking stigma starts with honest dialogue.",
      likes: 18,
      color: "bg-slate-200/50",
      position: { x: 1, y: 0 },
      comments: []
    },
    {
      id: 3,
      author: "Jordan T.",
      age: 20,
      content: "Young people have the most to lose and the most to gain from political decisions. We should be leading these conversations, not just participating in them.",
      likes: 32,
      color: "bg-amber-100/70",
      position: { x: 2, y: 0 },
      comments: []
    },
    {
      id: 4,
      author: "Sam R.",
      age: 18,
      content: "Politics isn't about left vs right anymore. It's about listening vs not listening. We need to create spaces where people actually hear each other.",
      likes: 15,
      color: "bg-emerald-100/60",
      position: { x: 0, y: 1 },
      comments: []
    }
  ]);

  const [newPost, setNewPost] = useState('');
  const [userName, setUserName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentType, setCommentType] = useState<'perspective' | 'question' | 'fact' | 'support' | 'challenge'>('perspective');
  const [isCommentDialogOpen, setIsCommentDialogOpen] = useState(false);
  const [showPolicyDialog, setShowPolicyDialog] = useState(true);
  const [userInitials, setUserInitials] = useState('');
  const currentPrompt = "What role should young people play in shaping political discourse?";

  const stickyColors = [
    "bg-stone-200/60",
    "bg-slate-200/50", 
    "bg-amber-100/70",
    "bg-emerald-100/60",
    "bg-blue-100/50",
    "bg-rose-100/60",
    "bg-purple-100/50",
    "bg-orange-100/60"
  ];

  useEffect(() => {
    const hasAgreed = localStorage.getItem('wall-policy-agreed');
    if (hasAgreed) {
      setShowPolicyDialog(false);
    }
  }, []);

  const handlePolicyAgreement = () => {
    localStorage.setItem('wall-policy-agreed', 'true');
    setShowPolicyDialog(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim() && userName.trim()) {
      const randomColor = stickyColors[Math.floor(Math.random() * stickyColors.length)];
      const post: Post = {
        id: posts.length + 1,
        author: userName,
        age: Math.floor(Math.random() * 10) + 16,
        content: newPost,
        likes: 0,
        color: randomColor,
        position: { x: posts.length % 3, y: Math.floor(posts.length / 3) },
        comments: []
      };
      setPosts([...posts, post]);
      setNewPost('');
      setUserName('');
      setIsDialogOpen(false);
    }
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const handleComment = (post: Post) => {
    setSelectedPost(post);
    setIsCommentDialogOpen(true);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && commentAuthor.trim() && selectedPost) {
      const comment: Comment = {
        id: Date.now(),
        author: commentAuthor,
        content: newComment,
        timestamp: new Date().toLocaleTimeString(),
        type: commentType
      };
      
      setPosts(posts.map(post => 
        post.id === selectedPost.id 
          ? { ...post, comments: [...post.comments, comment] }
          : post
      ));
      
      setNewComment('');
      setCommentAuthor('');
      setIsCommentDialogOpen(false);
      setSelectedPost(null);
    }
  };

  return (
    <div className="min-h-screen bg-ivory font-sans">
      <Header />
      
      <PolicyDialog
        isOpen={showPolicyDialog}
        userInitials={userInitials}
        setUserInitials={setUserInitials}
        onAgreement={handlePolicyAgreement}
        isWallSpecific={true}
      />

      <section className="py-16 px-4 pb-32">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight font-display">
              The Wall 🧱
            </h1>
            <p className="text-xl text-gunmetal/90 max-w-2xl mx-auto font-light mb-8">
              Your voice matters here. Share honest thoughts, challenge perspectives, and build understanding one post at a time.
            </p>
          </div>

          {/* Current Prompt */}
          <div className="mb-12">
            <Card className="bg-gradient-to-br from-sage/20 to-forest/10 border-2 border-sage/30 shadow-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-3xl text-charcoal font-display">This Month's Prompt</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl text-gunmetal font-medium leading-relaxed">{currentPrompt}</p>
              </CardContent>
            </Card>
          </div>

          {/* Brick Wall Grid */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4 auto-rows-min">
              {posts.map((post, index) => (
                <PostCard
                  key={post.id}
                  post={post}
                  index={index}
                  onLike={handleLike}
                  onComment={handleComment}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <AddPostDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        newPost={newPost}
        setNewPost={setNewPost}
        userName={userName}
        setUserName={setUserName}
        onSubmit={handleSubmit}
      />

      <CommentDialog
        isOpen={isCommentDialogOpen}
        setIsOpen={setIsCommentDialogOpen}
        selectedPost={selectedPost}
        newComment={newComment}
        setNewComment={setNewComment}
        commentAuthor={commentAuthor}
        setCommentAuthor={setCommentAuthor}
        commentType={commentType}
        setCommentType={setCommentType}
        onSubmit={handleCommentSubmit}
      />

      <Footer />
    </div>
  );
};

export default TheWall;
