import React from 'react';
import AppLayout from '@/components/AppLayout';
import SellersHero from '@/components/sellers/SellersHero';
import MarketplaceBenefits from '@/components/sellers/MarketplaceBenefits';
import ThreeSteps from '@/components/sellers/ThreeSteps';
import ResourceTypes from '@/components/sellers/ResourceTypes';
import ConfidenceSection from '@/components/sellers/ConfidenceSection';
import ListingForm from '@/components/sellers/ListingForm';

const SellersGuide: React.FC = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        <SellersHero />
        <MarketplaceBenefits />
        <ThreeSteps />
        <ResourceTypes />
        <ConfidenceSection />
        <ListingForm />
      </div>
    </AppLayout>
  );
};

export default SellersGuide;