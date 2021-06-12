import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./components/Header";
import index from "./components/index";
import Cart from "./constants/Cart";
import Heart from "./constants/Heart";
import ProductDetailing from "./components/views/ProductDetailing";

function App({ currentItem }) {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={index} />
        <Route path="/cart" component={Cart} />
        <Route path="/heart" component={Heart} />

        {!currentItem ? (
          <Redirect to="/" />
        ) : (
          <Route path="/product/detailing/:id" component={ProductDetailing} />
        )}
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

App.propTypes = {
  currentItem: PropTypes.object,
};

export default connect(mapStateToProps)(App);
