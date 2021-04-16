import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProductHeart from "./ProductHeart";

function Heart({ heart }) {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amount = 0;

    heart.forEach((item) => {
      amount += item.core;
    });
    setTotalAmount(amount);
  }, [heart, totalAmount, setTotalAmount]);

  if (heart.length === 0) {
    return (
      <section className="section-heart">
        <div className="section-heart__container">
          <div className="section-heart__container__empty-heart">
            <p>your heart is empty</p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <>
      <section className="section-heart">
        <div className="section-heart__shopping">
          <h1 className="title">Shopping Heart </h1>
          <p>(items {totalAmount})</p>
        </div>
        <div className="section-heart__product">
          <div className="section-heart__product__content">
            {heart.map((item) => (
              <ProductHeart key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    heart: state.shop.heart,
  };
};

Heart.propTypes = {
  heart: PropTypes.array,
};

export default connect(mapStateToProps)(Heart);
