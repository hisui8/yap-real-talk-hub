
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
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
      prompt: "What does climate justice mean to you?"
    },
    {
      id: 2,
      author: "Alex K.",
      age: 19,
      content: "Mental health conversations need to happen everywhere - at dinner tables, in classrooms, with friends. Breaking stigma starts with honest dialogue.",
      likes: 18,
      prompt: "How can we normalize mental health discussions?"
    }
  ]);

  const [newPost, setNewPost] = useState('');
  const [userName, setUserName] = useState('');
  const currentPrompt = "What role should young people play in shaping political discourse?";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim() && userName.trim()) {
      const post = {
        id: posts.length + 1,
        author: userName,
        age: 18,
        content: newPost,
        likes: 0,
        prompt: currentPrompt
      };
      setPosts([post, ...posts]);
      setNewPost('');
      setUserName('');
    }
  };

  return (
    <div className="min-h-screen bg-ivory font-sans">
      <Header />
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight font-display">
              The Wall 🧱
            </h1>
            <p className="text-xl text-gunmetal/90 max-w-2xl mx-auto font-light">
              Share your thoughts on monthly prompts in our collaborative space
            </p>
          </div>

          {/* Current Prompt */}
          <Card className="mb-8 bg-gradient-to-br from-sage/20 to-forest/10 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-charcoal font-display">This Month's Prompt</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gunmetal font-medium">{currentPrompt}</p>
            </CardContent>
          </Card>

          {/* Post Form */}
          <Card className="mb-8 bg-pearl border-0 shadow-lg">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="border-dusty/30"
                />
                <Textarea
                  placeholder="Share your perspective..."
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="min-h-[120px] border-dusty/30"
                />
                <Button type="submit" className="bg-sage hover:bg-sage/90 text-white">
                  Add to Wall
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Posts */}
          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id} className="bg-ivory border border-dusty/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gunmetal">{post.author}</h3>
                      <p className="text-sm text-dusty">Age {post.age}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sage">❤️</span>
                      <span className="text-sm text-gunmetal">{post.likes}</span>
                    </div>
                  </div>
                  <p className="text-gunmetal mb-3 leading-relaxed">{post.content}</p>
                  <p className="text-xs text-dusty italic">Responding to: "{post.prompt}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheWall;
