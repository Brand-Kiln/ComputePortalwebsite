import React from "react";
import { Button } from "@/components/ui/button";

const SellersHero: React.FC = () => {
  const scrollToListing = () => {
    const listingSection = document.getElementById("listing-section");
    if (listingSection) {
      listingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight mt-8">
          The world needs your Innovative Compute and Hardware… here's how to
          reach them
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Whether you're new to Web 3 tech or an experienced provider,
          our marketplace makes it easy to list and monetize your compute and
          hardware resources for AI projects.
        </p>
        <Button
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={scrollToListing}
        >
          Start Listing Now
        </Button>
      </div>
    </section>
  );
};

export default SellersHero;
