
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
          <h4>Dallas–Fort Worth Area</h4>
          <p> 511 E.John Carpenter<br /> 
          Freeway, Suite 500 <br /> 
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
          100 enterprise drive <br /> 
          Suite 301 Rockaway, <br /> 
          NJ 07866.
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default FooterETop;
