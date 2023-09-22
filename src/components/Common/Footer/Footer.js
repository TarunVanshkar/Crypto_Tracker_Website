import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoGEEK
      </h2>
      <div className="social-links">
        <a href="https://github.com/TarunVanshkar" target="_blank">
          <GitHubIcon className="social-link" />
        </a>
        <a href="https://facebook.com" target="_blank">
          <FacebookIcon className="social-link" />
        </a>
        <a href="mailto:tarunben33@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
