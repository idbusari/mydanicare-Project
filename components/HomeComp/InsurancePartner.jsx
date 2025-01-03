import Link from 'next/link';
import './InsurancePartner.scss';
import Image from 'next/image';

const InsurancePartner = () => {
    return (
            <section id="insurancePartner" className="py-5 bg-light">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-12 col-lg-4 mb-3 mb-sm-5 my-lg-auto text-center text-lg-left">
                                    <h4 className="insuranceIntro mb-1">We accept all major insurance.</h4> 
                                    <Link href="/insurance/"
                                        className="btn-arrow pt-0 pl-lg-0" title="Check your plan">Check your plan</Link>

                                </div>

                                <div className="col-sm-12 col-lg-8 d-flex flex-row flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center my-auto text-center">
              <Image alt="Aetna logo"
                 src={'/images/aetna.png'} width={200} height={60}/>
              <Image alt="Cigna logo"
                 src={'/images/cigna.png'} width={200} height={60}/>
              <div className="flex-break d-sm-none"></div> 

<Image alt="United Healthcare logo"
               src={'/images/united.png'} width={200} height={60}/>
              <Image alt="Anthem logo"
                src={'/images/anthem.png'} width={200} height={60}/>
                
                <Image alt="Medicaid logo"
                src={'/images/medicaid.svg'} width={200} height={60}/>
            
              <div className="flex-break d-sm-none"></div>
              <div>
                <h5 className="mb-0" style={{color:'#99a0b2'}}>and more</h5>
              </div>
            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      

    );
};

export default InsurancePartner;