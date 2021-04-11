import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import index from "./components/index";
import Cart from "./components/constants/Cart";
import Heart from "./components/constants/Heart";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={index} />
        <Route path="/cart" component={Cart} />
        <Route path="/heart" component={Heart} />
      </Switch>
    </Router>
  );
}

export default App;
