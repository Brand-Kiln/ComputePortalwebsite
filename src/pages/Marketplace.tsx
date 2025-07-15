import React from "react";
import AppLayout from "@/components/AppLayout";
import FeaturedSection from "@/components/marketplace/FeaturedSection";
import ListingsSection from "@/components/marketplace/ListingsSection";

const Marketplace: React.FC = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="relative max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight mt-8">
              Coming Soon!! The World’s Best Decentralized Compute Marketplace
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The best hardware and software powered by blockchain, awaits you
              here!
            </p>
          </div>
        </section>

        {/* Featured Section */}
        <FeaturedSection />

        {/* Listings Section */}
        <ListingsSection />
      </div>
    </AppLayout>
  );
};

export default Marketplace;
