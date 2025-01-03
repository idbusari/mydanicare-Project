import Image from "next/image";
import "./FooterBottom.scss";

export const FooterBottom = () => {
    return (   
        <div className="row mt-4 bg-white">
          <div className="col-12 text-center">
          <Image
                src={"/images/hipaa.jpg"}
                layout="intrinsic"
                width={159}
                height={32}
                
                alt="DaniCare Logo" 
                style={{color:"transparent"}}
              />
            <p style={{ color: "#333" }}>
            &copy; {new Date().getFullYear()} DaniCare. All rights reserved.
            </p>
          </div>
        </div>
    
    );
    }