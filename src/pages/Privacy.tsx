import React from 'react';
import AppLayout from '@/components/AppLayout';

const Privacy: React.FC = () => {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-6 text-muted-foreground">
            We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
          </p>

          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-6 text-muted-foreground">
            We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
          <p className="mb-6 text-muted-foreground">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="mb-6 text-muted-foreground">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p className="mb-6 text-muted-foreground">
            We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-6 text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us through our Help Center.
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Privacy;