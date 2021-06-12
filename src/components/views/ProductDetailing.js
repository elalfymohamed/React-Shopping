import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions/actions";

const ProductDetailing = ({ currentItem, addToCart }) => {
  return (
    <>
      <section className="section-product-detailing">
        <div className="section-product-detailing__contender">
          <div className="product-detailing__content">
            <div className="product-detailing__content__image">
              <img
                src={currentItem.img}
                alt={currentItem.product_name}
                width="360"
                height="400"
              />
            </div>
            <div className="product-detailing__content__info">
              <Link to="/" className="section">
                <div className="section__title">{currentItem.section}</div>
              </Link>
              <h1 className="title">{currentItem.product_name}</h1>
              <h2 className="custom_clothing">{currentItem.custom_clothing}</h2>
              <div className="ratting">
                <div className="scoreTog">{currentItem.start}</div>
              </div>
              <div className="total">
                {currentItem.offer && (
                  <>
                    <div className="before">Before:</div>
                    <div className="priceWas">
                      $&nbsp;{currentItem.price}&nbsp;
                    </div>
                  </>
                )}
                <div className="new">New:</div>
                {currentItem.offer ? (
                  <div className="priceNow">
                    $ &nbsp;{currentItem.offer}&nbsp;
                  </div>
                ) : (
                  <div className="priceNow">
                    $ &nbsp;{currentItem.price}&nbsp;
                  </div>
                )}

                {currentItem.saved && (
                  <>
                    <div className="saved">Saved:</div>
                    <div className="priesSaved">
                      $&nbsp;{currentItem.saved}&nbsp;
                      <span className="profit">offer {currentItem.sale}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="section-product-detailing__addCart">
            <div className="section-product-detailing__addCart__btn">
              <button
                type="button"
                className="btn"
                onClick={() => addToCart(currentItem.id)}
              >
                <span> Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

ProductDetailing.propTypes = {
  currentItem: PropTypes.object,
  addToCart: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailing);
