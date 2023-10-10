/* eslint-disable react/prop-types */
import { FaBoltLightning, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <section className="bg-[#020513]  text-neutral-100">
            <article className="py-20 px-10">
              <div className="flex justify-between">
                <h1 className="text-3xl font-bold mr-5">Powering lives and the future of Electricity</h1>
                <FaBoltLightning style={{fontSize:'40px', paddingTop:'10px'}}/>
              </div>

              <article className="lg:flex justify-evenly"> 
                <ContactBit
                 title='call us'
                 info='+44 7459 485303'
                />

                <ContactBit 
                 title='email us'
                 info='support@xavionenergy.net'
                />

                <ContactBit
                 title='office address'
                 info='Frog Lane, Wigan WN1 1AX, United Kingdom'
                />

              </article>
            </article>

            <Copywright/>

        </section>
    );
}
 
export default Footer;

function Copywright() {
    return ( 
       <article className="bg-black text-neutral-100 p-10 text-center">

        <h3>Copyright © 2023 Xavion Energy, LLC. All Rights Reserved.</h3>

        <div className="socialicons my-5 w-1/9 mx-auto flex justify-evenly p-5">
            <FaFacebook/>
            <FaInstagram/>
            <FaLinkedinIn/>
        </div>

        <div className="w-1/7 mx-auto flex justify-evenly">
            <h4 className="text-neutral-300">About</h4>
            <h4 className="text-neutral-300">Legal Terms</h4>
            <h4 className="text-neutral-300">Privacy Policy</h4>
        </div>
       </article>
     );
}

function ContactBit({title, info}) {
    return ( 
        <div className="my-10">
            <h2 className="uppercase">{title}</h2>
            <h1>{info}</h1>
        </div>
     );
}