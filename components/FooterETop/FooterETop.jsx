import "./FooterETop.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const FooterETop = () => {
  return (
    <div className="container-fluid footerETop">
      <div className="row text-white py-4">
        {/* Four text columns */}
        <div className="col-md-3 col-sm-6 footer-column">
          <h4>About Us</h4>
          <p>We are dedicated to providing quality mental health care and support services to our community.</p>
        </div>
        <div className="col-md-3 col-sm-6 footer-column">
          <h4>Services</h4>
          <p>We offer therapy, counseling, and psychiatric evaluations tailored to your needs.</p>
        </div>
        <div className="col-md-3 col-sm-6 footer-column">
          <h4>Contact</h4>
          <p>Email: contact@mydanicare.com<br />Phone: +1 (555) 123-4567</p>
        </div>
        <div className="col-md-3 col-sm-6 footer-column">
          <h4>Resources</h4>
          <p>Explore our articles, guides, and self-help tools to improve your mental well-being.</p>
        </div>
      </div>

      {/* Social Media Row */}
      <div className="row justify-content-center">
        <div className="col-12 text-center py-3 social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterETop;
