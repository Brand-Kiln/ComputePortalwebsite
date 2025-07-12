import React from 'react';
import FlippableCard from './FlippableCard';

const TeamSection: React.FC = () => {
  const advisors = [
    {
      name: "Evan Rodenberg",
      country: "USA",
      focus: "Marketing",
      description: "This former CEO (global Edge Compute leader brand) brings 20+ yrs avg. expertise of brand marketing and sales expertise alongside his vast network of Web3 innovator brands",
      linkedinUrl: "https://www.linkedin.com/in/evan-rodenberg/",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752117800683_8fef5bfb.jpeg"
    },
    {
      name: "Nathaniel Minton",
      country: "USA",
      focus: "Solution",
      description: "This founder & CEO of Flux Point Studios is a rising star in AI and Web3, backing our solutionism with deep tech fluency.",
      linkedinUrl: "https://www.linkedin.com/in/nathaniel-minton/",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752117803414_4e2697f9.jpg"
    },
    {
      name: "Ronald Vorstenbosch",
      country: "Spain",
      focus: "Strategy",
      description: "This seasoned leader brings 30+ yrs avg. expertise of corporate leadership and entrepreneurship across blockchain, crypto, telecom, and decentralized compute.",
      linkedinUrl: "https://www.linkedin.com/in/ronaldvorstenbosch/",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752117804242_c52a229d.jpg"
    },
    {
      name: "Raymond Mata",
      country: "USA",
      focus: "Blockchain",
      description: "This blockchain enthusiast and elite coder is the Product Leader at a top global Web3 brand and brings 25+ yrs avg. expertise alongside understanding of decentralized communities.",
      linkedinUrl: "https://x.com/PoolGrow",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752117804992_75ab7af1.jpeg"
    },
    {
      name: "Cole Bartlett",
      country: "USA",
      focus: "Business Development",
      description: "This celebrated Web3 Influencer is an ardent blockchain protagonist, a published author and a voice of the tech savvy global citizen bridging US, EU and LATAM communities.",
      linkedinUrl: "https://www.linkedin.com/in/cole-bartlett/",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752117805943_0da57f66.jpg"
    },
    {
      name: "Martijn Aardema",
      country: "Netherlands",
      focus: "General Counsel",
      description: "This international legal expert brings 30 yrs avg. expertise advising big-tech enterprises as well as scale-up organizations across the EU, USA, and beyond.",
      linkedinUrl: "https://www.linkedin.com/in/martijn-aardema-449338/",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752117806803_5d17a422.jpeg"
    }
  ];

  const founders = [
    {
      name: "Jerry Hall",
      country: "Costa Rica",
      focus: "Founder & Business Head",
      description: "Jerry is a passionate advocate for decentralization, AI and Web3 ethos as well as host and speaker across multiple tech forums. Across 40+ yrs avg. expertise of his entrepreneurial and tech-leadership career, Jerry held multiple CXO roles and ensures solutionism across all ComputePortal initiatives as the CEO.",
      linkedinUrl: "https://www.linkedin.com/in/jerry-v-hall-b43b937/",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752117854409_c72906ff.jpg"
    },
    {
      name: "Yoonil Choi",
      country: "South Korea",
      focus: "Founder & Technology Head",
      description: "Principal Engineer at Samsung global for 16+ years, Yoonil held CTO roles for Web3 firms like HyperRing, HyperASICs, etc across 25 yrs avg. expertise of his career. This blockchain author is renowned for his contribution towards cryptographic concepts, embedded networks as well as decentralized hardware for complex ecosystems. He architects technical implementations as the CTO of ComputePortal.",
      linkedinUrl: "https://www.linkedin.com/in/yoonil-choi/",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752117808558_6c19817f.jpg"
    },
    {
      name: "Manas Dewan",
      country: "India",
      focus: "Founder & Product Head",
      description: "Ranked among India's top 5 Brand-Tech pioneers (CXO-Look magazine, 2024), Manas is currently pursuing one of the earliest global PhDs on Web 3.0 and Metaverse Didactics. With 25 yrs avg. expertise of CXO roles across EU, MEA and India, Manas helps global enterprises bridge towards emergent-digital ecosystems. A published author and globally ranked blogger, Manas ensures customer centric product leadership as the CPO of ComputePortal.",
      linkedinUrl: "https://www.linkedin.com/in/manasdewan/",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752117809362_44e1f976.jpg"
    }
  ];

  return (
    <section id="team" className="py-16 px-4 bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            The Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Bringing together the brightest global sparks and technocrats.
          </p>
          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 max-w-2xl mx-auto border border-blue-200 dark:border-blue-800">
            <p className="text-lg font-semibold text-blue-700 dark:text-blue-300">
              Spread across 5 nations & 3 continents.<br />
              20+ yrs avg. expertise of each member.
            </p>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Advisors</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <FlippableCard 
                key={index} 
                {...advisor} 
                type="advisor"
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Founders</h3>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <FlippableCard 
                key={index} 
                {...founder} 
                type="founder"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;