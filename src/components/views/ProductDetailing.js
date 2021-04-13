import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Image from "../../assets/amanda-vick-ohWf6YuzOQk-unsplash.jpg";

const ProductDetailing = () => {
  return (
    <>
      <Header />
      <section className="section-product-detailing">
        <div className="section-product-detailing__contender">
          <div className="product-detailing__content">
            <div className="product-detailing__content__image">
              <img src={Image} alt="" width="360" height="400" />
            </div>
            <div className="product-detailing__content__info">
              <Link to="/" className="section">
                <div className="section__title">ttt</div>
              </Link>
              <h1 className="title">tttttt</h1>
              <h2 className="custom_clothing">nhgdnhsnhubjrrrrrrrrrrerrrr</h2>
              <div className="ratting">
                <div className="scoreTog">3.5</div>
              </div>
              <div className="total">
                <div className="before">Before:</div>
                <div className="priceWas">$&nbsp;333&nbsp;</div>
                <div className="new">New:</div>
                <div className="priceNow">$ &nbsp;333&nbsp;</div>
                <div className="saved">Saved:</div>
                <div className="priesSaved">
                  $&nbsp;33&nbsp;
                  <span className="profit">offer 33%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="section-product-detailing__addCart">
            <div className="section-product-detailing__addCart__btn">
              <button type="button" className="btn">
                <span> Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailing;
