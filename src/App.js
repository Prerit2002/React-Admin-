import logo from './logo.svg'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Mobview from './components/Sidebar/Mobview/index'
import Home from './components/Home'
import Employees from './components/Employees';
import Commisions from './components/Commisions'
import User from './components/User'
import Leads from './components/Leads' 
import Mobbutton from './components/Mobsidebar'
import Search from './components/Search'
import Settings from './components/Settings'

import './App.css';

function App() {
  return (
    <div  >
      <Router>
        <Navbar />
        <div className="p-0 m-0 flex ">
        <Mobview />
            
            <Switch>
              
            
              <div className="container flex-shrink  bg-gray-600">
              <Mobbutton />
              <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/employees">
              <Employees />
            </Route>
            <Route exact path="/commision">
              <Commisions />
            </Route>
            <Route exact path="/employee/:id">
              <User />
            </Route>
            <Route exact path="/leads">
              <Leads />
            </Route>
            <Route exact path="/employees/:name">
              <Search />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>


              </div>
           

            </Switch>
            
            

        </div>

      </Router>
    </div>
  );
}

export default App;
