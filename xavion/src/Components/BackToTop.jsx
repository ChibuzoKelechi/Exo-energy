import { FaChevronUp } from "react-icons/fa6";

const BackToTop = () => {
    return ( 
        <div className="top-button grid place-items-center">
           <a href="#top">
            <FaChevronUp style={{color:'white', fontSize:'30px'}}/>
           </a> 
        </div>
     );
}
 
export default BackToTop;