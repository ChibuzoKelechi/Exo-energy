import { FaArrowUp } from "react-icons/fa6";

const BackToTop = () => {
    return ( 
        <div className="top-button">
           <a href="#top"><FaArrowUp style={{color:'white', fontSize:'30px'}}/></a> 
        </div>
     );
}
 
export default BackToTop;