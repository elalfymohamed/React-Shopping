import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import shopReducer from "./rootReducer";

// const store = createStore(rootReducer, composeWithDevTools());
const store = createStore(shopReducer);

export default store;
