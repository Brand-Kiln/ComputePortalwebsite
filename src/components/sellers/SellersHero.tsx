import React from 'react';
import { Button } from '@/components/ui/button';

const SellersHero: React.FC = () => {
  const scrollToListing = () => {
    const listingSection = document.getElementById('listing-section');
    if (listingSection) {
      listingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The world needs your Innovative Compute and Hardware… here's how to reach it to them
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Whether you're new to decentralized tech or an experienced provider, our marketplace makes it easy to list and monetize your compute and hardware resources for AI projects.
        </p>
        <Button size="lg" className="text-lg px-8 py-3" onClick={scrollToListing}>
          Start Listing Now
        </Button>
      </div>
    </section>
  );
};

export default SellersHero;