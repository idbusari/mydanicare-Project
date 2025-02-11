import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./FooterETop.scss";

const FooterETop = () => {
  return (
    <div className="container-fluid footerETop">
      <div className="row text-white text-center">
        {/* 4 Columns with Text */}
        <div className="col-md-3">
          <h4>Laredo</h4>
          <p>
            Laredo Medical Center <br /> 
            1700 E Saunders Street <br /> 
            Ste B475, Laredo, TX 78041.
          </p>
        </div>

        <div className="col-md-3">
          <h4>Irving</h4>
          <p>
          DFW Area 511 E.John<br /> 
          Carpenter Freeway, Suite 500 <br /> 
            Irving, TX 75062.
          </p>
        </div>

        <div className="col-md-3">
          <h4>New York</h4>
          <p>
            Coming up soon <br /> 
            We will share <br /> 
            here shortly.
          </p>
        </div>

        <div className="col-md-3">
          <h4>New Jersey</h4>
          <p>
            Coming up soon <br /> 
            We will share <br /> 
            here shortly.
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default FooterETop;
