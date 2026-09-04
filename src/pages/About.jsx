import { useRef } from "react";
import Footer from "../components/Footer.jsx";
import useDocumentTitle from "../hooks/useDocumentTitle.js";
import useTypedIntro from "../hooks/useTypedIntro.js";
import "./About.css";

export default function About() {
  useDocumentTitle("About :: Merizo");
  const introRef = useRef(null);
  useTypedIntro(introRef);

  return (
    <div className="about-page">
      <div className="container mx-auto">
        <header className="flex items-center justify-between px-8 py-5 font-mont mx-auto">
          <div className="flex items-center w-[105px] h-[36px] sm:w-[140px] sm:h-[48px]">
            <img src="/assets/images/favicon.png" alt="Merizo Logo" className="merizo-header-logo" />
          </div>
        </header>
      </div>

      <main className="bg-facets pt-8">
        <div className="container mx-auto px-8 text-charcoal lg:max-w-5xl">
          <div className="about-hero-layout lg:flex lg:justify-between lg:items-center">
            <div className="about-hero-copy lg:w-6/12">
              <div className="merizo-intro-card" ref={introRef} data-typed-intro>
                <h1 className="text-3xl block mb-4 lg:text-4xl" data-type-line>
                  What is Merizo?
                </h1>

                <p data-type-line>
                  Merizo is a modern expense-sharing platform that makes it easy to split bills
                  with friends and family. We organize all your shared expenses and balances in
                  one place, so everyone can clearly see who owes whom. Whether you are sharing a
                  trip expense, splitting rent with roommates, or paying someone back for lunch,
                  Merizo makes life easier. We store your data securely in the cloud so that you
                  can access it anywhere: on iPhone, Android, or on your computer.
                </p>

                <strong className="font-bold mt-4 block" data-type-line>
                  We focus on simplicity and fairness
                </strong>

                <p data-type-line>
                  Most people want expense sharing to be simple and fair, but sometimes
                  calculations become confusing. Merizo helps users automatically calculate
                  balances, track payments, and avoid misunderstandings between groups. Our goal
                  is to make shared expense management smooth, transparent, and stress-free.
                </p>
              </div>
            </div>

            <div className="logo-container hidden lg:block">
              <img src="/assets/images/logo-transparent.png" alt="Merizo Logo" className="merizo-main-logo" />
            </div>
          </div>

          <section className="people-section" aria-labelledby="people-heading">
            <p className="people-eyebrow">The people behind our journey</p>
            <h1 className="people-heading" id="people-heading">
              Guided by great minds,<br />
              built by a driven team
            </h1>
            <p className="people-intro">Guided by great minds, built by a driven team</p>

            <div className="people-block">
              <h2 className="people-block-title">Meet the team &middot; Co-founders</h2>
              <div className="team-members-grid">
                <a
                  className="team-member-card"
                  href="https://www.linkedin.com/in/raghu-nandan-p/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="team-photo-placeholder">
                    <img src="/assets/images/raghu.png" alt="Raghu profile photo" />
                  </div>
                  <h3>Raghu</h3>
                  <p className="team-company">Merizo</p>
                  <p className="team-role">Developer</p>
                  <p>Building Merizo with focus, collaboration, and product quality.</p>
                </a>

                <a
                  className="team-member-card"
                  href="https://www.linkedin.com/in/jagadeesh-raavi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="team-photo-placeholder">
                    <img src="/assets/images/jagadeesh.png" alt="Jagadeesh profile photo" />
                  </div>
                  <h3>Jagadeesh</h3>
                  <p className="team-company">Merizo</p>
                  <p className="team-role">Developer</p>
                  <p>Steady engineering mindset with attention to useful product details.</p>
                </a>

                <a
                  className="team-member-card"
                  href="https://www.linkedin.com/in/durga-mahesh-uppu-231b0128a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="team-photo-placeholder">
                    <img src="/assets/images/mahesh.png" alt="Durga Mahesh profile photo" />
                  </div>
                  <h3>Durga Mahesh</h3>
                  <p className="team-company">Merizo</p>
                  <p className="team-role">Developer</p>
                  <p>Connecting product direction with hands-on development.</p>
                </a>

                <a
                  className="team-member-card"
                  href="https://www.linkedin.com/in/kaviya-sivakumar-b594092a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="team-photo-placeholder">
                    <img src="/assets/images/kaviya.jpeg" alt="Kaviya profile photo" />
                  </div>
                  <h3>Kaviya</h3>
                  <p className="team-company">Merizo</p>
                  <p className="team-role">Developer</p>
                  <p>Care and consistency as we build Merizo for real-world shared expenses.</p>
                </a>
              </div>
            </div>

            <div className="people-block">
              <h2 className="people-block-title">Our gratitude — mentor &amp; leadership</h2>
              <div className="gratitude-grid">
                <article className="story-card gratitude-card">
                  <h3>Krishna Kompalli</h3>
                  <p className="story-role">Technical Mentor &middot; AI Product Development</p>
                  <p className="team-role">Mentor</p>
                  <p>
                    Guided the team through Merizo's development — from intelligent voice-based
                    bill entry to automated scanning. His technical insight turned a complex
                    problem into an intuitive product.
                  </p>
                  <p>We're deeply grateful for his time, expertise, and trust in our potential.</p>
                </article>

                <article className="story-card gratitude-card">
                  <h3>Uday Kanth S</h3>
                  <p className="story-role">Founder, CEO &amp; MD &middot; Flyers Soft Pvt. Ltd.</p>
                  <p className="team-role">Founder &amp; CEO</p>
                  <p>
                    Uday and Flyers Soft provided the direction, encouragement, and environment to
                    build Merizo right. His leadership helped us approach the product with
                    innovation and precision.
                  </p>
                  <p className="story-quote">
                    "Building creative, innovative solutions for a diversified world."
                  </p>
                </article>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
