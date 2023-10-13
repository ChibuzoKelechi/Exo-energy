/* eslint-disable react/prop-types */
import img from '../assets/7.webp'

const HeroBanner = ({Herotext}) => {
    return ( 
        <article className="hero" id="top">
        <div className="banner">
           <img src={img} alt="banner"></img>
               <div className="herotext">
                   <h1 className="text-white text-5xl py-4 my-2">{Herotext}</h1>
                
               </div>
        </div>
       </article>
     );
}
 
export default HeroBanner;