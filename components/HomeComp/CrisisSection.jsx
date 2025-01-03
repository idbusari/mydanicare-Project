import './CrisisSection.scss';

const CrisisSection = () => {
    return (
        <section className="crisis-care-container py-4 px-3 p-md-4">
        <div className="row">
          
       {/*   <div className="col-lg-4 py-1 py-lg-2 mb-2 mb-lg-0">
            <div className="row">
              <div className="col-3 col-sm-2 col-lg-3 pr-0">
                <Image alt="Crisis Care Icon" src={"/images/crisislogo.png"} width={112} height={80} className="bg-light" />
              </div>
              <div className="col-9 col-sm-10 col-lg-9 my-auto pl-0 pl-lg-2">
                <p className="subheader-caps-small text-white mb-0">Help Center</p>
                <h2 className="text-white mb-0">DaniCare</h2>
              </div>
            </div>
          </div>
          */}
    
          
          <div className="col-12 py-1 py-lg-2 mb-0">
            <div className="row p-3">
              <div className="crisis-text">If you or someone you know is in a crisis, call 911 or call or text the Suicide and Crisis Lifeline at 988</div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CrisisSection;