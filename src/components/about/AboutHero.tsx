import React from 'react';
import { Button } from '@/components/ui/button';
import { Network, Users, Zap, Sparkles, Globe, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutHero: React.FC = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950/20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight mt-8">
          ComputePortal – Your Gateway to
          <span className="block text-blue-600 dark:text-blue-400">Decentralized Tech</span>
        </h1>
        
        <div className="max-w-5xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
            The world's best decentralized marketplace for hardware and software.
          </p>
          <div className="inline-flex items-center space-x-4 bg-blue-100 dark:bg-blue-900/30 px-6 py-3 rounded-full border border-blue-200 dark:border-blue-800">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="text-lg font-semibold text-blue-700 dark:text-blue-300">
              Think of us as the Amazon of Web3
            </span>
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('unified-platform')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Globe className="mr-2 h-5 w-5" />
            Explore the Vision
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('team')}
            className="px-8 py-6 text-lg font-semibold rounded-xl border-2 hover:bg-muted transition-all duration-300"
          >
            <Users className="mr-2 h-5 w-5" />
            Meet the Team
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('roadmap')}
            className="px-8 py-6 text-lg font-semibold rounded-xl border-2 hover:bg-muted transition-all duration-300"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Our Roadmap
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5</div>
            <div className="text-sm text-muted-foreground">Nations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">3</div>
            <div className="text-sm text-muted-foreground">Continents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">9</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;