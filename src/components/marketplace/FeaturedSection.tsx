import React from 'react';
import ListingCard from './ListingCard';

interface FeaturedItem {
  id: number;
  title: string;
  provider: string;
  price: string;
  originalPrice?: string;
  rating: number;
  category: string;
  description: string;
  image: string;
  discount?: string;
  inStock: boolean;
  tags: string[];
  type: 'software' | 'hardware';
}

const FeaturedSection: React.FC = () => {
  const featuredItems: FeaturedItem[] = [
    // Software row (first 3)
    {
      id: 1,
      title: "Smart Life",
      provider: "MedTech Solutions",
      price: "$299/month",
      rating: 4.9,
      category: "Healthcare Software",
      description: "Point of medical care services at home with AI-powered diagnostics",
      image: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752059753013_e15315a0.jpg",
      inStock: true,
      tags: ["Healthcare", "AI", "Home Care"],
      type: "software"
    },
    {
      id: 2,
      title: "AutoGPT Business Suite",
      provider: "AI Dynamics",
      price: "$179/month",
      originalPrice: "$299",
      rating: 4.7,
      category: "Business AI",
      description: "Complete autonomous AI agent software for business automation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
      discount: "40%",
      inStock: true,
      tags: ["Automation", "Business", "AI"],
      type: "software"
    },
    {
      id: 3,
      title: "Vision AI Platform",
      provider: "VisionTech",
      price: "$399/month",
      rating: 4.8,
      category: "Computer Vision",
      description: "Advanced computer vision platform for image recognition and analysis",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400",
      inStock: true,
      tags: ["Vision", "AI", "Recognition"],
      type: "software"
    },
    // Hardware row (next 3)
    {
      id: 4,
      title: "H2 HyperAI Box",
      provider: "HyperCycle AI",
      price: "$1,450",
      rating: 4.9,
      category: "AI Hardware",
      description: "Advanced AI processing unit for edge computing and machine learning",
      image: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752059974410_f4745421.png",
      inStock: true,
      tags: ["AI", "Edge", "Processing"],
      type: "hardware"
    },
    {
      id: 5,
      title: "NVIDIA RTX 4090 GPU",
      provider: "TechProvider",
      price: "$1,599",
      originalPrice: "$1,799",
      rating: 4.8,
      category: "Graphics Card",
      description: "High-performance GPU for AI training and gaming applications",
      image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400",
      discount: "11%",
      inStock: true,
      tags: ["GPU", "AI", "Gaming"],
      type: "hardware"
    },
    {
      id: 6,
      title: "Edge Computing Node",
      provider: "EdgeTech",
      price: "$899",
      rating: 4.7,
      category: "Edge Device",
      description: "Compact edge computing solution for IoT and distributed processing",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
      inStock: true,
      tags: ["Edge", "IoT", "Distributed"],
      type: "hardware"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;