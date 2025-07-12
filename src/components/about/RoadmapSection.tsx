import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle, Clock, Rocket, Target, Zap } from 'lucide-react';

const RoadmapSection: React.FC = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation & Community",
      status: "current",
      icon: Target,
      items: ["Platform Launch", "Community Building", "Initial Partnerships"],
      color: "bg-blue-500"
    },
    {
      phase: "Phase 2",
      title: "Marketplace Launch",
      status: "upcoming",
      icon: Rocket,
      items: ["Full Marketplace", "Payment Integration", "Advanced Features"],
      color: "bg-purple-500"
    },
    {
      phase: "Phase 3",
      title: "Global Expansion",
      status: "future",
      icon: Zap,
      items: ["International Markets", "Enterprise Solutions", "AI Integration"],
      color: "bg-green-500"
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-4 bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Calendar className="h-4 w-4" />
            <span>Our Roadmap</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            Our Roadmap
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Building the future of decentralized computing step by step
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-card to-card/80 border border-border/50 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={phase.status === 'current' ? 'default' : 'secondary'}>
                      {phase.status === 'current' ? 'Current' : phase.status === 'upcoming' ? 'Upcoming' : 'Future'}
                    </Badge>
                    <div className={`w-12 h-12 ${phase.color} rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{phase.phase}</CardTitle>
                  <p className="text-lg font-semibold text-muted-foreground">{phase.title}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        {phase.status === 'current' ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <Clock className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl">
            <Rocket className="mr-2 h-5 w-5" />
            Join Our Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;