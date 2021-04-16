import * as actionTypes from "./types";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const addToHeart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_HEART,
    payload: {
      id: itemID,
    },
  };
};

export const removeCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeHeart = (itemID) => {
  return {
    type: actionTypes.REMOVE_HEART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustQty = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const loadCurrentItem = (itemID) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: itemID,
  };
};

export const updateHeartData = (itemID) => {
  return {
    type: actionTypes.UPDATE_HEART_DATA,
    payload: {
      id: itemID,
    },
  };
};

export const updateHeart = (itemID) => {
  return {
    type: actionTypes.UPDATE_HEART,
    payload: {
      id: itemID,
    },
  };
};

export const updateCartData = (itemID) => {
  return {
    type: actionTypes.UPDATE_CART_DATA,
    payload: {
      id: itemID,
    },
  };
};

export const updateCart = (itemID) => {
  return {
    type: actionTypes.UPDATE_CART,
    payload: {
      id: itemID,
    },
  };
};
