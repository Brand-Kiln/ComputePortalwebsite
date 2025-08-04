import React from "react";
import AppLayout from "@/components/AppLayout";

const Privacy: React.FC = () => {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <h3 className="font-bold mb-2 text-right">
          Effective Date: August 03, 2025
        </h3>
        <h3 className="font-bold mb-8 text-right">
          Last Updated: August 03, 2025
        </h3>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-6 text-muted-foreground">
            ComputePortal (“we,” “us,” or “our”) respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. What Data We Collect</h2>
          <ul className="mb-6 text-muted-foreground list-disc list-inside">
            <li><strong>Personal Information:</strong> Name, email address, shipping address, billing information, account credentials.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, device information, pages visited, and time spent on our site.</li>
            <li><strong>Cookies & Tracking Technologies:</strong> We use cookies to enhance your browsing experience and analyze site usage.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
          <ul className="mb-6 text-muted-foreground list-disc list-inside">
            <li>Provide and improve our services.</li>
            <li>Process orders and payments.</li>
            <li>Communicate with you (e.g., order updates, customer support).</li>
            <li>Comply with legal obligations.</li>
            <li>Prevent fraud and ensure site security.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">4. Sharing of Data</h2>
          <ul className="mb-6 text-muted-foreground list-disc list-inside">
            <li>Third-party service providers (e.g., payment processors, shipping partners).</li>
            <li>Sellers on our platform (when you purchase from them).</li>
            <li>Legal authorities if required by law.</li>
          </ul>
          <p className="mb-6 text-muted-foreground">
            We do not sell your personal data.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p className="mb-6 text-muted-foreground">
            We implement reasonable technical and organizational measures to protect your data. However, no system is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <ul className="mb-6 text-muted-foreground list-disc list-inside">
            <li>Access or correct your personal data.</li>
            <li>Request deletion of your data.</li>
            <li>Object to data processing.</li>
            <li>Withdraw consent (where applicable).</li>
          </ul>
          <p className="mb-6 text-muted-foreground">
            To exercise your rights, contact us at: <a href="mailto:support@computeportal.io" className="underline">support@computeportal.io</a>
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
          <p className="mb-6 text-muted-foreground">
            You can control cookie preferences through your browser settings. By using our site, you consent to our use of cookies.
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
          <p className="mb-6 text-muted-foreground">
            We retain your data only as long as necessary for the purposes described above or as required by law.
          </p>

          <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
          <p className="mb-6 text-muted-foreground">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
          </p>

          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p className="mb-6 text-muted-foreground">
            If you have any questions, please contact us at: <br />
            <strong>Email:</strong> <a href="mailto:support@computeportal.io" className="underline">support@computeportal.io</a>
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Privacy;
