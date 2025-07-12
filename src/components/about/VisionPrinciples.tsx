import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Heart, Shield, Zap, Users, Globe } from 'lucide-react';

const VisionPrinciples: React.FC = () => {
  const principles = [
    { icon: Eye, title: "Open to All, Equal for All", description: "Building trust through transparency and open-source collaboration" },
    { icon: Shield, title: "Fortified with Quantum-Grade Security", description: "Enterprise-grade security with decentralized resilience" },
    { icon: Users, title: "Community-Driven", description: "Governed by the community, for the community" },
    { icon: Globe, title: "Globally Accessible", description: "Breaking down barriers to technology access worldwide" }
  ];

  return (
    <section id="vision-principles" className="py-20 px-4 bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Heart className="h-4 w-4" />
            <span>Our Vision</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            What we Stand For
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our core principles guide everything we build and every decision we make
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-card to-card/80 border border-border/50 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionPrinciples;