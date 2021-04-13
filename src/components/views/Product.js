import React from "react";
import data from "../../data/data";
import Products from "./Products";

const Product = () => {
  return (
    <section className="section-Products">
      <div className="section-Products__container">
        {data.map((item) => (
          <Products key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Product;
