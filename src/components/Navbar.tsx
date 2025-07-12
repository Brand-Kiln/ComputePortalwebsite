import React from 'react';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, ShoppingCartIcon, UserIcon, WalletIcon } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border/50 px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img 
              src={theme === 'dark' 
                ? "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752049129545_15771f8e.png"
                : "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752049261148_bac6fd1c.png"
              } 
              alt="ComputePortal" 
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/buyers-guide" className="text-foreground hover:text-primary transition-colors">
            Buyers Guide
          </Link>
          <Link to="/sellers-guide" className="text-foreground hover:text-primary transition-colors">
            Sellers Guide
          </Link>
          <Link to="/marketplace" className="text-foreground hover:text-primary transition-colors">
            Marketplace
          </Link>
          <Link to="/knowledge-center" className="text-foreground hover:text-primary transition-colors">
            Knowledge Center
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/help" className="text-foreground hover:text-primary transition-colors">
            Help
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hover:bg-primary/10"
          >
            {theme === 'dark' ? <SunIcon className="h-5 w-5 text-foreground" /> : <MoonIcon className="h-5 w-5 text-foreground" />}
          </Button>

          {/* Connect Wallet */}
          <Button variant="outline" size="sm" className="hidden sm:flex hover:bg-primary/10 border-foreground/20">
            <WalletIcon className="h-4 w-4 mr-2 text-foreground" />
            Connect Wallet
          </Button>

          {/* Profile */}
          <Link to="/profile">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10">
              <UserIcon className="h-5 w-5 text-foreground" />
            </Button>
          </Link>

          {/* Cart */}
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10">
              <ShoppingCartIcon className="h-5 w-5 text-foreground" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;