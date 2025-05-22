import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="bg-light min-vh-100 py-5 px-3">
      <div className="bg-white shadow rounded-4 p-5 mx-auto" style={{ maxWidth: '800px' }}>
        <h1 className="display-5 fw-bold text-primary mb-3">Privacy Policy</h1>
        <p className="text-muted small mb-4">Last updated: July 22, 2025</p>

        <p className="text-secondary mb-4">
          At <strong className="text-primary">Morse</strong>, we are committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, and safeguard your information
          when you visit our website or use our services.
        </p>

        <Section title="1. Information We Collect">
          <p className="mb-2 text-secondary">We may collect the following types of data:</p>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">Personal information (name, email, phone number)</li>
            <li className="list-group-item">Usage data (pages visited, time spent, browser type)</li>
            <li className="list-group-item">Cookies and tracking data</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">To provide and maintain our services</li>
            <li className="list-group-item">To improve user experience</li>
            <li className="list-group-item">To send you updates, promotions, and newsletters</li>
          </ul>
        </Section>

        <Section title="3. Data Security">
          <p className="text-secondary">
            We implement strict security measures to protect your data. However, no
            method of transmission over the internet is 100% secure.
          </p>
        </Section>

        <Section title="4. Third-party Services">
          <p className="text-secondary">
            We may use third-party services (e.g., analytics, payment processors)
            that collect and use your data under their own privacy policies.
          </p>
        </Section>

        <Section title="5. Your Rights">
          <p className="text-secondary">
            You may request access, correction, or deletion of your data anytime.
          </p>
        </Section>

        <Section title="6. Changes to This Policy">
          <p className="text-secondary">
            We may update this Privacy Policy occasionally. Changes will be reflected
            on this page with a new effective date.
          </p>
        </Section>

        <Section title="7. Contact Us">
          <p className="text-secondary">
            If you have questions, contact us at:{' '}
            <Link to="mailto:anay.gupta@morseconsulting.com" className="text-decoration-none text-primary fw-medium">
              anay.gupta@morseconsulting.com
            </Link>
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-5">
      <h2 className="h5 text-primary fw-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}
