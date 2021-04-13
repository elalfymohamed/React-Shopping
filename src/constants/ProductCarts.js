import React from "react";
import FeatherIcon from "feather-icons-react";

const ProductCarts = () => {
  return (
    <div className="section-cart__product">
      <div className="product__cart__content">
        <div className="product__cart__content__image">
          <img src={} alt="" height="200" width="180" />
        </div>
        <div className="product__cart__content__compare">
          <span>{}</span>
          <h1>{}</h1>
        </div>
        <div className="product__cart__content__btn">
          <button type="button" className="btn" title="remove">
            <FeatherIcon icon="trash" />
          </button>
        </div>
      </div>
      <div className="product__cart__total__qty">
        <div className="product__cart__total">
          <span>$</span>
          <b>{}</b>
        </div>
        <div className="product__cart__content__qty">
          <input className="qty" type="number" min="1" placeholder="1" />
        </div>
      </div>
    </div>
  );
};

export default ProductCarts;
