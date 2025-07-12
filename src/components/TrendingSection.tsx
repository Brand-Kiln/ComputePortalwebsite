import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TrendingSection: React.FC = () => {
  const trendingItems = [
    {
      id: 1,
      title: "NVIDIA RTX 4090 AI Training Kit",
      description: "Professional-grade GPU optimized for AI training and inference.",
      price: "$749",
      originalPrice: "$2,449",
      discount: "-70%",
      image: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752052934165_853dd8be.png",
      rating: 4.9,
      provider: "TechFlow Labs",
      tags: ["AI Training", "Deep Learning", "CUDA"]
    },
    {
      id: 2,
      title: "Cloud GPU Cluster Pro",
      description: "Scalable GPU cluster for large-scale AI model training.",
      price: "$1,299",
      originalPrice: "$3,999",
      discount: "-68%",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      rating: 4.8,
      provider: "CloudTech Solutions",
      tags: ["Cluster", "Scalable", "Enterprise"]
    },
    {
      id: 3,
      title: "Edge Computing Node",
      description: "Compact edge device for distributed AI inference.",
      price: "$399",
      originalPrice: "$899",
      discount: "-56%",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      rating: 4.7,
      provider: "EdgeTech Inc",
      tags: ["Edge AI", "IoT", "Compact"]
    },
    {
      id: 4,
      title: "Blockchain Mining Rig",
      description: "High-performance mining setup for blockchain operations.",
      price: "$2,199",
      originalPrice: "$4,999",
      discount: "-56%",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=300&h=200&fit=crop",
      rating: 4.6,
      provider: "CryptoHardware Co",
      tags: ["Mining", "Blockchain", "ASIC"]
    },
    {
      id: 5,
      title: "Quantum Computing Access",
      description: "Cloud access to quantum computing resources.",
      price: "$999",
      originalPrice: "$2,999",
      discount: "-67%",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop",
      rating: 4.9,
      provider: "QuantumCloud Labs",
      tags: ["Quantum", "Research", "Advanced"]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">Trending Now</h3>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {trendingItems.map((item) => (
            <Card key={item.id} className="min-w-[300px] relative hover:shadow-lg transition-shadow">
              <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded z-10">
                Coming Soon
              </div>
              <CardContent className="p-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-32 object-cover rounded mb-3" 
                />
                <div className="flex items-center justify-between mb-2">
                  <span className="text-red-500 font-bold text-sm">{item.discount}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-sm">★</span>
                    <span className="text-sm ml-1">{item.rating}</span>
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{item.provider}</p>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold">{item.price}</span>
                    <span className="text-sm text-muted-foreground line-through ml-2">{item.originalPrice}</span>
                  </div>
                  <span className="text-green-600 text-sm font-medium">In Stock</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/marketplace">
            <Button size="lg">Explore Marketplace</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;