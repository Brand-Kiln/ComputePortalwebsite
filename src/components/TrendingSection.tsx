import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TrendingSection: React.FC = () => {
  const trendingItems = [
    {
      id: 1,
      title: "ComputePortal LLM (Alpha)",
      provider: "Compute Portal",
      price: "$0.00/month",
      rating: 4.9,
      category: "Decentralized AI",
      description:
        "Free for Alpha Testers. Your private AI assistant — powered by decentralized edge compute.",
      image: "/Images/ss1.png",
      inStock: true,
      tags: ["LLM", "Edge AI"],
      type: "software",
    },
    {
      id: 2,
      title: "Smart Life Healthcare AI",
      provider: "MedTech Solutions",
      price: "$299/month",
      rating: 4.7,
      category: "Software",
      description:
        "Point of Medical care services at home with AI-powered diagostics",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752059753013_e15315a0.jpg",
      inStock: true,
      tags: ["Healthcare", "AI", "Diagnostics"],
      type: "software",
    },
    {
      id: 3,
      title: "SuperCloud GPU Cluster",
      provider: "Akash Network",
      price: "$2.50/month",
      rating: 4.8,
      category: "GPU on Web3",
      description:
        "World’s leading decentralized supercloud. Affordable, high-performance GPU compute.",
      image: "/Images/ss2.png",
      inStock: true,
      tags: ["Decentralized Compute", "AI Workloads", "GPU"],
      type: "software",
    },
    {
      id: 4,
      title: "Hyper AI Box",
      provider: "HyperCycle AI",
      price: "$1,350/month",
      rating: 4.9,
      category: "AI Hardware",
      description:
        "Advanced AI processing unit for edge computing and machine learning",
      image: "/Images/ss.png",
      inStock: true,
      tags: ["AI", "Edge", "Processing"],
      type: "hardware",
    },
    {
      id: 5,
      title: "Cardano Home Portal",
      provider: "Cardano",
      price: "$1,599",
      originalPrice: "$1,950/month",
      rating: 4.8,
      category: "Graphics Card",
      description:
        "High-performance GPU for AI training and gaming applications",
      image: "/Images/ss3.png",
      discount: "11%",
      inStock: true,
      tags: ["GPU", "AI", "Gaming"],
      type: "hardware",
    },
    {
      id: 6,
      title: "ComputePortal VPS",
      provider: "Compute Portal",
      price: "Coming Soon",
      rating: 4.7,
      category: "AI Finance",
      description:
        "A decentralized, edge-powered Virtual Private Server for developers, builders, and businesses. Private environments, and full root access.",
      image: "/Images/CP VPS.jpg",
      inStock: true,
      tags: ["Decentralized Hosting", "VPS", "Edge Compute"],
      type: "hardware",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">Trending Now</h3>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {trendingItems.map((item) => (
            <Card
              key={item.id}
              className="min-w-[300px] relative hover:shadow-lg transition-shadow"
            >
              <div className="absolute top-0 left-0 z-10 rotate-90">
                <img src="/Images/cs.png" className="w-20" />
              </div>

              <CardContent className="p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <div className="flex items-center justify-between mb-2">
                  <span className="text-red-500 font-bold text-sm">
                    {item.discount || ""}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-sm">★</span>
                    <span className="text-sm ml-1">{item.rating}</span>
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {item.provider}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold">{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        {item.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-green-600 text-sm font-medium">
                    {item.inStock ? "In Stock" : "Out of Stock"}
                  </span>
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
