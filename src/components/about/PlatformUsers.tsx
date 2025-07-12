import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Server, Building2, Globe, Users, Zap, Target, Rocket } from 'lucide-react';

const PlatformUsers: React.FC = () => {
  const personas = [
    {
      icon: Code,
      title: "Developers",
      description: "Access compute without lock-ins",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20",
      accentIcon: Zap
    },
    {
      icon: Server,
      title: "Hardware Owners",
      description: "Monetize unused capacity",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20",
      accentIcon: Target
    },
    {
      icon: Building2,
      title: "Businesses",
      description: "Create scalable systems with control",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20",
      accentIcon: Rocket
    },
    {
      icon: Globe,
      title: "Enterprises and Nations",
      description: "Deploy sovereign tech infrastructures",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20",
      accentIcon: Users
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Users className="h-4 w-4" />
            <span>Platform Users</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            Who Uses our Platform
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering diverse communities with decentralized technology solutions
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {personas.map((persona, index) => {
            const IconComponent = persona.icon;
            const AccentIcon = persona.accentIcon;
            return (
              <Card key={index} className={`text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 ${persona.bgColor} border border-border/50 relative overflow-hidden group`}>
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <AccentIcon className="h-8 w-8 text-muted-foreground group-hover:animate-pulse" />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${persona.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-12`}>
                      <IconComponent className="h-10 w-10 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{persona.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed font-medium group-hover:text-foreground transition-colors">{persona.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-6 py-3 rounded-full border border-blue-200 dark:border-blue-800">
            <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-700 dark:text-blue-300 font-semibold">Built for Everyone, Owned by the Community</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformUsers;