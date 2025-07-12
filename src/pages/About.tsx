import React from 'react';
import AppLayout from '@/components/AppLayout';
import AboutHero from '@/components/about/AboutHero';
import WhyMatters from '@/components/about/WhyMatters';
import UnifiedPlatform from '@/components/about/UnifiedPlatform';
import PlatformUsers from '@/components/about/PlatformUsers';
import VisionPrinciples from '@/components/about/VisionPrinciples';
import Architecture from '@/components/about/Architecture';
import TeamSection from '@/components/about/TeamSection';
import RoadmapSection from '@/components/about/RoadmapSection';
import GetInvolved from '@/components/about/GetInvolved';

const About: React.FC = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        <AboutHero />
        <WhyMatters />
        <UnifiedPlatform />
        <PlatformUsers />
        <VisionPrinciples />
        <Architecture />
        <TeamSection />
        <RoadmapSection />
        <GetInvolved />
      </div>
    </AppLayout>
  );
};

export default About;