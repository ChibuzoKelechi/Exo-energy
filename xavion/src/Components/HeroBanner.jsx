/* eslint-disable react/prop-types */
import img from '../assets/7.webp'

const HeroBanner = ({Herotext}) => {
    return ( 
        <article className="hero " id="top">
         <div className="banner flex justify-center ">
           <img src={img} alt="banner"/>
               <div className="herotext flex items-center">
                   <h1 className="text-white text-3xl py-4 my-2 font-semibold">{Herotext}</h1>
                
               </div>
        </div>
       </article>
     );
}
 
export default HeroBanner;