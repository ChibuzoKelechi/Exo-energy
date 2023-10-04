import { FaBars } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa'
import xavionLogo from "../assets/Xavion-Web-Logo-2.png";

const NavBar = () => {
    return ( 
        <nav className="bg-white flex justify-between h-20 p-4 nav">
            <div>
               <img src={xavionLogo} alt="xavioenergylogo" className="w-40" /> 
            </div>

            <div className="flex iconbox">
              <FaSearch style={{color:"limegreen", fontSize:'30px'}}/>
                <FaBars style={{color:"black", fontSize:'30px'}}/>
            </div>
        </nav>
     );
}
 
export default NavBar;