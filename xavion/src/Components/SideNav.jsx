/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaX } from "react-icons/fa6";


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
           <nav className="uppercase">
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
            {/* <li>
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
 
export default SideNav;