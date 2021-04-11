import React from "react";
import data from "../../data/data";
import Products from "./Products";

const Product = () => {
  return (
    <section className="section-Products">
      <div className="section-Products__container">
        {data.map((item) => (
          <div className="product" key={item.id}>
            <Products {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
