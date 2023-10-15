import GetStarted from "../Components/BlueCard";
import Footer from "../Components/Footer";
import HeroBanner from "../Components/HeroBanner";
import NavBar from "../Components/NavBar";
import ProjectPlans from "../Components/ProjectPlans";

const Projects = () => {
    return ( 
        <section>
            <NavBar/>
            <HeroBanner
              Herotext='Investment Projects'
            />
            <ProjectPlans/>
            <GetStarted/>
            <Footer/>

        </section>
     );
}
 
export default Projects;