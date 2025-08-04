import React from "react";
import ListingCard from "./ListingCard";

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
  type: "software" | "hardware";
}

const FeaturedSection: React.FC = () => {
  const featuredItems: FeaturedItem[] = [
    // Software row (first 3)
    {
      id: 1,
      title: "ComputePortal LLM (Alpha)",
      provider: "Compute Portal  ",
      price: "$0.00/month",
      rating: 4.9,
      category: "Decentralized AI",
      description:
        "Free for Alpha Testers. Your private AI assistant — powered by decentralized edge compute.",
      image: "/Images/ss1.png",
      inStock: true,
      tags: ["LLM", "Edge AI "],
      type: "software",
    },
    {
      id: 2,
      title: "Smart Life Healthcare AI",
      provider: "MedTech Solutions",
      price: "$299/month",
      // originalPrice: "$299",
      rating: 4.7,
      category: "Software",
      description:
        "Point of Medical care services at home with AI-powered diagostics",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752059753013_e15315a0.jpg",
      // discount: "40%",
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
    // Hardware row (next 3)
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
        "Run your Stake Pool with confidence from your own location",
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
        "A decentralized, edge-powered Virtual Private Server for developers, builders, and businesses.",
      image: "/Images/CP VPS.jpg",
      inStock: true,
      tags: ["Decentralized Hosting", "VPS", "Edge Compute"],
      type: "hardware",
    },
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
