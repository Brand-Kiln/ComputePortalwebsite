import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCartIcon, StoreIcon, UserCheckIcon, CreditCardIcon, TruckIcon, StarIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const GettingStartedSection: React.FC = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Getting Started is <span className="text-green-600 dark:text-green-400">Super Easy!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're new to this whole Web3 thing or a seasoned pro, we make it simple for everyone.
          </p>
        </div>

        {/* Getting Started Options */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* For Buyers */}
          <Card className="border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="h-16 w-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <ShoppingCartIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Start as a Buyer</h3>
                <p className="text-muted-foreground">Find the perfect AI hardware and software for your needs</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <UserCheckIcon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">1. Create Your Account</h4>
                    <p className="text-xs text-muted-foreground">Quick signup with email or connect your wallet</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ShoppingCartIcon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">2. Browse & Compare</h4>
                    <p className="text-xs text-muted-foreground">Explore our marketplace with advanced filters</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CreditCardIcon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">3. Secure Purchase</h4>
                    <p className="text-xs text-muted-foreground">Pay with crypto or fiat, protected by smart contracts</p>
                  </div>
                </div>
              </div>
              
              <Link to="/buyers-guide">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View Buyer Guide
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* For Sellers */}
          <Card className="border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="h-16 w-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <StoreIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Start as a Seller</h3>
                <p className="text-muted-foreground">List your hardware and software to a global audience</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <UserCheckIcon className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">1. Verify Your Identity</h4>
                    <p className="text-xs text-muted-foreground">Quick KYC process to build trust with buyers</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <StoreIcon className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">2. List Your Products</h4>
                    <p className="text-xs text-muted-foreground">Easy listing process with rich media support</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TruckIcon className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">3. Fulfill & Earn</h4>
                    <p className="text-xs text-muted-foreground">Ship products and receive payments instantly</p>
                  </div>
                </div>
              </div>
              
              <Link to="/sellers-guide">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  View Seller Guide
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;