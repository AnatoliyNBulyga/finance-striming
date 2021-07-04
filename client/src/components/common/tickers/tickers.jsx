// core
import React, {useEffect} from "react";
// hooks
import { useDispatch, useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';
// socket
import socket from "socket/index.js";
// redux action creaters
import { setDataAction, showLoader, hideLoader } from "store/actions/data_actions";
// components
import Ticker from "components/common/ticker/ticker";
import Preloader from "components/preloader/preloader";
// styles
import "./tickers.scss";

const Tickers = () => {
  console.log("tickers ")
    const dispatch = useDispatch();
    const {tickers, isLoaded} = useSelector(state => state.data);

    const maxPriceTickers = tickers
      .sort( (nextTicker, prevTicker) => nextTicker.change - prevTicker.change) // sort tickers array by price
      .slice(tickers.length - 2); // get last 2 tickers with max price from array
    const mostFollowedTickers = [...tickers]
      .splice(1, 3); // get last 3 tickers with max price from array  

    useEffect(() => {
      try {
        dispatch(showLoader);
        socket.open();
        socket.emit("start");
        socket.on("ticker", (tickers) => {
          dispatch(setDataAction(tickers));
        });
        dispatch(hideLoader);
      } catch(error) {
        console.log(error);
      }
      // Return a callback to be run before unmount-ing.
      return () => {
        socket.close();
      };
    }, [dispatch]); // Pass in an empty array to only run on mount.

    if (!isLoaded) return ( // show preloader before loading all categories from server
      <header className="categories header">
          <Preloader />
      </header>
    );

    return (
        <div className="main-content content">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className="main__top flex-wrap">
                  { 
                    tickers.length
                    ? tickers.map( 
                      ( { _id, ticker, price,change, change_percent, type } )  => <Ticker 
                        key={_id} 
                        id={_id}
                        ticker={ticker}
                        price={price}
                        change={change}
                        change_percent={change_percent} />
                      )
                    : <div className="no-items">No items</div>   
                  }
                </div>
              </Grid>
            </Grid> 
            <Grid className="main-content__body" container spacing={2}>
              <Grid className="main-content__content" item sm={8} xs={12}>
                <h2 className="title-main">You may be interested in</h2> 
                { 
                  maxPriceTickers.length
                  ? maxPriceTickers.map( 
                    ( { _id, _company, ticker, price,change, change_percent, type } )  => <Ticker 
                        key={_id} 
                        type="mainTicker"
                        id={_id}
                        company={_company}
                        ticker={ticker}
                        price={price}
                        change={change}
                        change_percent={change_percent} />
                    )
                  : <div className="no-items">No items</div>  
                }
              </Grid>
              <Grid className="main-content__aside" item style={{padding:0, marginTop: 30}} sm={4} xs={12}>
                <h2 className="title-main">Most followed</h2>
                { 
                  mostFollowedTickers.length
                  ? mostFollowedTickers.map( 
                    ( { _id, ticker, _company, price,change, change_percent, type } )  => <Ticker 
                        key={_id} 
                        type="sidebarTicker"
                        id={_id}
                        ticker={ticker}
                        company={_company}
                        price={price}
                        change={change}
                        change_percent={change_percent} />
                    ) 
                  : <div className="no-items">No items</div>  
                }
              </Grid>
            </Grid>
        </div>
    )
}

export default React.memo(Tickers);