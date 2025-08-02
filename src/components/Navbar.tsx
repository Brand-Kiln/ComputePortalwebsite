import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MoonIcon,
  SunIcon,
  ShoppingCartIcon,
  UserIcon,
  WalletIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: "/buyers-guide", label: "Buyers Guide" },
    { path: "/sellers-guide", label: "Sellers Guide" },
    { path: "/marketplace", label: "Marketplace" },
    { path: "/knowledge-center", label: "Knowledge Center" },
    { path: "/about", label: "About" },
    { path: "/help", label: "Help" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border/50 px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src={
                theme === "dark"
                  ? "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752049129545_15771f8e.png"
                  : "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752049261148_bac6fd1c.png"
              }
              alt="ComputePortal"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-foreground hover:text-primary transition-colors ${
                location.pathname === link.path ? "font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-primary/10"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5 text-foreground" />
            ) : (
              <MoonIcon className="h-5 w-5 text-foreground" />
            )}
          </Button>

          {/* Connect Wallet */}
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex hover:bg-primary/10 border-foreground/20"
          >
            <WalletIcon className="h-4 w-4 mr-2 text-foreground" />
            Connect Wallet
          </Button>

          {/* Profile */}
          <Link
            to="/profile"
            className={` ${
              location.pathname === "/profile" ? "bg-primary/10 rounded-lg" : ""
            }`}
          >
            <Button variant="ghost" size="icon" className="hover:bg-primary/10">
              <UserIcon className="h-5 w-5 text-foreground" />
            </Button>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className={` ${
              location.pathname === "/cart" ? "bg-primary/10 rounded-lg" : ""
            }`}
          >
            <Button variant="ghost" size="icon" className="hover:bg-primary/10">
              <ShoppingCartIcon className="h-5 w-5 text-foreground" />
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden hover:bg-primary/10"
          >
            {isMenuOpen ? (
              <XIcon className="h-5 w-5 text-foreground" />
            ) : (
              <MenuIcon className="h-5 w-5 text-foreground" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background/95 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-foreground hover:text-primary transition-colors py-2 ${
                location.pathname === link.path ? "font-bold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="w-full hover:bg-primary/10 border-foreground/20 flex items-center justify-center"
          >
            <WalletIcon className="h-4 w-4 mr-2 text-foreground" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
