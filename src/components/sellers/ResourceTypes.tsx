import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MonitorIcon, ServerIcon } from 'lucide-react';

const ResourceTypes: React.FC = () => {
  const scrollToListing = () => {
    const listingSection = document.getElementById('listing-section');
    if (listingSection) {
      listingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Share the Right Resources for AI Demand</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <MonitorIcon className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl">Decentralized Compute</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">AI Models & APIs</h4>
                  <p className="text-sm text-muted-foreground">GPT Models, Image Recognition, NLP Services</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Data Processing & Analytics</h4>
                  <p className="text-sm text-muted-foreground">Big Data Processing, Real-time Analytics, ETL Pipelines</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Oracles & Automation</h4>
                  <p className="text-sm text-muted-foreground">Price Feeds, Smart Contract Automation, Event Triggers</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Blockchain & dApp Services</h4>
                  <p className="text-sm text-muted-foreground">Node Hosting, dApp Backend, Smart Contract Deployment</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <ServerIcon className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl">Decentralized Hardware</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Edge & Smart Devices</h4>
                  <p className="text-sm text-muted-foreground">IoT Gateways, Smart Sensors, Edge Computers</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Accelerator & Compute Units</h4>
                  <p className="text-sm text-muted-foreground">GPU Cards, FPGA Boards, ASIC Miners</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Storage & Data Nodes</h4>
                  <p className="text-sm text-muted-foreground">NAS Systems, SSD Arrays, Distributed Storage</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Modular & Custom Systems</h4>
                  <p className="text-sm text-muted-foreground">Custom Rigs, Modular PCs, Specialized Hardware</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8">
          <Button size="lg" onClick={scrollToListing}>
            Start Listing Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourceTypes;