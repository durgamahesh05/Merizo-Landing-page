import { Link } from "react-router-dom";
import { PLAY_STORE_URL } from "../lib/playStore.js";

export default function Footer({ children }) {
  return (
    <footer className="site-footer">
      {children}
      <div className="footer-content">
        <div className="copyright">&copy;2026 MERIZO</div>

        <div className="footer-center">
          <a href={PLAY_STORE_URL} target="_self" aria-label="Get Merizo on Google Play">
            <img
              className="playstore-badge"
              src="/assets/images/playstore.png"
              width="314"
              height="93"
              alt="Get it on Google Play"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p>Follow Merizo</p>
          <a className="x-logo" href="https://x.com/Merizoomada" aria-label="Merizo on X">
            <img
              src="/assets/images/twitter-x-small.png"
              srcSet="/assets/images/twitter-x-small.png 64w, /assets/images/Twitter_new_X_logo.png 752w"
              sizes="30px"
              width="30"
              height="30"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />
          </a>
          <div className="footer-links">
            <Link to="/">HOME</Link>
            <a href="https://x.com/Merizoomada">X</a>
            <a href="https://www.linkedin.com/in/merizo-omada-b02406413/">LINKEDIN</a>
            <a href="https://www.instagram.com/merizoomada/">INSTAGRAM</a>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT US</Link>
            <Link to="/privacy-policy">PRIVACY & POLICY</Link>
            <Link to="/merizo-pro">Merizo Pro</Link>
          </div>
        </div>

        <div className="cosmic-curiosity">Merizo Omada</div>
      </div>
    </footer>
  );
}
