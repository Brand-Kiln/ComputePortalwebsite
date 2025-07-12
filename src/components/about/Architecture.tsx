import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Code, ShoppingCart, Cpu, Database, Sun, Network, Bot, Link, Layers, Zap } from 'lucide-react';

const Architecture: React.FC = () => {
  const layers = [
    {
      title: "Decentralized Hardware Layer",
      icon: Server,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      items: [
        { icon: Cpu, text: "Edge compute nodes" },
        { icon: Database, text: "Distributed storage" },
        { icon: Sun, text: "Energy-efficient devices (e.g. solar)" }
      ]
    },
    {
      title: "Decentralized Software Layer",
      icon: Code,
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      items: [
        { icon: Network, text: "Web3-native orchestration" },
        { icon: Bot, text: "AI/ML toolkits" },
        { icon: Link, text: "Secure cross-chain protocols" }
      ]
    },
    {
      title: "Marketplace Layer",
      icon: ShoppingCart,
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      items: [
        { icon: Server, text: "Discover tools & devices" },
        { icon: Cpu, text: "Pay and deploy in one step" },
        { icon: Network, text: "Community-powered ratings & support" }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
              <Layers className="h-10 w-10 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A three-layer approach to decentralized technology infrastructure
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {layers.map((layer, index) => {
            const LayerIcon = layer.icon;
            return (
              <Card key={index} className={`${layer.bgColor} border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${layer.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <LayerIcon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{layer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {layer.items.map((item, itemIndex) => {
                      const ItemIcon = item.icon;
                      return (
                        <div key={itemIndex} className="flex items-center space-x-4 p-3 bg-white/50 rounded-lg">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                            <ItemIcon className="h-5 w-5 text-gray-600" />
                          </div>
                          <span className="text-gray-700 font-medium">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-8 py-4 rounded-full">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-primary font-bold text-lg">Built for Scale, Designed for Simplicity</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;