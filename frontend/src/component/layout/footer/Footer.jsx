import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <a href="#top">
        <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#top">
        <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#top">
        <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      <div className="footer-left">
        <p className="footer-links">
          <a href="#top" className="link-1">
            Home
          </a>

          <a href="#top">Blog</a>

          <a href="#top">Pricing</a>

          <a href="#top">About</a>

          <a href="#top">Faq</a>

          <a href="#top">Contact</a>
        </p>

        <p>WebMart &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
