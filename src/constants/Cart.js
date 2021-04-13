import React from "react";
// import FeatherIcon from "feather-icons-react";
import Header from "../components/Header";
// import ProductCarts from "./ProductCarts";

// image
import Image from "../assets/cart/empty-state-cart.svg";

const Cart = () => {
  return (
    <>
      <Header />

      <section className="section-cart">
        <div className="section-cart__container">
          <div className="section-cart__container__empty">
            <img src={Image} alt="your cart is empty" />
            <p>Your cart is empty</p>
          </div>
        </div>

        {/* <div className="section-cart-shopping">
          <div className="container">
            <div className="section-cart__shopping">
              <string className="title">Shopping cart </string>
              <p>(items {})</p>
            </div>
            <ProductCarts />
          </div>
          <div className="section-cart__item">
            <div className="section-cart__item__content">
              <h2>Order summary</h2>
              <div className="item__content__items">
                <div className="content__items">
                  <span className="item">Subtotal</span>
                  <span className="items">(items {})</span>
                </div>
                <div className="total">${}</div>
              </div>
              <div className="item__content__total">
                <div className="content__total">Total</div>
                <div className="content__totals">${}</div>
              </div>
              <div className="item__content__btn">
                <button className="btn" type="button">
                  <span>Checkout</span>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Cart;
