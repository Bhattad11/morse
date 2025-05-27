import React from 'react';
import { Link } from 'react-router-dom';
import '../TermsAndConditions/termsandCondition.css'
export default function TermsAndConditions() {
  return (
    <div className="bg-light min-vh-100 py-5 px-3">
      <div className="bg-white shadow rounded-4 p-5 mx-auto" style={{ maxWidth: '800px' }}>
        <h1 className="display-5 fw-bold text-primary mb-3">Terms and Conditions</h1>
        <p className="text-muted small mb-4">Effective Date: July 22, 2025</p>

        <p className="text-secondary mb-4">
          Welcome to <strong className="text-primary">Morse</strong>. These Terms and Conditions
          govern your use of our website and services.
        </p>

        <Section title="1. Acceptance of Terms">
          <p className="text-secondary">
            By accessing our site or using our services, you agree to these Terms and
            Conditions in full. If you do not agree, you must not use our services.
          </p>
        </Section>

        <Section title="2. Use of Service">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">You must be 18 years or older to use our services.</li>
            <li className="list-group-item">You agree not to misuse our content, software, or systems.</li>
            <li className="list-group-item">
              All data science insights, dashboards, and models we provide are proprietary.
            </li>
          </ul>
        </Section>

        <Section title="3. Intellectual Property">
          <p className="text-secondary">
            All content, logos, and materials are owned by <strong>Morse</strong> unless otherwise
            noted. Unauthorized use is prohibited.
          </p>
        </Section>

        <Section title="4. Limitation of Liability">
          <p className="text-secondary">
            We are not liable for any indirect, incidental, or consequential damages resulting from
            your use of our services.
          </p>
        </Section>

        <Section title="5. Governing Law">
          <p className="text-secondary">
            These Terms shall be governed by the laws of{' '}
            <strong>Indore/Madhya Pradesh</strong> without regard to its conflict of law provisions.
          </p>
        </Section>

        <Section title="6. Changes to Terms">
          <p className="text-secondary">
            We reserve the right to modify these Terms at any time. Continued use after changes
            means you accept the new Terms.
          </p>
        </Section>

        <Section title="7. Contact Us">
          <p className="text-secondary">
            For any inquiries, email us at:{' '}
            <Link
              to="mailto:admin@morseconsulting.com"
              className="text-decoration-none text-primary fw-medium"
            >
              admin@morseconsulting.com
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
