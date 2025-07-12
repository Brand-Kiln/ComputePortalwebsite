import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Building, Wrench, AlertTriangle, Search, Users } from 'lucide-react';

const WhyMatters: React.FC = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Rising Compute Demand, Limited Access",
      description: "AI, automation, and digital services need compute—but supply can't keep up.",
      bgColor: "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20",
      iconColor: "text-red-600 dark:text-red-400",
      accentColor: "bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30"
    },
    {
      icon: AlertTriangle,
      title: "Central Point of Failure",
      description: "Centralized providers dominate infrastructure—costly, slow, and closed.",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20",
      iconColor: "text-orange-600 dark:text-orange-400",
      accentColor: "bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30"
    },
    {
      icon: Search,
      title: "Inadequate Options",
      description: "Tools are scattered, hard to use, and harder to find.",
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/20 dark:to-yellow-900/20",
      iconColor: "text-yellow-600 dark:text-yellow-400",
      accentColor: "bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Users className="h-4 w-4" />
            <span>Why It Matters</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            Why ComputePortal Matters
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            The current computing landscape faces critical challenges that demand innovative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className={`text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 ${reason.bgColor} border border-border/50 backdrop-blur-sm group`}>
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-6">
                    <div className={`w-20 h-20 ${reason.accentColor} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-12`}>
                      <IconComponent className={`h-10 w-10 ${reason.iconColor} group-hover:scale-110 transition-transform`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyMatters;