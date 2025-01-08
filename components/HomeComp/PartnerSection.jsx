import Link from "next/link";
import Image from "next/image";
import "./PartnerSection.scss";

const PartnerSection = () => {
    return (
        <section className="partners-section bg-gray ">
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="d-none d-lg-block col-lg-6 pr-5 py-4 my-auto text-center ">
          <Image alt="Our Psychiatrist"
            src={"/images/providers-map.png"} layout="intrinsic" width={712} height={350}/>
        </div>

        <div className="col-lg-6 text-center text-lg-left py-2 py-sm-4">
          <p className="subheader-caps-medium text-sapphire-light mb-1">Our Psychiatrist</p>
          <h2 className="text-sapphire-medium mb-4">Exceptional Psychiatric Care <br/>
            Tailored to You</h2>
          <p className="text-large mb-5">Connect with our board certified Psychiatrist Professionals dedicated to your well-being. Our network guarantees top-tier mental health care designed for you.</p>

          <Image alt="Our Psychiatrist" className="partner-image d-lg-none mb-4"
            src={"/images/providers-map.png"} layout="intrinsic" width={712} height={350}/>

          <p className="mb-0"> <Link href="/become-a-patient" className="btn-primary" title="Get Started">Get Started</Link></p>

        </div>
      </div>
    </div>
  </section>

    );
};

export default PartnerSection;