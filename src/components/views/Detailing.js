import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProductDetailing from "./ProductDetailing copy";

const Detailing = ({ currentItem }) => {
  return (
    <section className="section-product-detailing">
      <div className="section-product-detailing__contender">
        {currentItem.map((item) => (
          <ProductDetailing key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,

    // productsData: state.shop.productsData,
  };
};
Detailing.propTypes = {
  currentItem: PropTypes.array,
  // productsData: PropTypes.array,
};

export default connect(mapStateToProps)(Detailing);
