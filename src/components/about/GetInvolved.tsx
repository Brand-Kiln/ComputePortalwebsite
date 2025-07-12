import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Monitor, DollarSign } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const GetInvolved: React.FC = () => {
  const navigate = useNavigate();
  
  const pathways = [
    {
      icon: Users,
      title: "Contributors",
      description: "Hardware partners, software developers, tech enthusiasts",
      cta: "Let's Connect",
      color: "bg-blue-500/10 border-blue-200"
    },
    {
      icon: Monitor,
      title: "Users",
      description: "Individuals and orgs looking to use decentralized tech",
      cta: "Request a Demo",
      color: "bg-green-500/10 border-green-200"
    },
    {
      icon: DollarSign,
      title: "Investors",
      description: "Those aligned with our mission and wants us to accelerate",
      cta: "Talk to the Team",
      color: "bg-purple-500/10 border-purple-200"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let us Grow Together
          </h2>
          <p className="text-lg text-muted-foreground">
            Join us in building the future of decentralized technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pathways.map((pathway, index) => {
            const IconComponent = pathway.icon;
            return (
              <Card key={index} className={`${pathway.color} hover:shadow-lg transition-all hover:-translate-y-1`}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{pathway.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">{pathway.description}</p>
                  <Button 
                    className="w-full" 
                    variant="default"
                    onClick={() => navigate('/help')}
                  >
                    {pathway.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Shape the Future?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Whether you're contributing resources, using our platform, or investing in our vision, 
              there's a place for you in the ComputePortal ecosystem.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate('/help')}
            >
              Join our Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;