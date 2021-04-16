import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { removeHeart, addToCart, updateHeart } from "../redux/actions/actions";

const ProductHeart = ({
  id,
  section,
  product_name,
  price,
  img,
  start,
  removeHeart,
  addToCart,
  updateHeart,
}) => {
  return (
    <div className="product">
      <div className="product__content">
        <div className="product__image">
          <Link to="/">
            <img src={img} alt={product_name} height="200" width="180" />
          </Link>
        </div>
        <div className="product__compare">
          <span>{section}</span>
          <h1>{product_name}</h1>
          <div className="ratting">
            <span>{start}</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="oneStar"
            >
              <path
                d="M11.7519 5.34021L9.33396 7.42268C9.19635 7.54639 9.11772 7.75258 9.17669 7.93814L9.90404 11.0722C10.0023 11.5876 9.64848 12 9.23567 12C9.11772 12 8.98011 11.9588 8.86217 11.8763L6.22801 10.1649C6.07075 10.0619 5.87417 10.0619 5.7169 10.1649L3.1024 11.8557C2.98446 11.9381 2.84685 11.9794 2.7289 11.9794C2.31609 11.9794 1.92293 11.567 2.06053 11.0515L2.78788 7.91753C2.82719 7.73196 2.76822 7.52577 2.63061 7.40206L0.252007 5.34021C-0.23944 4.90722 0.0357703 4.06186 0.664823 4.02062L3.75111 3.79381C3.92803 3.7732 4.0853 3.64948 4.16393 3.48454L5.3434 0.474227C5.46135 0.164949 5.73656 0 6.01177 0C6.28698 0 6.56219 0.164949 6.68014 0.474227L7.85961 3.48454C7.93825 3.6701 8.09551 3.79381 8.27243 3.79381L11.3587 4.02062C11.9485 4.06186 12.2433 4.90722 11.7519 5.34021Z"
                fill="#F2994A"
              ></path>
            </svg>
          </div>
        </div>
        <div className="product__content__btn">
          <button
            type="button"
            className="btn"
            title="remove"
            onClick={() => removeHeart(id) && updateHeart(id)}
          >
            <FeatherIcon icon="trash" />
          </button>
        </div>
      </div>
      <div className="product__total">
        <div className="product__heart__total">
          <span>$</span>
          <b>{price}</b>
        </div>
        <div className="product__content__cart">
          <button
            type="button"
            data-tooltip="shopping-cart"
            onClick={() => addToCart(id)}
          >
            <FeatherIcon icon={"shopping-cart"} />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeHeart: (id) => dispatch(removeHeart(id)),
    addToCart: (id) => dispatch(addToCart(id)),
    updateHeart: (id) => dispatch(updateHeart(id)),
  };
};

ProductHeart.propTypes = {
  id: PropTypes.string.isRequired,
  section: PropTypes.string,
  product_name: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.string.isRequired,
  start: PropTypes.number,
  removeHeart: PropTypes.func,
  addToCart: PropTypes.func,
  updateHeart: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(ProductHeart);
