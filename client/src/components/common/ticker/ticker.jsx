// core
import React from "react";
import "./ticker.scss";
// icons
import ArrowDown from "components/icons/arrow_down";
import ArrowTop from "components/icons/arrow_top";
// helper for price devide
import { getPriceDevider } from "utils/utils";

const Ticker = ({ id, company, ticker, price, change, change_percent, type }) => {
  // css class animation compute
  let classYield = "ticker__yield";
  let classIndicator = "ticker__indicator-inner";
  if (change_percent > 0) {
    classYield += " positive with-positive-animation";
    classIndicator += " positive with-positive-animation";
  } else {
    classYield += " negative with-negative-animation";
    classIndicator += " negative with-negative-animation";
  }

  // ticker for main content
  if (type && type === 'mainTicker') { 
    return (
      <div className="ticker ticker--main" key={id}>
        <div className="ticker__inner">  
          <div className={`ticker__badge ticker__badge--${ticker}`}>{ticker}</div>    
          <div className="ticker__info">
            <div className="ticker__info-title title-content">{company}</div>
          </div>
          <div className="ticker__price">{getPriceDevider(price)}</div>
          <div className={classYield}>
            <div className="ticker__indicator-change-price">{change_percent > 0 ? `+${change}` : change} $</div>
          </div> 
          <div className="ticker__indicator ticker__indicator--main overflow-hidden">
            <div className={classIndicator}>{ 
              change_percent > 0 
                ? <ArrowTop style={{ color: '#137333', fontSize: 16 }}/>
                : <ArrowDown style={{ color: '#c5221f', fontSize: 16 }}/>
              }<div className="ticker__indicator-percent overflow-hidden">{change_percent > 0 ? `+${change_percent}` : change_percent} %</div>
            </div>
          </div>
        </div>   
    </div>
    );
  }

  // ticker for sidebar
  if (type && type === 'sidebarTicker') { 
    return (
      <div className="ticker ticker--sidebar" key={id}>
        <div className="ticker__inner">
          <div className="ticker__info">
            <div className={`ticker__badge ticker__badge--${ticker}`}>{ticker}</div> 
            <div className="ticker__info-title title-content">{company}</div>
          </div>
          <div className="ticker__price">{getPriceDevider(price)}</div>
          <div className={classYield}>
              <div className="ticker__yield-change overflow-hidden">{change_percent > 0 ? `+${change}` : change} $</div>
          </div>
          <div className="ticker__indicator ticker__indicator--main overflow-hidden">
            <div className={classIndicator}>{ 
              change_percent > 0 
                ? <ArrowTop style={{ color: '#137333', fontSize: 16 }}/>
                : <ArrowDown style={{ color: '#c5221f', fontSize: 16 }}/>
              }<div className="ticker__indicator-percent overflow-hidden">{change_percent > 0 ? `+${change_percent}` : change_percent} %</div>
            </div>
          </div> 
        </div>   
    </div>
    );
  }
  
  // ticker for top line
  return ( 
    <div className="ticker" key={id}>
        <div className="ticker__indicator overflow-hidden"><span className={classIndicator}>{ 
            change_percent > 0 
                ? <ArrowTop style={{ color: '#137333', fontSize: 16 }}/>
                : <ArrowDown style={{ color: '#c5221f', fontSize: 16 }}/>
        }</span></div>
        <div className="ticker__info">
            <div className="ticker__info-title title-content">{ticker}</div>
            <div className="ticker__info-price">{price}</div>
        </div>
        <div className={classYield}>
            <div className="ticker__yield-percent overflow-hidden">{change_percent > 0 ? `+${change_percent}` : change_percent} %</div>
            <div className="ticker__yield-change overflow-hidden">{change}</div>
        </div>   
    </div>
  )
}

export default React.memo(Ticker);