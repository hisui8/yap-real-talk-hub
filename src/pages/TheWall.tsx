
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Heart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TheWall = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Maya S.",
      age: 17,
      content: "Climate change isn't just an environmental issue - it's about justice. When we talk about rising sea levels, we're talking about displaced communities.",
      likes: 24,
      color: "bg-yellow-200",
      position: { x: 0, y: 0 }
    },
    {
      id: 2,
      author: "Alex K.",
      age: 19,
      content: "Mental health conversations need to happen everywhere - at dinner tables, in classrooms, with friends. Breaking stigma starts with honest dialogue.",
      likes: 18,
      color: "bg-pink-200",
      position: { x: 1, y: 0 }
    },
    {
      id: 3,
      author: "Jordan T.",
      age: 20,
      content: "Young people have the most to lose and the most to gain from political decisions. We should be leading these conversations, not just participating in them.",
      likes: 32,
      color: "bg-blue-200",
      position: { x: 2, y: 0 }
    },
    {
      id: 4,
      author: "Sam R.",
      age: 18,
      content: "Politics isn't about left vs right anymore. It's about listening vs not listening. We need to create spaces where people actually hear each other.",
      likes: 15,
      color: "bg-green-200",
      position: { x: 0, y: 1 }
    }
  ]);

  const [newPost, setNewPost] = useState('');
  const [userName, setUserName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const currentPrompt = "What role should young people play in shaping political discourse?";

  const stickyColors = [
    "bg-yellow-200",
    "bg-pink-200", 
    "bg-blue-200",
    "bg-green-200",
    "bg-purple-200",
    "bg-orange-200"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim() && userName.trim()) {
      const randomColor = stickyColors[Math.floor(Math.random() * stickyColors.length)];
      const post = {
        id: posts.length + 1,
        author: userName,
        age: Math.floor(Math.random() * 10) + 16, // Random age between 16-25
        content: newPost,
        likes: 0,
        color: randomColor,
        position: { x: posts.length % 3, y: Math.floor(posts.length / 3) }
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

  return (
    <div className="min-h-screen bg-ivory font-sans">
      <Header />
      
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

          {/* Current Prompt - Padlet Style */}
          <div className="mb-12">
            <Card className="bg-gradient-to-br from-sage/30 to-forest/20 border-2 border-sage/40 shadow-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-3xl text-charcoal font-display">This Month's Prompt</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl text-gunmetal font-medium leading-relaxed">{currentPrompt}</p>
              </CardContent>
            </Card>
          </div>

          {/* Sticky Notes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className={`${post.color} p-6 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-200 hover:shadow-xl cursor-pointer border-l-4 border-l-yellow-400`}
                style={{
                  minHeight: '200px',
                  transform: `rotate(${Math.random() * 6 - 3}deg)`,
                }}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <p className="text-gunmetal leading-relaxed mb-4 font-medium">
                      "{post.content}"
                    </p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="font-semibold text-charcoal text-sm">{post.author}</p>
                        <p className="text-xs text-gunmetal/70">Age {post.age}</p>
                      </div>
                      <button 
                        onClick={() => handleLike(post.id)}
                        className="flex items-center space-x-1 text-wine hover:text-wine/80 transition-colors"
                      >
                        <Heart className="w-4 h-4" />
                        <span className="text-sm font-medium">{post.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

      <Footer />
    </div>
  );
};

export default TheWall;
