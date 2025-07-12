import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Code, Plug, CreditCard, Sparkles, Globe } from 'lucide-react';

const UnifiedPlatform: React.FC = () => {
  const features = [
    {
      icon: Server,
      title: "Hardware Marketplace",
      description: "Contribute and access edge devices, solar-powered nodes, storage hubs and many other options",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20"
    },
    {
      icon: Code,
      title: "Software Gallery",
      description: "Use and deploy open-source, as well as proprietary Web3-enabled tools without friction",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20"
    },
    {
      icon: Plug,
      title: "Plug-and-Play Onboarding",
      description: "For both new users considering decentralized implementations as well as advanced developers",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20"
    },
    {
      icon: CreditCard,
      title: "Fiat & Crypto Support",
      description: "Bridging the Web2 and Web3 worlds with an inclusive vision",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20"
    }
  ];

  return (
    <section id="unified-platform" className="py-20 px-4 bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Globe className="h-4 w-4" />
              <span>Unified Platform</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              A Unified Platform for Decentralized Technology
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              ComputePortal brings together decentralized hardware and software into one seamless marketplace.
            </p>
            
            <div className="inline-flex items-center space-x-4 bg-blue-100 dark:bg-blue-900/30 px-6 py-3 rounded-full border border-blue-200 dark:border-blue-800">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-lg font-semibold text-blue-700 dark:text-blue-300">One Platform, Infinite Possibilities</span>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className={`hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 ${feature.bgColor} border border-border/50 backdrop-blur-sm group`}>
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-12`}>
                      <IconComponent className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedPlatform;