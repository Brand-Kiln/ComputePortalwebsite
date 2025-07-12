import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CpuIcon, HardDriveIcon, BrainIcon, DatabaseIcon, ZapIcon, ServerIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What You'll Find Here
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive marketplace of decentralized software and hardware resources.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Decentralized Compute */}
          <Card className="border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="h-16 w-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <CpuIcon className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">
                Decentralized Compute
              </CardTitle>
              <p className="text-muted-foreground">
                Rent or buy computing power for a variety of tasks- from AI model training to Blockchain software. Optimize your go-to-market… from weeks to hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <BrainIcon className="h-6 w-6 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-sm mb-1">AI Models & APIs</h4>
                  <p className="text-xs text-muted-foreground">GPT Models, Image Recognition, NLP Services</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <DatabaseIcon className="h-6 w-6 text-purple-600 mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Data Processing</h4>
                  <p className="text-xs text-muted-foreground">Big Data, Analytics, ETL Pipelines</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <ZapIcon className="h-6 w-6 text-green-600 mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Oracles & Automation</h4>
                  <p className="text-xs text-muted-foreground">Price Feeds, Smart Contracts, Triggers</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <ServerIcon className="h-6 w-6 text-orange-600 mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Blockchain Services</h4>
                  <p className="text-xs text-muted-foreground">Node Hosting, dApp Backend, Deployment</p>
                </div>
              </div>
              <Link to="/marketplace">
                <Button className="w-full mt-4" variant="outline">
                  Explore Software
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Decentralized Hardware */}
          <Card className="border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="h-16 w-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <HardDriveIcon className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-purple-600 dark:text-purple-400">
                Decentralized Hardware
              </CardTitle>
              <p className="text-muted-foreground">
                Lease or buy the right hardware at best prices. No more scouting for devices to power your dream project… its all here.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <CpuIcon className="h-6 w-6 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Edge & Smart Devices</h4>
                  <p className="text-xs text-muted-foreground">IoT Gateways, Smart Sensors, Edge Computers</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <ZapIcon className="h-6 w-6 text-green-600 mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Accelerator Units</h4>
                  <p className="text-xs text-muted-foreground">GPU Cards, FPGA Boards, ASIC Miners</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <DatabaseIcon className="h-6 w-6 text-purple-600 mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Storage & Data Nodes</h4>
                  <p className="text-xs text-muted-foreground">NAS Systems, SSD Arrays, Distributed Storage</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <ServerIcon className="h-6 w-6 text-orange-600 mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Custom Systems</h4>
                  <p className="text-xs text-muted-foreground">Custom Rigs, Modular PCs, Specialized Hardware</p>
                </div>
              </div>
              <Link to="/marketplace">
                <Button className="w-full mt-4" variant="outline">
                  Explore Hardware
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;