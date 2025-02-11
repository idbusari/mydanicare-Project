import React from "react";
import "./SocialMediaSidebar.scss"; // Import the styles

const SocialMediaSidebar = () => {
  return (
    <div className="social-sidebar">
      <a href="https://www.facebook.com/danicarepsychiatry" target="_blank" rel="noopener noreferrer">
        <img src="/images/facebook.svg" alt="Facebook" className="social-icon" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="/images/x.svg" alt="Twitter" className="social-icon" />
      </a>
      <a href="https://www.instagram.com/danicarepsychiatry/" target="_blank" rel="noopener noreferrer">
        <img src="/images/instagram.svg" alt="Instagram Logo" className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/company/danicare-psychiatry" target="_blank" rel="noopener noreferrer">
        <img src="/images/linkedin.svg" alt="LinkedIn" className="social-icon" />
      </a>
      <a href="https://www.youtube.com/channel/UC4jl96PJxHQJKHd0-CRl0mg" target="_blank" rel="noopener noreferrer">
        <img src="/images/youtube.svg" alt="YouTube logo" className="social-icon" />
      </a>
      <a href="https://g.page/r/CbL7GF2HZ0LwEBM/review" target="_blank" rel="noopener noreferrer">
        <img src="/images/google.svg" alt="Google logo" className="social-icon" />
      </a>
    </div>
  );
};

export default SocialMediaSidebar;
