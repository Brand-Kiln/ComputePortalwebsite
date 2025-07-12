import React from 'react';
import AppLayout from '@/components/AppLayout';

const Cookies: React.FC = () => {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
          <p className="mb-6 text-muted-foreground">
            Cookies are small text files that are stored on your computer or mobile device when you visit a website.
          </p>

          <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
          <p className="mb-6 text-muted-foreground">
            We use cookies to improve your browsing experience, analyze site traffic, and personalize content.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
          <p className="mb-6 text-muted-foreground">
            Essential cookies for site functionality, analytics cookies for usage statistics, and preference cookies to remember your settings.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
          <p className="mb-6 text-muted-foreground">
            You can control and delete cookies through your browser settings. However, disabling cookies may affect site functionality.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
          <p className="mb-6 text-muted-foreground">
            We may use third-party services that set cookies on our behalf for analytics and advertising purposes.
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Cookies;