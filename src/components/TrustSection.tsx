import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheckIcon, LockIcon, TrendingUpIcon } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your transactions and all interactions on ComputePortal is secured with mutual TLS (mTLS) — the highest standard of transport security globally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="h-16 w-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
              <p className="text-muted-foreground">
                Our quantum-grade security mesh and state-of-the-art tools ensure that your trust in us is never compromised.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="h-16 w-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <LockIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Blockchain Protected</h3>
              <p className="text-muted-foreground">
                A growing record of secure, seamless transactions — proven at scale.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="h-16 w-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <TrendingUpIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
              <p className="text-muted-foreground">
                A growing record of secure, seamless transactions — proven at scale.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;