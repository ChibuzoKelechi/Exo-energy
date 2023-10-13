/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const SideNav = ({ isOpen }) => {

    const sideNavStyle = {
        width: isOpen ? '250px' : '0'
    };


    return ( 
        <article className="sidenav" style={sideNavStyle}>
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
 
export default SideNav;