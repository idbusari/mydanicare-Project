import Link from "next/link";
import Image from "next/image";
import "./Footer.scss";

export const Footer = () => {
    return (
      <footer className="text-light bgfooter py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <Link href="#" className="d-block mb-3">
              <Image
                src={"/images/footerLogo.webp"}
                layout="intrinsic"
                width={159}
                height={32}
                alt="DaniCare Logo" 
                style={{color:"transparent"}}
              />
            </Link>
            <p>
              At DaniCare Psychiatry, we are dedicated to providing personalized, compassionate mental health care to help you achieve
              lasting well-being.
            </p>
            <p><span className="intro">Service Address: </span> <br/> Laredo Medical Center <br/> 
            1700 E Saunders Street <br/> 
            Ste B475 <br/>
            Laredo, TX 78041.</p>
          </div>
    
          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <h5 className="mb-3">Our Solutions</h5>
            <ul className="list-unstyled">
              <li><Link href="/we-accept-insurance">Insurance</Link></li>
              <li><Link href="/psychiatry-treatment">Treatment</Link></li>
              <li><Link href="/psychiatrist">Our psychiatrist</Link></li>
              <li><Link href="/become-a-patient">Patients</Link></li>
            </ul>
            <p>
              <span className="intro">Other Locations:</span> <br/> Irving <br/> Atlanta <br/>
            </p>

            <div className="col-6 col-md-3 col-lg-2 mb-4">
            <h5 className="mb-3">Our Solutions</h5>
            <ul className="list-unstyled">
              <li><Link href="/we-accept-insurance">Insurance</Link></li>
              <li><Link href="/psychiatry-treatment">Treatment</Link></li>
              <li><Link href="/psychiatrist">Our psychiatrist</Link></li>
              <li><Link href="/become-a-patient">Patients</Link></li>
            </ul>
            <p>
              <span className="intro">Other Locations:</span> <br/> Irving <br/> Atlanta <br/>
            </p>
          </div>
          </div>
    
          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <h5 className="mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li><Link href="/our-faqs">FAQs</Link></li>
              <li><Link href="/psychiatry-treatment">Anxiety Test</Link></li>
              <li><Link href="/psychiatry-treatment">Depression Test</Link></li>
              <li><Link href="/psychiatry-treatment">ADHD Test</Link></li>
            </ul>
            <p>
              <span className="intro">States We Serve:</span> <br/> New Jersey <br/> California <br/>
            </p>
          </div>
    
          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><Link href="/psychiatry-service-provider">About Us</Link></li>
              <li><Link href="/become-a-patient">Ask for Help</Link></li>
              <li><Link href="/psychiatry-care-registration">Become a Patient</Link></li>
            </ul> 
          </div>
    
          <div className="col-6 col-md-3 col-lg-3 mb-4">
            <h5 className="mb-3">Connect</h5>
            <ul className="list-unstyled">
              <li><Link href="mailto:hello@mydanicare.com" style={{ color: "#ffcc04" }}>hello@mydanicare.com</Link></li>
              <li><Link href="#">Terms of Use</Link></li>
              <li><Link href="/privacy-policy">Privacy</Link></li>
            </ul>
          </div>
          
          <div className="">
            <div className="d-flex text-center gap-3">
              <Link href="https://www.instagram.com/danicarepsychiatry/" target="_blank" aria-label="Instagram">
                <Image
                  src="/images/instagram.svg"
                  alt="Instagram logo"
                  width={24}
                  height={24}
                  priority={false}
                />
              </Link>
              <Link href="https://www.facebook.com/danicarepsychiatry" target="_blank" aria-label="Facebook">
                <Image
                  src="/images/facebook.svg"
                  alt="Facebook logo"
                  width={24}
                  height={24}
                  priority={false}
                />
              </Link>
              <Link href="#" target="_blank" aria-label="Twitter">
                <Image
                  src="/images/twitter.svg"
                  alt="Twitter logo"
                  width={24}
                  height={24}
                  priority={false}
                />
              </Link>
              <Link href="#" target="_blank" aria-label="LinkedIn">
                <Image
                  src="/images/linkedin.svg"
                  alt="LinkedIn logo"
                  width={24}
                  height={24}
                  priority={false}
                />
              </Link>
              <Link href="#" target="_blank" aria-label="YouTube">
                <Image
                  src="/images/youtube.svg"
                  alt="YouTube logo"
                  width={24}
                  height={24}
                  priority={false}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
};
