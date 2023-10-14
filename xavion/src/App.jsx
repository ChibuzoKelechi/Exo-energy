import './App.css'
import Router from './Router'
// import AppRouter from './Router'
// import Home from "./Pages/Home";
// import Guide from './Pages/Guide';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import NavBar from './Components/NavBar';
function App() {

  return (
    <>     
      <Router/>
    </>

    // Wrong router setup
    // <Router>
    //  <section>
    //   <NavBar/>
    //   <nav className='sidenav'>
    //     <ul>
    //       <li>
    //         <Link to='/'>Home</Link>
    //       </li>
    //       <li>
    //         <Link to='/Guide'>Guide</Link>
    //       </li>
    //       {/* <li>
    //         <Link></Link>
    //       </li>
    //       <li>
    //         <Link></Link>
    //       </li>
    //       <li>
    //         <Link></Link>
    //       </li> */}
    //     </ul>
    //   </nav>

    //   <Switch>
       
    //     <Route path='/' exact>
    //      <Home/>
    //     </Route>

    //     <Route path='/Guide'>
    //      <Guide/>
    //     </Route>


    //   </Switch>
    //  </section>
    // </Router>
  )
}

export default App
