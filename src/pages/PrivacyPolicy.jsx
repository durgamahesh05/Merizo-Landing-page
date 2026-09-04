import Footer from "../components/Footer.jsx";
import useDocumentTitle from "../hooks/useDocumentTitle.js";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  useDocumentTitle("Privacy Policy :: Merizo");

  return (
    <div className="privacy-page">
      <header className="navbar">
        <div className="brand-link">
          <img src="/assets/images/logo.png" alt="" aria-hidden="true" />
          <span>merizo</span>
        </div>
      </header>

      <main className="policy-main">
        <p className="eyebrow">Privacy Policy</p>
        <h1>Your shared expenses stay yours.</h1>
        <p className="intro">
          This Privacy Policy explains how Merizo collects, uses, stores, and protects information
          when you use our expense-sharing app, website, and related services.
        </p>
        <p className="updated">Last updated: May 27, 2026</p>

        <section className="policy-section">
          <h2>Information we collect</h2>
          <ul>
            <li>Account details such as your name, email address, profile photo, and login information.</li>
            <li>Expense data you add to Merizo, including groups, bills, receipt images, categories, notes, balances, and settlement records.</li>
            <li>Contacts or group member details you choose to add so expenses can be shared with the right people.</li>
            <li>Device, app, and usage information such as browser type, device type, app interactions, crash logs, and approximate location from your device or network.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>How we use information</h2>
          <ul>
            <li>To create and manage your Merizo account.</li>
            <li>To split bills, scan receipts, calculate balances, show group activity, and help you settle shared expenses.</li>
            <li>To send important service messages such as account, security, support, or transaction-related updates.</li>
            <li>To improve reliability, prevent misuse, debug issues, and develop better Merizo features.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Receipts and payment information</h2>
          <p>
            Merizo may process receipt images and expense details you upload to help extract
            totals, categories, dates, and participants. If Merizo supports payments or settlement
            links, payment processing may be handled by trusted payment providers. Merizo does not
            need to store full card numbers to track shared balances.
          </p>
        </section>

        <section className="policy-section">
          <h2>Sharing with other users</h2>
          <p>
            Expense information may be visible to people in the same group, bill, trip, home, or
            shared expense. For example, group members may see names, amounts, notes, balances,
            receipt details, and settlement status needed to understand the shared expense.
          </p>
        </section>

        <section className="policy-section">
          <h2>Third-party services</h2>
          <p>
            We may use service providers for hosting, analytics, authentication, email, crash
            reporting, receipt processing, payments, and customer support. These providers may
            process information only as needed to provide their services to Merizo.
          </p>
        </section>

        <section className="policy-section">
          <h2>Your choices</h2>
          <ul>
            <li>You can update your account information from your account settings where available.</li>
            <li>You can delete or edit expenses when your permissions allow it.</li>
            <li>You can request account deletion or privacy support by contacting us.</li>
            <li>You can manage cookies, notifications, and app permissions through your browser or device settings.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Data security and retention</h2>
          <p>
            We use reasonable technical and organizational safeguards to protect your information.
            We keep information for as long as needed to provide Merizo, comply with legal
            obligations, resolve disputes, prevent fraud, and maintain accurate shared expense
            records.
          </p>
        </section>

        <section className="policy-section">
          <h2>Children</h2>
          <p>
            Merizo is not intended for children under 13. If we learn that we collected personal
            information from a child under 13 without appropriate consent, we will take steps to
            delete it.
          </p>
        </section>

        <section className="policy-section">
          <h2>Changes to this policy</h2>
          <p>
            We may update this Privacy Policy as Merizo changes. If we make meaningful changes, we
            will update the date above and may notify users through the app, website, or email.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact us</h2>
          <p>
            For privacy questions or requests, contact Merizo at{" "}
            <a href="mailto:support@merizo.com">support@merizo.com</a>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
