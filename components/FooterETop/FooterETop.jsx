import "./FooterETop.scss";

const FooterETop = () => {
  return (
    <div className="container-fluid footerETop">
      {/* Row for 4 columns with text */}
      <div className="row justify-content-center">
        <div className="col-3 p-4">
          <h4>Column 1</h4>
          <p>Text for the first column goes here.</p>
        </div>
        <div className="col-3 p-4">
          <h4>Column 2</h4>
          <p>Text for the second column goes here.</p>
        </div>
        <div className="col-3 p-4">
          <h4>Column 3</h4>
          <p>Text for the third column goes here.</p>
        </div>
        <div className="col-3 p-4">
          <h4>Column 4</h4>
          <p>Text for the fourth column goes here.</p>
        </div>
      </div>

      {/* Crisis Text */}
      <div className="row justify-content-center">
        <div className="col-10 p-4 crisis-text">
          If you or someone you know is in a crisis, call 911 or call or text the Suicide and Crisis Lifeline at 988
        </div>
      </div>

      {/* Social Media Icons Row */}
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterETop; // ✅ Ensure this line is present
