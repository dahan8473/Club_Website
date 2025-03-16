import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Tech for Social Impact</h1>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/westerntsi/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/company/techforsocialimpact/mycompany/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://discord.gg/A8fcwWx4"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-discord"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; UWO TSI 2024</span>
      </div>
    </footer>
  );
};

export default Footer;