// core
import React, { useEffect, useCallback } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// auth0
import { useAuth0 } from '@auth0/auth0-react';
// animation
import { gsap } from "gsap";
// components
import Tickers from "components/common/tickers/tickers";
import Categories from "components/common/categories/categories";
import Preloader from "components/preloader/preloader";

        
const Private = () => {
  // auth0
  const { isAuthenticated, isLoading } = useAuth0();
  // animation on load app
  useEffect( () => {
    gsap.from(".wrap-animate", {duration: 1, y: 30});
  }, []);
  // preloader before loading auth0 data
  if (isLoading) return <Preloader />;
  // if (isLoading) return <Preloader />;
  return (
    // if user is authenticated
    isAuthenticated
    ? (
        <main className="wrap wrap-animate">
          <Categories />
          <Tickers />
        </main>
    )
    // if user isn't login
    : <Redirect to="/public" exact />
      
  );
};

export default React.memo(Private);