import Image from "next/image";
import "./FooterBottom.scss";

export const FooterBottom = () => {
    return (
        <div className="row mt-4 bg-white">
          <div className="col-12 text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
              <Image
                src={"/images/hipaa.jpg"}
                width={78}
                height={50}
                alt="HIPAA Compliant"
                style={{ objectFit: 'contain' }}
              />
              <Image
                src={"/images/psychverify.png"}
                width={78}
                height={50}
                alt="Psychology Today Verified"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p style={{ color: "#333", margin: 0 }}>
            &copy; {new Date().getFullYear()} DaniCare Psychiatry. All rights reserved.
            </p>
          </div>
        </div>
    );
    }