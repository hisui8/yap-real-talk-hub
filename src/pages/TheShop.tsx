
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TheShop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const products = [
    {
      id: 1,
      name: "Dialogue Champion Tee",
      price: 28,
      category: "apparel",
      description: "Soft cotton t-shirt with 'Conversations Change the World' design",
      image: "👕",
      colors: ["Sage Green", "Charcoal", "Pearl White"],
      impact: "Proceeds support youth dialogue programs"
    },
    {
      id: 2,
      name: "Bridge Builder Hoodie",
      price: 52,
      category: "apparel",
      description: "Cozy hoodie featuring bridge artwork symbolizing connection",
      image: "👘",
      colors: ["Gunmetal Gray", "Plum Purple"],
      impact: "Made from recycled materials"
    },
    {
      id: 3,
      name: "Conversation Starter Cards",
      price: 18,
      category: "accessories",
      description: "50 thought-provoking question cards for meaningful discussions",
      image: "🃏",
      colors: ["Multi-color"],
      impact: "Waterproof and travel-friendly design"
    },
    {
      id: 4,
      name: "Unity Pin Set",
      price: 12,
      category: "accessories",
      description: "Collection of enamel pins representing different perspectives",
      image: "📌",
      colors: ["Rainbow Set"],
      impact: "Each pin supports a different youth organization"
    },
    {
      id: 5,
      name: "Change Maker Journal",
      price: 24,
      category: "stationery",
      description: "Guided journal for reflection and action planning",
      image: "📓",
      colors: ["Forest Green", "Deep Plum"],
      impact: "Made from sustainable bamboo paper"
    },
    {
      id: 6,
      name: "Dialogue Over Division Sticker Pack",
      price: 8,
      category: "stationery",
      description: "Weather-resistant stickers with positive messaging",
      image: "🏷️",
      colors: ["Mixed Pack"],
      impact: "Plastic-free packaging"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', count: products.length },
    { id: 'apparel', name: 'Apparel', count: products.filter(p => p.category === 'apparel').length },
    { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length },
    { id: 'stationery', name: 'Stationery', count: products.filter(p => p.category === 'stationery').length }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-ivory font-sans">
      <Header />
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight font-display">
              The Shop 🛍️
            </h1>
            <p className="text-xl text-gunmetal/90 max-w-2xl mx-auto font-light">
              Trendy merchandise that sparks meaningful conversations and supports youth advocacy
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="mb-12 bg-gradient-to-br from-sage/20 to-forest/10 border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-charcoal mb-4 font-display">Shop with Purpose</h2>
              <p className="text-gunmetal/90 leading-relaxed max-w-3xl mx-auto">
                Every purchase supports youth dialogue programs, sustainable practices, and meaningful conversations. 
                Wear your values and spark discussions wherever you go.
              </p>
            </CardContent>
          </Card>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? 'bg-sage text-white'
                    : 'bg-pearl text-gunmetal hover:bg-dusty/20'
                } px-6 py-2 rounded-full`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="bg-pearl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  {/* Product Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-dusty/10 to-dusty/20 rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-6xl">{product.image}</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-gunmetal font-display">
                        {product.name}
                      </h3>
                      <Badge className="bg-copper text-white">
                        ${product.price}
                      </Badge>
                    </div>

                    <p className="text-gunmetal/80 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gunmetal">Available Colors:</p>
                      <div className="flex flex-wrap gap-2">
                        {product.colors.map((color, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-dusty text-dusty">
                            {color}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-sage/10 p-3 rounded-lg border border-sage/20">
                      <p className="text-sm text-sage font-medium mb-1">🌱 Impact:</p>
                      <p className="text-xs text-gunmetal/80">{product.impact}</p>
                    </div>

                    <Button className="w-full bg-charcoal hover:bg-charcoal/90 text-white">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="mt-16 bg-gradient-to-br from-plum/20 to-wine/10 border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-charcoal mb-4 font-display">Start a Conversation</h2>
              <p className="text-gunmetal/90 mb-6 max-w-2xl mx-auto">
                Our merchandise is designed to be conversation starters. Share your story, ask questions, 
                and build bridges through meaningful dialogue.
              </p>
              <Button className="bg-plum hover:bg-plum/90 text-white px-8 py-3">
                Browse All Items
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheShop;
