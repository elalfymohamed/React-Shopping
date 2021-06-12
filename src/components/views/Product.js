import React from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import Products from "./Products";

const Product = ({ productsData }) => {
  return (
    <section className="section-Products">
      <div className="section-Products__container">
        {productsData.map((item, index) => (
          <Products key={item.id} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    productsData: state.shop.productsData,
  };
};

Product.propTypes = {
  productsData: PropTypes.array,
};

export default connect(mapStateToProps)(Product);
