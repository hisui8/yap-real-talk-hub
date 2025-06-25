
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Heart, MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
    if (userInitials.trim().length >= 2) {
      localStorage.setItem('wall-policy-agreed', 'true');
      setShowPolicyDialog(false);
    }
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
        timestamp: new Date().toLocaleTimeString()
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
      
      {/* Policy Dialog */}
      <Dialog open={showPolicyDialog} onOpenChange={() => {}}>
        <DialogContent className="bg-ivory border-2 border-charcoal/20 max-w-lg" hideCloseButton>
          <DialogHeader>
            <DialogTitle className="text-2xl text-charcoal font-display text-center mb-4">
              Community Guidelines
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-pearl/60 p-4 rounded-lg border border-gunmetal/10">
              <h3 className="font-semibold text-charcoal mb-2">No Tolerance for Disrespect</h3>
              <p className="text-gunmetal text-sm leading-relaxed">
                This is a space for meaningful dialogue. We maintain a zero-tolerance policy for harassment, 
                hate speech, or disrespectful behavior of any kind.
              </p>
            </div>
            
            <div className="bg-sage/20 p-4 rounded-lg border border-gunmetal/10">
              <h3 className="font-semibold text-charcoal mb-2">Diverse Opinions Welcome</h3>
              <p className="text-gunmetal text-sm leading-relaxed">
                Different perspectives are essential for meaningful dialogue. We encourage thoughtful 
                disagreement and ask that you approach conversations with curiosity and respect.
              </p>
            </div>
            
            <div className="bg-dusty/30 p-4 rounded-lg border border-gunmetal/10">
              <h3 className="font-semibold text-charcoal mb-2">Keep an Open Mind</h3>
              <p className="text-gunmetal text-sm leading-relaxed">
                Challenge your own assumptions. Listen to understand, not just to respond. 
                Growth happens when we engage with ideas that stretch our thinking.
              </p>
            </div>
            
            <div className="pt-4 border-t border-gunmetal/20">
              <p className="text-sm text-gunmetal/80 mb-3 text-center">
                By entering your initials below, you agree to maintain a respectful and responsible 
                presence in our community.
              </p>
              <Input
                placeholder="Enter your initials (e.g., J.D.)"
                value={userInitials}
                onChange={(e) => setUserInitials(e.target.value)}
                className="border-dusty/30 focus:border-sage text-center"
                maxLength={10}
              />
              <Button 
                onClick={handlePolicyAgreement}
                disabled={userInitials.trim().length < 2}
                className="w-full mt-3 bg-sage hover:bg-sage/90 text-white disabled:opacity-50"
              >
                I Understand & Agree
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <section className="py-16 px-4 pb-32">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight font-display">
              The Wall 🧱
            </h1>
            <p className="text-xl text-gunmetal/90 max-w-2xl mx-auto font-light mb-8">
              Share your thoughts on monthly prompts in our collaborative space
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
              {posts.map((post, index) => {
                const rotation = Math.random() * 4 - 2;
                const isOddRow = Math.floor(index / 3) % 2 === 1;
                
                return (
                  <div
                    key={post.id}
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
                              onClick={() => handleLike(post.id)}
                              className="flex items-center space-x-1 text-wine/80 hover:text-wine transition-colors"
                            >
                              <Heart className="w-4 h-4" />
                              <span className="text-sm font-medium">{post.likes}</span>
                            </button>
                            <button 
                              onClick={() => handleComment(post)}
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
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Add Button */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              className="w-16 h-16 rounded-full bg-sage hover:bg-sage/90 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
              size="icon"
            >
              <Plus className="w-8 h-8" />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-ivory border-2 border-sage/20 max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl text-charcoal font-display">Add Your Voice</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <Input
                placeholder="Your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="border-dusty/30 focus:border-sage"
                required
              />
              <Textarea
                placeholder="Share your perspective on this month's prompt..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="min-h-[120px] border-dusty/30 focus:border-sage resize-none"
                required
              />
              <div className="flex justify-end space-x-2 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsDialogOpen(false)}
                  className="border-dusty/30 text-gunmetal hover:bg-dusty/10"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-sage hover:bg-sage/90 text-white"
                >
                  Add to Wall
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Comment Dialog */}
      <Dialog open={isCommentDialogOpen} onOpenChange={setIsCommentDialogOpen}>
        <DialogContent className="bg-ivory border-2 border-sage/20 max-w-lg max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-2xl text-charcoal font-display">
              Comments on {selectedPost?.author}'s post
            </DialogTitle>
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto space-y-4">
            {/* Original Post */}
            {selectedPost && (
              <div className="bg-dusty/20 p-4 rounded-lg">
                <p className="text-gunmetal font-medium mb-2">"{selectedPost.content}"</p>
                <p className="text-sm text-gunmetal/70">- {selectedPost.author}, Age {selectedPost.age}</p>
              </div>
            )}
            
            {/* Comments */}
            <div className="space-y-3">
              {selectedPost?.comments.map((comment) => (
                <div key={comment.id} className="bg-pearl/40 p-3 rounded-lg border-l-4 border-sage/50">
                  <p className="text-gunmetal text-sm mb-1">"{comment.content}"</p>
                  <p className="text-xs text-gunmetal/60">- {comment.author} at {comment.timestamp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Add Comment Form */}
          <form onSubmit={handleCommentSubmit} className="space-y-3 pt-4 border-t border-dusty/30">
            <Input
              placeholder="Your name"
              value={commentAuthor}
              onChange={(e) => setCommentAuthor(e.target.value)}
              className="border-dusty/30 focus:border-sage"
              required
            />
            <Textarea
              placeholder="Add your comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[80px] border-dusty/30 focus:border-sage resize-none"
              required
            />
            <div className="flex justify-end space-x-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsCommentDialogOpen(false)}
                className="border-dusty/30 text-gunmetal hover:bg-dusty/10"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-sage hover:bg-sage/90 text-white"
              >
                Add Comment
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default TheWall;
