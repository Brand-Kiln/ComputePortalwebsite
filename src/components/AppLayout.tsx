import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AIAgent from './AIAgent';

interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <AIAgent />
    </div>
  );
};

export default AppLayout;