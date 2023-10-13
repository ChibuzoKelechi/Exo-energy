import { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import Button from "./Button";
import { FaSearch } from 'react-icons/fa'
import xavionLogo from "../assets/Xavion-Web-Logo-2.png";
import SideNav from "./SideNav";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

    const toggleSideNav = () => {
        alert('click');
        setIsOpen(!isOpen);
    };


    return ( 
        <nav className="bg-white flex justify-between h-20 p-4 nav shadow-lg">
            <div>
               <img src={xavionLogo} alt="xavioenergylogo" className="w-48" /> 
            </div>

            <div className="flex iconbox">
              <FaSearch style={{color:"limegreen", fontSize:'30px', cursor:'pointer'}}/>
              <Button 
               onClick={toggleSideNav}
               className='bg-black text-black'
              >
                {isOpen 
                 ? <FaX  style={{color:"limegreen", fontSize:'30px', cursor:'pointer'}}/> 
                 : <FaBars  style={{color:"limegreen", fontSize:'30px'}}/>}
              </Button>
            </div>
            
            <SideNav/>

        </nav>
     );
}
 
export default NavBar;