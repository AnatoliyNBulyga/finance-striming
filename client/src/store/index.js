// core
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// root reducer
import rootReducer from "store/reducers/";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;