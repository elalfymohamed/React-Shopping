import React from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const Header = () => {
  return (
    <header className="header-section">
      <div className="header-section__center">
        <Link to="/">
          <h2 className="header-section__center__title">E-Shopping</h2>
        </Link>
        <div className="header-section__shop__links">
          <Link to="/heart" className="shop__links__wishlist">
            <FeatherIcon icon={"heart"} />
            {/* <span className="number">{3}</span> */}
          </Link>
          <Link to="/cart" className="shop__links__cart">
            <FeatherIcon icon={"shopping-cart"} />
            {/* <span className="number">{5}</span> */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
