import './App.css'
import Home from "./Pages/Home";
import Guide from './Pages/Guide';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {

  return (
    // <>
    //   <Home/>
    // </>

    <Router>
     <section>
      <nav className='sidenav'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Guide'>Guide</Link>
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

      <Switch>
       
        <Route path='/' exact>
         <Home/>
        </Route>

        <Route path='/Guide' exact>
         <Guide/>
        </Route>


      </Switch>
     </section>
    </Router>
  )
}

export default App
