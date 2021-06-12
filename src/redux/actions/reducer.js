import * as actionTypes from "./types";
import data from "../../data/data";

const INITIAL_STATE = {
  productsData: data,
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  heart: localStorage.getItem("heart")
    ? JSON.parse(localStorage.getItem("heart"))
    : [],
  currentItem: null,
};
const shopReducer = (state = INITIAL_STATE, action) => {
  localStorage.setItem("cart", JSON.stringify(state.cart));
  localStorage.setItem("heart", JSON.stringify(state.heart));

  switch (action.type) {
    // CART
    case actionTypes.ADD_TO_CART:
      const item = state.productsData.find(
        (prod) => prod.id === action.payload.id
      );
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1, cart: item.cart }
                : item
            )
          : [...state.cart, { ...item, qty: 1, cart: true }],
      };
    // UPDATE_CART_DATA:
    case actionTypes.UPDATE_CART_DATA:
      return Object.assign({}, state, {
        productsData: state.productsData.map((item) => {
          return item.id === action.payload.id
            ? { ...item, qty: +1, cart: true }
            : item;
        }),
      });
    // UPDATE_CART
    case actionTypes.UPDATE_CART:
      return Object.assign({}, state, {
        productsData: state.productsData.map((item) => {
          return item.id === action.payload.id
            ? { ...item, cart: false, qty: null }
            : item;
        }),
      });
    // HEART
    case actionTypes.ADD_TO_HEART:
      const itemHeart = state.productsData.find(
        (prod) => prod.id === action.payload.id
      );
      const inHeart = state.heart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        heart: inHeart
          ? state.heart.map((item) =>
              item.id === action.payload.id
                ? { ...item, core: item.core }
                : item
            )
          : [...state.heart, { ...itemHeart, core: true }],
      };
    // UPDATE_HEART_DATA
    case actionTypes.UPDATE_HEART_DATA:
      return Object.assign({}, state, {
        productsData: state.productsData.map((item) => {
          return item.id === action.payload.id ? { ...item, core: true } : item;
        }),
      });
    // UPDATE_HEART
    case actionTypes.UPDATE_HEART:
      return Object.assign({}, state, {
        productsData: state.productsData.map((item) => {
          return item.id === action.payload.id
            ? { ...item, core: false }
            : item;
        }),
      });

    // REMOVE_CART
    case actionTypes.REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    // REMOVE_HEART
    case actionTypes.REMOVE_HEART:
      return {
        ...state,
        heart: state.heart.filter((item) => item.id !== action.payload.id),
      };
    // ADJUST_QTY
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    // LOAD_CURRENT_ITEM
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
