import './Expertise.scss';
import Image from 'next/image';

const Expertise = () => {
    return (
        <section id="expertise" className="bg-danicare">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
            <h1 className="mb-4 section-title">Our Areas of
                Expertise</h1>
              <p className="expertiseIntro">
                Discover the conditions we specialize in, providing tailored care and compassionate support to guide you
                toward mental wellness.
              </p>
            </div>
          </div>
    
          <div className="row">
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="expertise-box text-center p-4 shadow-sm rounded bg-white">
                <Image src={'/images/adhd.png'} width={64} height={64} alt="ADHD Icon" className="mb-3"/>
                <h5>ADHD
                </h5>
                <p>
                  Helping individuals with ADHD manage focus, organization, and productivity.
                </p>
              </div>
            </div>
    
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="expertise-box text-center p-4 shadow-sm rounded bg-white">
              <Image src={'/images/anxiety.png'} width={64} height={64} alt="Anxiety Icon" className="mb-3"/>
                <h5>
                  Anxiety</h5>
                <p>
                  Providing strategies to reduce worry and enhance emotional resilience.
                </p>
              </div>
            </div>
    
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="expertise-box text-center p-4 shadow-sm rounded bg-white">
              <Image src={'/images/insomnia.png'} width={64} height={64} alt="Insomnia Icon" className="mb-3"/>
                <h5>
                  Insomnia</h5>
                <p>
                  Offering solutions to improve sleep patterns and restfulness.
                </p>
              </div>
            </div>
    
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="expertise-box text-center p-4 shadow-sm rounded bg-white">
              <Image src={'/images/ocd.png'} width={64} height={64} alt="OCD Icon" className="mb-3"/>
                <h5>OCD
                </h5>
                <p>
                  Supporting individuals to manage intrusive thoughts and compulsive behaviors.
                </p>
              </div>
            </div>
    
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="expertise-box text-center p-4 shadow-sm rounded bg-white">
              <Image src={'/images/depression.png'} width={64} height={64} alt="Depression Icon" className="mb-3"/>
                <h5>
                  Depression</h5>
                <p>
                  Helping you overcome feelings of sadness and regain joy in life.
                </p>
              </div>
            </div>
    
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="expertise-box text-center p-4 shadow-sm rounded bg-white">
              <Image src={'/images/ptsd.png'} width={64} height={64} alt="PTSD Icon" className="mb-3"/>
                <h5>PTSD
                </h5>
                <p>
                  Addressing trauma to help you reclaim control of your life.
                </p>
              </div>
            </div>
    
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="expertise-box text-center p-4 shadow-sm rounded bg-white">
                <Image src={'/images/bipolar.png'} width={64} height={64} alt="Bipolar Disorder Icon" className="mb-3"/>
                <h5>
                  Bipolar Disorder</h5>
                <p>
                  Offering tools to balance emotional highs and lows effectively.
                </p>
              </div>
            </div>
    
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="expertise-box text-center p-4 shadow-sm rounded bg-white">
                <Image src={'/images/child.png'} width={64} height={64} alt="Child & Adolescence Icon" className="mb-3"/>
                <h5>
                  Child & Adolescence</h5>
                <p>
                  Specialized care for young individuals navigating mental health challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

};

export default Expertise;