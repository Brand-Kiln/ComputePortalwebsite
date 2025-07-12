import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GlobeIcon, WalletIcon, ScaleIcon, HeadphonesIcon } from 'lucide-react';

const MarketplaceBenefits: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Marketplace is Right for You</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <GlobeIcon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle>Global Demand</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Reach a worldwide audience of AI developers and businesses needing compute and hardware.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <WalletIcon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle>Flexible Payouts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Receive payments in credit cards, PayPal, or cryptocurrencies (Bitcoin, Ethereum) with transparent tracking.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <ScaleIcon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle>Scalable Listings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Offer resources for small-scale AI tasks to enterprise-grade solutions, with full control over pricing and availability.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <HeadphonesIcon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle>Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Robust support and a community of helpful providers to ensure success.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <blockquote className="text-lg italic text-muted-foreground">
            "Listing my GPUs was seamless, and the payouts are great!"
          </blockquote>
          <p className="mt-2 text-sm font-medium">- Marcus Rodriguez, GPU Provider</p>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceBenefits;