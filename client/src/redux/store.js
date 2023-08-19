import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./authReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];
const store = createStore(
  authReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
