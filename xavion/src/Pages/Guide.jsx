import GetStarted from "../Components/BlueCard";
import Footer from "../Components/Footer";
import HeroBanner from "../Components/HeroBanner";
import NavBar from "../Components/NavBar";
import Process from "../Components/Process";

const Guide = () => {
    return (  
        <section className="pt-10">
            <NavBar/>
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