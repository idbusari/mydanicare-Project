import HeroSection from "../components/HomeComp/HeroSection";
import InsurancePartner from "../components/HomeComp/InsurancePartner";
import AboutIntro from "../components/HomeComp/AboutIntro";
import Expertise from "../components/HomeComp/Expertise";
import WhatWeDo from "../components/HomeComp/WhatWeDo";
import HowItWorks from "../components/HomeComp/HowItWorks";
import PartnerSection from "../components/HomeComp/PartnerSection";
import FaqSection from "../components/HomeComp/FaqSection";
import CrisisSection from "../components/HomeComp/CrisisSection";
import ContactUs from "../components/HomeComp/ContactUs";
import ReviewSection from "../components/HomeComp/ReviewSection";




export default function Home() {
  return (
    <>
    <HeroSection/>
    <InsurancePartner/>
    <AboutIntro/>
    <Expertise/>
    <WhatWeDo/>
    <HowItWorks/>
    <PartnerSection/>
    <ReviewSection/>
    <FaqSection/>
    <CrisisSection/>
    <ContactUs/>
    </>
  );
}
