import React from 'react';
import { FacebookIcon, TwitterIcon, LinkedinIcon, GithubIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/components/theme-provider';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className="bg-background border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <Link to="/">
              <img 
                src={theme === 'dark' 
                  ? "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752049129545_15771f8e.png"
                  : "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752049261148_bac6fd1c.png"
                } 
                alt="ComputePortal" 
                className="h-16 w-auto mb-4"
              />
            </Link>
            <p className="text-muted-foreground text-sm">
              The world's best decentralized marketplace for hardware and software.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-semibold mb-4">Marketplace</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/marketplace" className="text-muted-foreground hover:text-primary">Buy Hardware</Link></li>
              <li><Link to="/marketplace" className="text-muted-foreground hover:text-primary">Buy Software</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-muted-foreground hover:text-primary">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-muted-foreground hover:text-primary">Help Center</Link></li>
              <li><Link to="/buyers-guide" className="text-muted-foreground hover:text-primary">Buyers Guide</Link></li>
              <li><Link to="/sellers-guide" className="text-muted-foreground hover:text-primary">Sellers Guide</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 ComputePortal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;