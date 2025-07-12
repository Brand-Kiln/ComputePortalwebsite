import React from 'react';
import AppLayout from '@/components/AppLayout';
import HeroSection from '@/components/HeroSection';
import WhySection from '@/components/WhySection';
import GettingStartedSection from '@/components/GettingStartedSection';
import TrustSection from '@/components/TrustSection';
import CategoriesSection from '@/components/CategoriesSection';

const Index: React.FC = () => {
  return (
    <AppLayout>
      <HeroSection />
      <GettingStartedSection />
      <WhySection />
      <TrustSection />
      <CategoriesSection />
    </AppLayout>
  );
};

export default Index;