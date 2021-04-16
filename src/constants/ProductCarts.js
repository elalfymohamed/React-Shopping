import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FeatherIcon from "feather-icons-react";
import { removeCart, adjustQty, updateCart } from "../redux/actions/actions";

const ProductCarts = ({
  id,
  section,
  product_name,
  price,
  img,
  offer,
  qty,
  removeCart,
  adjustQty,
  updateCart,
}) => {
  const [input, setInput] = useState(qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(id, e.target.value);
  };
  return (
    <div className="section-cart__product">
      <div className="product__cart__content">
        <div className="product__cart__content__image">
          <img src={img} alt={product_name} height="200" width="180" />
        </div>
        <div className="product__cart__content__compare">
          <span>{section}</span>
          <h1>{product_name}</h1>
        </div>
        <div className="product__cart__content__btn">
          <button
            type="button"
            className="btn"
            title="remove"
            onClick={() => removeCart(id) && updateCart(id)}
          >
            <FeatherIcon icon="trash" />
          </button>
        </div>
      </div>
      <div className="product__cart__total__qty">
        <div className="product__cart__total">
          <span>$</span>
          {offer ? <b>{offer}</b> : <b>{price}</b>}
        </div>
        <div className="product__cart__content__qty">
          <input
            className="qty"
            type="number"
            min="1"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeCart: (id) => dispatch(removeCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    updateCart: (id) => dispatch(updateCart(id)),
  };
};

ProductCarts.propTypes = {
  id: PropTypes.string.isRequired,
  section: PropTypes.string,
  product_name: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.string.isRequired,
  offer: PropTypes.string,
  qty: PropTypes.number,
  removeCart: PropTypes.func,
  adjustQty: PropTypes.func,
  updateCart: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(ProductCarts);
