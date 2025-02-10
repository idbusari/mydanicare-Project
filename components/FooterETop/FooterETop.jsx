import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FooterETop = () => {
  return (
    <div className="container-fluid footerTop">
      <div className="row">
        {/* 4 Columns with Text */}
        <div className="col-md-3"><h4>About Us</h4><p>We provide the best services.</p></div>
        <div className="col-md-3"><h4>Contact</h4><p>info@example.com</p></div>
        <div className="col-md-3"><h4>Support</h4><p>Help Center & FAQs</p></div>
        <div className="col-md-3"><h4>Newsletter</h4><p>Subscribe for updates.</p></div>
      </div>
      
      {/* Social Media Icons in Centered Row */}
      <div className="row justify-content-center mt-4">
        <div className="col-auto">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterETop;
