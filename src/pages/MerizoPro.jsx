import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle.js";
import { PLAY_STORE_URL, openPlayStore } from "../lib/playStore.js";

export default function MerizoPro() {
  useDocumentTitle("Merizo Pro - Plans");

  return (
    <div className="page-shell pro-page">
      <div className="background-lines" aria-hidden="true">
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 800 C 300 400, 800 600, 1500 200" stroke="rgba(23, 143, 141, 0.22)" strokeWidth="1" />
          <path d="M-50 200 C 400 -100, 900 800, 1500 400" stroke="rgba(124, 92, 255, 0.18)" strokeWidth="1" />
          <path d="M200 900 C 600 300, 1200 400, 1600 -50" stroke="rgba(10, 10, 10, 0.12)" strokeWidth="1" />
        </svg>
      </div>

      <nav className="navbar pro-navbar" aria-label="Primary">
        <Link className="pro-back-link" to="/" aria-label="Back to Merizo home">
          <span className="material-symbols-rounded" aria-hidden="true">arrow_back</span>
        </Link>

        <Link className="logo logo-button pro-logo" to="/" aria-label="Merizo home">
          <img
            className="brand-mark"
            src="/assets/images/logo-mobile-small.png"
            srcSet="/assets/images/logo-mobile-small.png 96w, /assets/images/logo.png 1254w"
            sizes="(max-width: 640px) 34px, 42px"
            width="42"
            height="42"
            alt=""
            aria-hidden="true"
            decoding="async"
          />
          <span className="brand-name">merizo pro</span>
        </Link>

        <a className="btn btn-primary" href={PLAY_STORE_URL} target="_self" onClick={openPlayStore}>
          <span>Start</span>
        </a>
      </nav>

      <main className="pro-main">
        <section className="pro-hero" aria-labelledby="pro-heading">
          <p className="about-kicker">Merizo Pro</p>
          <h1 id="pro-heading">Plans that grow with you</h1>
          <p>
            Simple rupee pricing for smarter splitting, quicker settlements, and clean expense
            spaces for people and teams.
          </p>
        </section>

        <section className="pro-pricing-grid" aria-label="Merizo Pro pricing plans">
          <article className="pro-plan-card">
            <div className="pro-plan-icon" aria-hidden="true">
              <span className="material-symbols-rounded">hub</span>
            </div>
            <div className="pro-plan-head">
              <h2>Free</h2>
              <p>Start splitting with Merizo</p>
            </div>
            <div className="pro-plan-price">
              <strong>Rs 0</strong>
              <span>forever</span>
            </div>
            <a className="pro-plan-button pro-plan-button-secondary" href={PLAY_STORE_URL} target="_self" onClick={openPlayStore}>
              Use for free
            </a>
            <ul className="pro-benefits">
              <li>Split bills with friends and family</li>
              <li>Track simple balances and dues</li>
              <li>Create personal expense groups</li>
              <li>Settle up with clear summaries</li>
            </ul>
          </article>

          <article className="pro-plan-card pro-plan-card-featured">
            <div className="pro-plan-badge">Popular</div>
            <div className="pro-plan-icon" aria-hidden="true">
              <span className="material-symbols-rounded">workspace_premium</span>
            </div>
            <div className="pro-plan-head">
              <h2>Premium</h2>
              <p>Per person plan</p>
            </div>
            <div className="pro-plan-price">
              <strong>Rs 349</strong>
              <span>/ month</span>
            </div>
            <a className="pro-plan-button" href={PLAY_STORE_URL} target="_self" onClick={openPlayStore}>
              Get Premium
            </a>
            <ul className="pro-benefits">
              <li>Everything in Free</li>
              <li>Receipt scan and smart categorizing</li>
              <li>Advanced monthly spending insights</li>
              <li>Priority access to new Pro tools</li>
              <li>Export clean expense summaries</li>
            </ul>
          </article>

          <article className="pro-plan-card">
            <div className="pro-plan-icon" aria-hidden="true">
              <span className="material-symbols-rounded">groups</span>
            </div>
            <div className="pro-plan-head">
              <h2>Team</h2>
              <p>Shared plan for groups</p>
            </div>
            <div className="pro-plan-price">
              <strong>Rs 649</strong>
              <span>/ team / month</span>
            </div>
            <Link className="pro-plan-button" to="/contact">Get Team</Link>
            <ul className="pro-benefits">
              <li>Everything in Premium</li>
              <li>Team expense spaces and roles</li>
              <li>Shared receipt and bill history</li>
              <li>Admin view for balances and dues</li>
              <li>Better reports for trips, homes, and work</li>
            </ul>
          </article>

          <article className="pro-plan-card">
            <div className="pro-plan-badge">Best value</div>
            <div className="pro-plan-icon" aria-hidden="true">
              <span className="material-symbols-rounded">auto_awesome</span>
            </div>
            <div className="pro-plan-head">
              <h2>Merizo Pro Yearly</h2>
              <p>For personal and team use</p>
            </div>
            <div className="pro-plan-price">
              <strong>Rs 999</strong>
              <span>/ year</span>
            </div>
            <a className="pro-plan-button" href={PLAY_STORE_URL} target="_self" onClick={openPlayStore}>
              Get Yearly Pro
            </a>
            <ul className="pro-benefits">
              <li>Use Pro features for both personal and team expenses</li>
              <li>AI receipt scan, smart categories, and bill suggestions</li>
              <li>AI spending insights for monthly and yearly trends</li>
              <li>Team spaces with shared history and admin controls</li>
              <li>Priority access to future AI-powered Merizo tools</li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}
