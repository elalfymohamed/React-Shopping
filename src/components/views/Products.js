import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import {
  addToCart,
  loadCurrentItem,
  addToHeart,
  updateHeartData,
  updateCartData,
} from "../../redux/actions/actions";

const Products = ({
  id,
  section,
  product_name,
  new_product,
  price,
  img,
  start,
  offer,
  sale,
  core,
  addToCart,
  addToHeart,
  loadCurrentItem,
  productsData,
  updateHeartData,
  updateCartData,
  index,
}) => {
  return (
    <div className="product">
      <div className="product-content">
        <div className="product__image">
          {new_product && <span className="new label">{new_product}</span>}
          <Link
            to={`/product/detailing/${id}`}
            className="img"
            onClick={() => loadCurrentItem(productsData[index])}
          >
            <img src={img} alt={img} height="320" width="270" />
          </Link>
        </div>
        <div className="product__compare">
          <Link
            to="/"
            data-tooltip="Wishlist"
            onClick={() => addToHeart(id) && updateHeartData(id)}
          >
            <svg
              className={core ? "heart anim" : "heart"}
              width="29"
              height="29"
              viewBox="467 392 58 57"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group" fillRule="evenodd" transform="translate(467 392)">
                <path
                  d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                  id="heart"
                />
              </g>
            </svg>
          </Link>
          <Link
            to="/"
            data-tooltip="shopping-cart"
            onClick={() => addToCart(id) && updateCartData(id)}
          >
            <FeatherIcon icon={"shopping-cart"} />
          </Link>
        </div>
        <div className="content">
          <div className="category__title">
            <Link to="/" className="section">
              {section}
            </Link>
            <h5 className="product__name">
              <Link to="/product_detailing">{product_name}</Link>
            </h5>
          </div>
          <div className="price__ratting">
            {sale && (
              <div className="price__offer">
                <span className="oldPrice">${offer}</span>
              </div>
            )}
            <div className="price">
              <h5 className={sale ? "old line" : "old"}>${price}</h5>
              {sale && <span className="value">{sale}</span>}
            </div>
          </div>
          <div className={sale ? "ratting" : "ratting start"}>
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
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    addToHeart: (id) => dispatch(addToHeart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    updateHeartData: (id) => dispatch(updateHeartData(id)),
    updateCartData: (id) => dispatch(updateCartData(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    productsData: state.shop.productsData,
  };
};

Products.propTypes = {
  id: PropTypes.string.isRequired,
  section: PropTypes.string,
  product_name: PropTypes.string,
  new_product: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.string.isRequired,
  start: PropTypes.number,
  offer: PropTypes.string,
  sale: PropTypes.string,
  core: PropTypes.bool,
  addToCart: PropTypes.func,
  loadCurrentItem: PropTypes.func,
  productsData: PropTypes.array,
  addToHeart: PropTypes.func,
  updateHeartData: PropTypes.func,
  updateCartData: PropTypes.func,
  index: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
