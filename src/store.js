import { getAllPicsReducer } from "./reducers/picGramReducer";

import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const finalReducer = combineReducers({
  getAllPicsReducer: getAllPicsReducer,
});

const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,

  composeEnhancers(applyMiddleware(thunk))
);

export default store;
