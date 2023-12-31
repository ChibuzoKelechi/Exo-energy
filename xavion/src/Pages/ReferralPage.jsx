import GetStarted from "../Components/BlueCard";
import Footer from "../Components/Footer";
import HeroBanner from "../Components/HeroBanner";
import NavBar from "../Components/NavBar";

const ReferralPage = () => {
    return ( 
        <section>
          <NavBar/>
            <HeroBanner
              Herotext='Referral Program'
            />
             <ReferralInvite/>
             <GetStarted/>
            <Footer/>
        </section>
     );
}
 
export default ReferralPage;


function ReferralInvite() {
    return ( 
        <article className="my-12 px-8">
            <h1 className="text-xl py-3 font-semibold">Invite Someone & Earn Profit</h1>
            <p className="text-sm tracking-wide">
             Refer your friends, family and colleagues to Xavion Energy using your unique referral link. Once they create an account and make their first investment (payment) in any project, we will add 10% of what they invest to your account balance. You can invite an unlimited number of people
            </p>
        </article>
     );
}
