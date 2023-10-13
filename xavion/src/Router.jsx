import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home'
import Guide from  './Pages/Guide'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/guide",
    element: <Guide/>,
  }
//   {
//     path: "/about",
//     element: <About />,
//   }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}




// import Home from "./Pages/Home";
// import Guide from './Pages/Guide';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import NavBar from './Components/NavBar';

// const AppRouter = () => {
//     return ( 
//         <section>
//             <Router>
//       <section>
//        <NavBar/>
//        <nav className='sidenav'>
//          <ul>
//            <li>
//              <Link to='/'>Home</Link>
//            </li>
//            <li>
//              <Link to='/Guide'>Guide</Link>
//            </li>
//            {/* <li>
//              <Link></Link>
//            </li>
//            <li>
//              <Link></Link>
//            </li>
//            <li>
//              <Link></Link>
//            </li> */}
//          </ul>
//        </nav>
//        <Switch>
 
//          <Route path='/' exact>
//           <Home/>
//          </Route>
//          <Route path='/Guide'>
//           <Guide/>
//          </Route>

//        </Switch>
//      </section>
//      </Router>
//         </section>
//      );
// }

 
// export default AppRouter;


