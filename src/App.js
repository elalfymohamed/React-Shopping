import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import index from "./components/index";
import Cart from "./constants/Cart";
import Heart from "./constants/Heart";
import ProductDetailing from "./components/views/ProductDetailing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={index} />
        <Route path="/cart" component={Cart} />
        <Route path="/heart" component={Heart} />
        <Route path="/product_detailing" component={ProductDetailing} />
      </Switch>
    </Router>
  );
}

export default App;
