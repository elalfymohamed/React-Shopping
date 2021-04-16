import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductCarts from "./ProductCarts";

// image
import Image from "../assets/cart/empty-state-cart.svg";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amount = 0;
    let price = 0;

    cart.forEach((item) => {
      amount += item.qty;

      if (item.offer) {
        price += item.qty * item.offer;
      } else {
        price += item.qty * item.price;
      }
    });
    price = parseFloat(price.toFixed(2));
    setTotalPrice(price);
    setTotalAmount(amount);
  }, [cart, totalPrice, totalAmount, setTotalAmount, setTotalPrice]);

  if (cart.length === 0) {
    return (
      <>
        <section className="section-cart">
          <div className="section-cart__container">
            <div className="section-cart__container__empty">
              <img src={Image} alt="your cart is empty" />
              <p>Your cart is empty</p>
            </div>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <section className="section-cart">
        <div className="section-cart-shopping">
          <div className="container">
            <div className="section-cart__shopping">
              <h1 className="title">Shopping cart </h1>
              <p>(items {totalAmount})</p>
            </div>
            {cart.map((item) => (
              <ProductCarts key={item.id} {...item} />
            ))}
          </div>
          <div className="section-cart__item">
            <div className="section-cart__item__content">
              <h2>Order summary</h2>
              <div className="item__content__items">
                <div className="content__items">
                  <span className="item">Subtotal</span>
                  <span className="items">(items {totalAmount})</span>
                </div>
                <div className="total">${totalPrice}</div>
              </div>
              <div className="item__content__total">
                <div className="content__total">Total</div>
                <div className="content__totals">${totalPrice}</div>
              </div>
              <div className="item__content__btn">
                <button className="btn" type="button">
                  <span>Checkout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

Cart.propTypes = {
  cart: PropTypes.array,
};

export default connect(mapStateToProps)(Cart);
