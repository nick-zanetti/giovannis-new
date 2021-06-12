import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavbarComponent from "./Navbar";
import Home from "./Home";
import Menu from "./Menu";
import Order from "./Order";
import Checkout from "./Checkout";
import Success from "./Success";

function App() {
  return (
    
    <Router>
      <header>
        <NavbarComponent />
      </header>
    <div>
      
     
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        
        </Switch>

    </div>
    </Router>
  );
}

export default App;
