import GetStarted from "../Components/BlueCard";
import Footer from "../Components/Footer";
import HeroBanner from "../Components/HeroBanner";
import Process from "../Components/Process";

const Guide = () => {
    return (  
        <section className="pt-10">
            <HeroBanner
             Herotext='How it Works'
            />
            <Process/>
            <GetStarted/>
            <Footer/>
        </section>
    );
}
 
export default Guide;