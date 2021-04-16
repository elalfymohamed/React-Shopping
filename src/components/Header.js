import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const Header = ({ cart, heart }) => {
  const [cartCount, setCartCount] = useState(0);
  const [heartCount, setHeartCount] = useState(0);

  useEffect(() => {
    let cartCount = 0;
    let heartCount = 0;

    heart.forEach((item) => {
      heartCount += item.core;
    });

    cart.forEach((item) => {
      cartCount += item.qty;
    });
    setCartCount(cartCount);
    setHeartCount(heartCount);
  }, [cart, heart, cartCount, heartCount]);
  return (
    <header className="header-section">
      <div className="header-section__center">
        <Link to="/">
          <h2 className="header-section__center__title">E-Shopping</h2>
        </Link>
        <div className="header-section__shop__links">
          <Link to="/heart" className="shop__links__wishlist">
            <FeatherIcon icon={"heart"} />
            {heartCount > 0 && <span className="number">{heartCount}</span>}
          </Link>
          <Link to="/cart" className="shop__links__cart">
            <FeatherIcon icon={"shopping-cart"} />
            {cartCount > 0 && <span className="number">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    heart: state.shop.heart,
  };
};

Header.propTypes = {
  cart: PropTypes.array,
  heart: PropTypes.array,
};

export default connect(mapStateToProps)(Header);
