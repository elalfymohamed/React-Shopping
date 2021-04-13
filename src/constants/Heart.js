import React from "react";
import Header from "../components/Header";
import ProductHeart from "./ProductHeart";

function Heart() {
  return (
    <>
      <Header />
      <section className="section-heart">
        <div className="section-heart__container">
          <div className="section-heart__container__empty-heart">
            <p>your heart is empty</p>
          </div>
        </div>
        {/* <div className="section-heart__product">
          <div className="section-heart__product__content">
            <ProductHeart />
            
          </div>
        </div> */}
      </section>
    </>
  );
}

export default Heart;
