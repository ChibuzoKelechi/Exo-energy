// import { useState } from "react";
import './sidenav.css'
import { FaBars, FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import Button from "./Button";
import { FaSearch } from 'react-icons/fa'
import xavionLogo from "../assets/Xavion-Web-Logo-2.png";
// import SideNav from "./SideNav";

const NavBar = () => {

  // const [isOpen, setIsOpen] = useState(false);

  //   const toggleSideNav = () => {
  //       alert('click');
  //       setIsOpen(!isOpen);
  //   };

  function openNav() {
    document.getElementById('sidenav').style.width = '40%'
  }


    return ( 
        <nav className="bg-white flex justify-between h-20 p-4 nav shadow-lg">
            <div>
               <img src={xavionLogo} alt="xavioenergylogo" className="w-48" /> 
            </div>

            <div className="flex iconbox">
              <FaSearch style={{color:"limegreen", fontSize:'30px', cursor:'pointer'}}/>
              <FaBars  style={{color:"black", fontSize:'30px', cursor:'pointer'}} onClick={openNav}/>

              {/* <Button 
               onClick={toggleSideNav}
               className='bg-black text-black'
              >
                {isOpen 
                 ? <FaX  style={{color:"limegreen", fontSize:'30px', cursor:'pointer'}}/> 
                 : <FaBars  style={{color:"limegreen", fontSize:'30px'}}/>}
              </Button> */}
              {/* <Button 
               className='bg-white p-2 '
              >
              </Button> */}


            </div>
            
            <SideNav/>

        </nav>
     );
}
 
export default NavBar;


const SideNav = () => {

  // const sideNavStyle = {
  //     width: isOpen ? '250px' : '0'
  // };

  function closeNav() {
    document.getElementById('sidenav').style.width = '0'
  }




  return ( 
      <article className="sidenav" id="sidenav">
        <h1 onClick={closeNav} className="cursor-pointer">
          <FaX/>
        </h1>
         <nav>
         <ul>
           <li>
             <Link to='/'>Home</Link>
           </li>
           <li>
             <Link to='/guide'>Guide</Link>
           </li>
           {/* <li>
             <Link></Link>
           </li>
           <li>
             <Link></Link>
           </li>
           <li>
             <Link></Link>
           </li> */}
         </ul>
        </nav>
      </article>
   );
}
