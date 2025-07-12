import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCartIcon, CreditCardIcon, BrainIcon, UsersIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhySection: React.FC = () => {
  const features = [
    {
      icon: <ShoppingCartIcon className="h-8 w-8 text-blue-600" />,
      title: "1-Stop Shop",
      description: "We have it all under one roof- decentralized hardware and compute… now go build your next gen tech dream"
    },
    {
      icon: <CreditCardIcon className="h-8 w-8 text-green-600" />,
      title: "Fiat & Crypto",
      description: "Whatever is your preferred transaction mode, we respect and reciprocate!"
    },
    {
      icon: <BrainIcon className="h-8 w-8 text-purple-600" />,
      title: "AI-First Design",
      description: "Built specifically for AI hardware and software. We understand the unique needs of the AI community and deliver accordingly."
    },
    {
      icon: <UsersIcon className="h-8 w-8 text-orange-600" />,
      title: "Humans at the Center",
      description: "We believe the virtue of empowerment at scale - and this ethos of Web3.0 guides our efforts"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the future of decentralized commerce with our cutting-edge marketplace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/about">
            <Button size="lg" variant="outline">
              Us and our Ethos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhySection;