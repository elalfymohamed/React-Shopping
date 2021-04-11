import React from "react";
import Header from "../Header";

// image
import Image from "../../assets/cart/empty-state-cart.svg";

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
      </section>
    </>
  );
};

export default Cart;
