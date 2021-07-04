// core
import React from "react";
// hooks
import { useSelector } from "react-redux";
// material-ui grid
import Grid from '@material-ui/core/Grid';
// components
import Ticker from "components/common/ticker/ticker";
// styles
import "./tickers.scss";


const Tickers = () => {
  // hooks
  const {tickers} = useSelector(state => state.data);

  // filter array for defferent display on page
  const maxPriceTickers = tickers
    .sort( (nextTicker, prevTicker) => nextTicker.change - prevTicker.change) // sort tickers array by price
    .slice(tickers.length - 2); // get last 2 tickers with max price from array
  const mostFollowedTickers = [...tickers]
    .splice(1, 3); // get last 3 tickers with max price from array 

  return (
      <div className="main-content content">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className="main__top flex-wrap">
                { 
                  tickers.length
                  ? tickers.map( 
                    ( { ticker, price, change, change_percent } )  => <Ticker 
                      key={ticker} 
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
                  ( { _company, ticker, price,change, change_percent } )  => <Ticker 
                      key={ticker} 
                      type="mainTicker"
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
                  ( { ticker, _company, price,change, change_percent } )  => <Ticker 
                      key={ticker} 
                      type="sidebarTicker"
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