import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';

const ThreeSteps: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Three Easy Steps to Start Selling</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card 
            className={`cursor-pointer transition-all duration-300 ${activeStep === 1 ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'}`}
            onClick={() => setActiveStep(1)}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <CardTitle>List Your Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Register and list your compute (GPUs, CPUs) or hardware (edge servers) with detailed specs (teraflops, RAM) and pricing.
              </p>
            </CardContent>
          </Card>
          <Card 
            className={`cursor-pointer transition-all duration-300 ${activeStep === 2 ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'}`}
            onClick={() => setActiveStep(2)}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <CardTitle>Manage and Earn</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Approve buyer requests via a user-friendly dashboard and receive secure payouts in fiat or crypto (via MetaMask). Transparent earnings reports.
              </p>
            </CardContent>
          </Card>
          <Card 
            className={`cursor-pointer transition-all duration-300 ${activeStep === 3 ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'}`}
            onClick={() => setActiveStep(3)}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <CardTitle>Monitor Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Track resource usage and buyer feedback in real-time (uptime, performance metrics) with updates every 5 seconds on a provider dashboard.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Mock Dashboard Chart */}
        <div className="mt-12 bg-card rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Provider Dashboard Preview
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-muted rounded">
              <p className="text-2xl font-bold text-primary">$2,847</p>
              <p className="text-sm text-muted-foreground">Monthly Earnings</p>
            </div>
            <div className="p-4 bg-muted rounded">
              <p className="text-2xl font-bold text-primary">98.7%</p>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
            <div className="p-4 bg-muted rounded">
              <p className="text-2xl font-bold text-primary">4.9/5</p>
              <p className="text-sm text-muted-foreground">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeSteps;