import Link from 'next/link';
import './HeroSection.scss';

const HeroSection = () => {
    return (
      <div className="hero-section">
     <video
    autoPlay
    loop
    muted
    playsInline
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
  >
    <source src="/videos/hero-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12 text-center text-md-start">
            <div className="hero-content">
              <h2 className="mb-4">
                Transformative care for mental health, including anxiety, depression, and more.
              </h2>
              <div>
              <p className="lead p-4 bg-transparent sec-dark">
                Providing compassionate and effective support to help you overcome mental health
                challenges and lead a healthier, happier life.
              </p>
              </div>
              <div className="hero-btn">
                <Link href="/patients" className="btn btn-yellow btn-lg me-2 mb-2 mb-md-0">Get Started</Link>
                <Link href="/about" className="btn btn-outline-dark btn-lg bg-light">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      
    );

};

export default HeroSection;