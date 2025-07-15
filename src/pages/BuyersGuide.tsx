import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShieldCheckIcon,
  CreditCardIcon,
  ScaleIcon,
  HeadphonesIcon,
  CheckCircleIcon,
  MonitorIcon,
  ServerIcon,
  BarChart3Icon,
  ClockIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import TrendingSection from "@/components/TrendingSection";

const BuyersGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [showComputeDetails, setShowComputeDetails] = useState(false);
  const [showHardwareDetails, setShowHardwareDetails] = useState(false);

  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="relative max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight mt-8">
              Blockchain-based Computing, Made Simple
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're new to decentralized tech or a seasoned pro, our
              marketplace makes it easy to find and use powerful computing
              resources for your projects.
            </p>
            <Link to="/marketplace">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Resources Now
              </Button>
            </Link>
          </div>
        </section>

        {/* Why Our Marketplace */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Our Marketplace is Right for You
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <ShieldCheckIcon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle>Trusted Providers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access hardware and software from vetted, globally reputed
                    providers.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <CreditCardIcon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle>Flexible Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Pay with credit cards, PayPal, or cryptocurrencies (Bitcoin,
                    Ethereum).
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <ScaleIcon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle>Scalable Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Resources for small experiments to enterprise-grade
                    projects.
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
                    Robust support and a community of helpful enthusiasts.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <blockquote className="text-lg italic text-muted-foreground">
                "Scaling my dream tech project was effortless! Thank you for
                making everything so simple. – Anagh Raj, Lead Dev at Brand
                Kiln"
              </blockquote>
            </div>
          </div>
        </section>

        {/* Three Easy Steps */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Three Easy Steps to Power Your Project
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === 1
                    ? "ring-2 ring-primary shadow-lg"
                    : "hover:shadow-md"
                }`}
                onClick={() => setActiveStep(1)}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">
                      1
                    </span>
                  </div>
                  <CardTitle>Browse Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Explore compute (GPUs, CPUs) and hardware (edge servers)
                    with filters for price, performance, and provider
                    reputation.
                  </p>
                </CardContent>
              </Card>
              <Card
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === 2
                    ? "ring-2 ring-primary shadow-lg"
                    : "hover:shadow-md"
                }`}
                onClick={() => setActiveStep(2)}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">
                      2
                    </span>
                  </div>
                  <CardTitle>Select and Pay</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Choose a resource and pay securely with fiat (credit
                    card/PayPal) or crypto (via MetaMask). Transparent pricing,
                    no hidden fees.
                  </p>
                </CardContent>
              </Card>
              <Card
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === 3
                    ? "ring-2 ring-primary shadow-lg"
                    : "hover:shadow-md"
                }`}
                onClick={() => setActiveStep(3)}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">
                      3
                    </span>
                  </div>
                  <CardTitle>Deploy and Monitor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Deploy resources via API and monitor performance in
                    real-time (CPU usage, uptime) on a user-friendly dashboard,
                    updated every 5 seconds.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resource Types */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Discover the Right Resources for Your Needs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card
                className="cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => setShowComputeDetails(!showComputeDetails)}
              >
                <CardHeader>
                  <MonitorIcon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">
                    Decentralized Compute
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Rent or buy computing power for a variety of tasks- from AI
                    model training to Blockchain software. Optimize your
                    go-to-market… from weeks to hours.
                  </p>
                  {showComputeDetails && (
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-2">Sample Specs:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>
                          • AI Models & APIs (GPT Models, Image Recognition, NLP
                          Services)
                        </li>
                        <li>
                          • Data Processing (Big Data, Analytics, ETL Pipelines)
                        </li>
                        <li>
                          • Oracles & Automation (Price Feeds, Smart Contracts,
                          Triggers)
                        </li>
                        <li>
                          • Blockchain Services (Node Hosting, dApp Backend,
                          Deployment)
                        </li>
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
              <Card
                className="cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => setShowHardwareDetails(!showHardwareDetails)}
              >
                <CardHeader>
                  <ServerIcon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">
                    Decentralized Hardware
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Lease or buy the right hardware at best prices. No more
                    scouting for devices to power your dream project… its all
                    here.
                  </p>
                  {showHardwareDetails && (
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-2">Sample Specs:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>
                          • Edge & Smart Devices (IoT Gateways, Smart Sensors,
                          Edge Computers)
                        </li>
                        <li>
                          • Accelerator Units (GPU Cards, FPGA Boards, ASIC
                          Miners)
                        </li>
                        <li>
                          • Storage & Data Nodes (NAS Systems, SSD Arrays,
                          Distributed Storage)
                        </li>
                        <li>
                          • Custom Systems (Custom Rigs, Modular PCs,
                          Specialized Hardware)
                        </li>
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quality Trust */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Quality You Can Trust
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CheckCircleIcon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Vetted Providers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Providers are verified with reputation scores and
                    performance history.
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
                    Track resources via a dashboard with live updates.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ClockIcon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Guaranteed Reliability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Monitored uptime with clear refund policies.
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
                    Available via email, chat, or AI agent.
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

        {/* Trending Section */}
        <TrendingSection />
      </div>
    </AppLayout>
  );
};

export default BuyersGuide;
