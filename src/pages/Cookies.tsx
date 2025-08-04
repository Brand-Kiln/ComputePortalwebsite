import React from 'react';
import AppLayout from '@/components/AppLayout';

const Cookies: React.FC = () => {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <h3 className="font-bold mb-2 text-right">
          Effective Date: August 03, 2025
        </h3>
        <h3 className="font-bold mb-8 text-right">
          Last Updated: August 03, 2025
        </h3>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
          <p className="mb-6 text-muted-foreground">
            Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit websites. They help websites remember information about your visit and improve your experience.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
          <ul className="mb-6 text-muted-foreground list-disc list-inside">
            <li>Enable essential website functionality.</li>
            <li>Analyze website usage and improve performance.</li>
            <li>Remember your preferences.</li>
            <li>Provide personalized content and advertisements (if applicable).</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
          <ul className="mb-6 text-muted-foreground list-disc list-inside">
            <li>
              <strong>Essential Cookies:</strong> Necessary for website functionality (e.g., shopping cart, login).
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics).
            </li>
            <li>
              <strong>Preference Cookies:</strong> Remember your settings and preferences.
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used to deliver relevant ads (if used).
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
          <p className="mb-6 text-muted-foreground">
            You can control and manage cookies through your browser settings. You can also delete cookies already stored on your device.
          </p>
          <p className="mb-6 text-muted-foreground">
            <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
          <p className="mb-6 text-muted-foreground">
            We may allow third-party services to place cookies on your device for analytics and advertising purposes. These cookies are subject to the third parties' privacy policies.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Changes to This Cookie Policy</h2>
          <p className="mb-6 text-muted-foreground">
            We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated effective date.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p className="mb-6 text-muted-foreground">
            If you have any questions about our use of cookies, please contact us at:{' '}
            <a href="mailto:support@computeportal.io" className="underline">
              support@computeportal.io
            </a>
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Cookies;
