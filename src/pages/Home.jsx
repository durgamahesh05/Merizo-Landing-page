import { useRef } from "react";
import Footer from "../components/Footer.jsx";
import BillCard from "../components/BillCard.jsx";
import useDocumentTitle from "../hooks/useDocumentTitle.js";
import useBillCardInteractions from "../hooks/useBillCardInteractions.js";
import useGlobe from "../hooks/useGlobe.js";
import { PLAY_STORE_URL, openPlayStore } from "../lib/playStore.js";

export default function Home() {
  useDocumentTitle("Merizo - Split smarter. Settle faster.");
  useBillCardInteractions();

  const globeRef = useRef(null);
  useGlobe(globeRef);

  return (
    <div className="page-shell">
      <svg className="svg-filters" aria-hidden="true">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.25 0" />
        </filter>
        <filter id="heavy-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.4 0" />
        </filter>
      </svg>

      <div className="background-lines" aria-hidden="true">
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 800 C 300 400, 800 600, 1500 200" stroke="rgba(23, 143, 141, 0.22)" strokeWidth="1" />
          <path d="M-50 200 C 400 -100, 900 800, 1500 400" stroke="rgba(124, 92, 255, 0.18)" strokeWidth="1" />
          <path d="M200 900 C 600 300, 1200 400, 1600 -50" stroke="rgba(10, 10, 10, 0.12)" strokeWidth="1" />
        </svg>
      </div>

      <nav className="navbar" aria-label="Primary">
        <div className="logo logo-button">
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
            fetchpriority="high"
          />
          <span className="brand-name">merizo</span>
        </div>

        <a className="btn btn-primary" href={PLAY_STORE_URL} target="_self" onClick={openPlayStore}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>Log In / Sign Up</span>
        </a>
      </nav>

      <BillCard className="bill-chai" speed="0.05" kicker="Chai" amount="Rs 180" meta="Tapri round">
        <path d="M18 26h25v10a13 13 0 0 1-13 13 12 12 0 0 1-12-12V26z" />
        <path d="M43 30h5a6 6 0 0 1 0 12h-6" />
        <path d="M23 17c-3-3 3-5 0-8M32 17c-3-3 3-5 0-8M41 17c-3-3 3-5 0-8" />
        <path d="M15 52h34" />
      </BillCard>
      <BillCard className="bill-party" speed="0.08" kicker="Party" amount="Rs 4,860" meta="Friday night">
        <path d="M18 51l8-36 23 23-31 13z" />
        <path d="M27 20l17 17" />
        <path d="M35 12h8M48 17l5-5M44 27l10-3" />
        <path d="M25 42l10-10" />
      </BillCard>
      <BillCard className="bill-grocery" speed="0.03" kicker="Grocery" amount="Rs 2,340" meta="Monthly run">
        <path d="M18 24h34l-5 20H23l-5-20z" />
        <path d="M23 24l7-12M47 24l-7-12" />
        <path d="M27 32h16M29 40h12" />
        <circle cx="25" cy="50" r="3" />
        <circle cx="45" cy="50" r="3" />
      </BillCard>

      <main className="hero-section">
        <p className="subtitle">Smart expense sharing for trips, homes, friends, and teams</p>
        <h1 className="title">Merizo</h1>
        <p className="availability">Split bills, scan receipts, track balances, and settle up across web, iOS, and Android.</p>

        <a className="btn btn-dark btn-large" href={PLAY_STORE_URL} target="_self" onClick={openPlayStore}>
          <span className="icon-circle" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </span>
          Download App
        </a>
      </main>

      <section className="mockup-section" aria-label="Merizo preview">
        <div className="mockup-container">
          <div className="mockup-window desktop-mockup">
            <div className="mockup-header">
              <div className="mockup-logo">MERIZO DASHBOARD</div>
              <div className="mockup-menu" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </div>
            </div>
            <div className="mockup-body">
              <div className="mockup-category">OVERVIEW</div>
              <h2 className="mockup-title">Money shared without the mental math</h2>
              <p className="mockup-meta">Balances, bills, and settlements stay organized in one place.</p>
              <div className="mockup-image" aria-hidden="true">
                <div className="dashboard-pill">
                  <span>You are owed</span>
                  <strong>Rs 12,450</strong>
                </div>
                <div className="dashboard-chart">
                  <span style={{ "--h": "42%" }}></span>
                  <span style={{ "--h": "64%" }}></span>
                  <span style={{ "--h": "38%" }}></span>
                  <span style={{ "--h": "86%" }}></span>
                  <span style={{ "--h": "58%" }}></span>
                  <span style={{ "--h": "72%" }}></span>
                </div>
                <div className="dashboard-list">
                  <span>Goa weekend</span>
                  <span>Apartment dinner</span>
                  <span>Monthly utilities</span>
                </div>
              </div>
            </div>

            <div className="ai-assistant-popup">
              <div className="ai-header">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" />
                </svg>
                Assistant
              </div>
              <p>How much did we spend on the Goa trip?</p>
            </div>
          </div>

          <div className="mockup-window mobile-mockup">
            <div className="mockup-header mobile">
              <div className="mockup-logo">MERIZO<br />APP</div>
              <div className="mockup-menu" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </div>
            </div>
            <div className="mockup-image-mobile" aria-hidden="true">
              <div className="phone-status">
                <span>YOU ARE OWED</span>
                <strong>Rs 8,420</strong>
              </div>
              <div className="phone-card accent-card">
                <span>Goa Weekend</span>
                <strong>5 friends</strong>
              </div>
              <div className="phone-row">
                <span>Dinner bill</span>
                <strong>Rs 2,180</strong>
              </div>
              <div className="phone-row">
                <span>Taxi split</span>
                <strong>Rs 640</strong>
              </div>
              <div className="phone-tabbar">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="mobile-actions" role="group" aria-label="App actions">
              <div className="action-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <line x1="21" y1="10" x2="3" y2="10" />
                  <line x1="21" y1="6" x2="3" y2="6" />
                  <line x1="21" y1="14" x2="3" y2="14" />
                  <line x1="21" y1="18" x2="3" y2="18" />
                </svg>
                Trips
              </div>
              <div className="action-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                Split
              </div>
              <div className="action-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 8l6 6" />
                  <path d="M4 14l6-6 2-3" />
                  <path d="M2 5h12" />
                  <path d="M7 2h1" />
                  <path d="M22 22l-5-10-5 10" />
                  <path d="M14 18h6" />
                </svg>
                Settle
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section" aria-labelledby="feature-heading">
        <div className="bills-row" aria-hidden="true">
          <BillCard className="bill-row-1" speed="0.04" kicker="Rent" amount="Rs 28,000" meta="Apartment">
            <path d="M14 31l18-16 18 16" />
            <path d="M20 29v22h24V29" />
            <path d="M28 51V39h8v12" />
            <path d="M24 34h4M36 34h4" />
          </BillCard>
          <BillCard className="bill-row-2" speed="0.06" kicker="Dinner" amount="Rs 3,120" meta="Friends">
            <path d="M20 12v22M28 12v22M20 24h8" />
            <path d="M24 34v18" />
            <path d="M43 12c5 7 5 18 0 24v16" />
          </BillCard>
          <BillCard className="bill-row-3" speed="0.02" kicker="Fuel" amount="Rs 1,950" meta="Road trip">
            <path d="M20 15h19v38H20z" />
            <path d="M24 20h11v11H24zM39 24l8 8v14a5 5 0 0 0 10 0V31l-8-8" />
            <path d="M22 53h17" />
          </BillCard>
          <BillCard className="bill-row-4" speed="0.05" kicker="Travel" amount="Rs 9,800" meta="Tickets">
            <path d="M13 38l38-20-9 33-10-14-14 9 7-15-12 7z" />
            <path d="M32 37l19-19" />
          </BillCard>
          <BillCard className="bill-row-5" speed="0.07" kicker="Bills" amount="Rs 5,420" meta="Utilities">
            <path d="M35 8L19 36h13l-3 20 17-30H33l2-18z" />
          </BillCard>
          <BillCard className="bill-row-6" speed="0.03" kicker="Shopping" amount="Rs 6,730" meta="Shared cart">
            <path d="M19 23h26l3 29H16l3-29z" />
            <path d="M24 23a8 8 0 0 1 16 0" />
            <path d="M24 35h16" />
          </BillCard>
        </div>
        <h2 className="title faq-title" id="feature-heading">Built for shared money</h2>
        <div className="feature-grid">
          <article className="feature-card">
            <h3>Scan</h3>
            <p>Turn receipts into categorized expenses in seconds.</p>
          </article>
          <article className="feature-card">
            <h3>Split</h3>
            <p>Share costs by person, category, trip, home, or group.</p>
          </article>
          <article className="feature-card">
            <h3>Settle</h3>
            <p>See who owes what and close balances with less back-and-forth.</p>
          </article>
        </div>
      </section>

      <section className="browse-intelligence">
        <div className="cosmic-container">
          <div className="world-feature" role="group" aria-label="Merizo around the world">
            <div id="globe" ref={globeRef}></div>
            <div className="world-copy">
              <h3>Merizo Around the World</h3>
              <p>Discover destinations, plan trips,<br />and connect with travelers globally.</p>
            </div>
          </div>
          <h2 className="title text-white">Manage with intelligence</h2>
          <a className="btn btn-light btn-large mt-4" href={PLAY_STORE_URL} target="_self" onClick={openPlayStore}>
            <span className="icon-circle dark" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </span>
            Download App
          </a>
        </div>
      </section>

      <Footer>
        <BillCard className="bill-footer" speed="0.01" kicker="Settled" amount="Rs 0" meta="All clear">
          <path d="M18 12h28v40l-5-3-5 3-5-3-5 3-4-3-4 3V12z" />
          <path d="M24 24h16M24 32h16M24 40h10" />
        </BillCard>
      </Footer>
    </div>
  );
}
