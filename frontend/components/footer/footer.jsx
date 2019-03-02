import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <div className="footerBar">
        <div className="footerSocial">
          <ul>
            <li>SOCIAL</li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.facebook.com/mapmyfitness"
              >
                <span>Like us on Facebook</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://twitter.com/mapmyfitness"
              >
                <span>Follow us on Twitter</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footerAbout">
          <ul>
            <li>ABOUT ME</li>
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="">Github</a>
            </li>
          </ul>
        </div>
        <div className="footerHelp">
          <ul>
            <li>Help</li>
            <li>
              <Link to="/login">
                <span>Log In / Register</span>
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/shijien/sweaty.git"
              >
                <span>Developer / API</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
  );
};
export default Footer;
