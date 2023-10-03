import banner from "../assets/1.jpg";
import Button from "../Components/Button"; 

const Home = () => {
    return ( 
        <section>
          <Hero 
           img={banner}/>
        </section>
     );
}
 
export default Home;


// eslint-disable-next-line react/prop-types
function Hero({img}) {
    return ( 
        <article className="hero">
         <div className="banner">
            <img src={img} alt="banner"></img>
                <div className="herotext">
                    <h4 className="text-xs">DELIVERING ENERGY SOLUTIONS</h4>
                    <h1 className="text-white text-5xl py-4">Invest in Oil/Gas and Solar Energy</h1>
                    <Button 
                      text='GET STARTED'/>
                </div>
         </div>
        </article>
     );
}