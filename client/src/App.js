// core
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
  const { isAuthenticated, isLoading } = useAuth0();

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