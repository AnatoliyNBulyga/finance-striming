// core
import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// hooks
import { useDispatch } from "react-redux";
// socket
import socket from "socket/index.js";
// redux action creaters
import { dataActions } from "store/actions/data_actions";
// auth0
import { useAuth0 } from "@auth0/auth0-react";
// styles
import "./app.scss";
// components
import Private from "pages/private";
import Public from "pages/public";
import Navbar from "components/common/navbar/navbar";
import Preloader from "components/preloader/preloader";
import Footer from "components/common/footer/footer";

const App = () => {
  // hooks
  const { isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      socket.emit("start");
      socket.on("ticker", (tickers) => {
        dispatch(dataActions.setDataAction(tickers));
      });
    } catch(error) {
      console.log(error);
    }
    // Return a callback to be run before unmount-ing.
    return () => {
      socket.close();
    };
  }, [dispatch]); // Pass in an empty array to only run on mount.

  return (
    isLoading
    // preloader before loading auth0 data
    ? <Preloader />
    // if auth0 data was loaded
    : (
      <Router>
          <Navbar />
          <Switch>
            <Route path="/private" component={Private} />
            <Route path="/public" component={Public} />
            {
              isAuthenticated
                ? <Redirect to="/private"/>
                : <Redirect to="/public"/>
            }
          </Switch>
          <Footer />
      </Router>
    ) 
  );
}

export default App;