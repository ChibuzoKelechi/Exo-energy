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
    document.getElementById('sidenav').style.width = '80%'
    document.getElementById('home').classList.toggle = 'dark'
  }


    return ( 
        <nav className="bg-white flex justify-between h-20 p-4 nav shadow-lg">
            <div>
               <img src={xavionLogo} alt="xavioenergylogo" className="w-48" /> 
            </div>

            <div className='lg:w-1/2'>
              <LargeScreenNav/>
            </div>

            <div className="flex iconbox">
              <FaSearch style={{color:"limegreen", fontSize:'30px', cursor:'pointer'}}/>
              <FaBars style={{color:"black", fontSize:'30px', cursor:'pointer'}} onClick={openNav} className='lg:hidden'/>

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
        <h1 onClick={closeNav} className="cursor-pointer p-2">
          <FaX/>
        </h1>
         <nav className='uppercase text-sm'>
         <ul>
           <li>
             <Link to='/'>Home</Link>
           </li>
           <li>
             <Link to='/guide'>Guide</Link>
           </li>
           <li>
             <Link to='/why-invest-in-energy'>Why invest in energy</Link>
           </li>
           <li>
             <Link to='/investment-projects'>investment projects</Link>
           </li>
           <li>
             <Link to='/referral-program'>referral program</Link>
           </li>
           <li>
             <Link to='/terms'>Terms </Link>
           </li>
         </ul>
        </nav>
      </article>
   );
}


function LargeScreenNav() {
  return ( 
    <div className='lg:flex sm:hidden md:hidden desknav'>
      <ul className='lg:flex uppercase justify-evenly'>
         <li>
           <Link to='/'>Home</Link>
         </li>

           <li>
             <Link to='/guide'>Guide</Link>
           </li>

           <li>
             <Link to='/why-invest-in-energy'>Why invest</Link>
           </li>

           <li>
             <Link to='/investment-projects'> projects</Link>
           </li>

           <li>
             <Link to='/referral-program'>referral </Link>
           </li>

           <li>
             <Link to='/terms'>Terms </Link>
           </li>

      </ul>
    </div>
   );
}
