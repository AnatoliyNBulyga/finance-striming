// core
import React from "react";
import ReactDOM from "react-dom";
// componenst
import App from "App";
// redux
import {Provider} from "react-redux";
import store from "./store/index";
// auth0
import { Auth0Provider } from "@auth0/auth0-react";
// config settings
import { AUTH0 } from "config.js";

ReactDOM.render(
  <Auth0Provider
    domain={AUTH0.domain}
    clientId={AUTH0.clientId}
    redirectUri={AUTH0.redirectUri} >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>, 
  document.getElementById("root")
);