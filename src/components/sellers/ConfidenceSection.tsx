import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheckIcon, BarChart3Icon, DollarSignIcon, HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConfidenceSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Built for Confidence and Success</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <ShieldCheckIcon className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Verified Buyers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Buyers are screened to ensure reliable transactions, with reputation scores available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BarChart3Icon className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Real-Time Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Track resource performance and buyer activity via a dashboard with updates.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <DollarSignIcon className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Guaranteed Payouts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Secure, transparent payouts with clear policies for dispute resolution.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <HeadphonesIcon className="h-8 w-8 text-primary mb-2" />
              <CardTitle>24/7 Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Available via email, chat, or AI agent for quick resolution of issues.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Link to="/help">
            <Button size="lg">Check-out Support</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConfidenceSection;