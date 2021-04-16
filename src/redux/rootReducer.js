import { combineReducers } from "redux";
import Reducer from "./actions/reducer";

const rootReducer = combineReducers({
  shop: Reducer,
});

export default rootReducer;
