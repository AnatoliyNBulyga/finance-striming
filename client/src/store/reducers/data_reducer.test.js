import React from "react";
import { dataReducer } from "store/reducers/data_reducer";
import { dataActions } from "store/actions/data_actions";

it("Length of tickers array should be incremented", () => {
    // 1. Test data
    const action = dataActions.setDataAction(
        [
            {
                change: "83.11",
                change_percent: "0.44",
                dividend: "0.87",
                exchange: "NASDAQ",
                last_trade_time: "2021-07-04T12:45:54.000Z",
                price: "15274.47",
                ticker: "FB",
                _category: 3,
                _company: "Facebook",
                _yield: "0.90"
            },
            {
                change: "85.45",
                change_percent: "0.44",
                dividend: "0.13",
                exchange: "NASDAQ",
                last_trade_time: "2021-07-04T12:45:54.000Z",
                price: "24932.53",
                ticker: "GOOGL",
                _category: 1,
                _company: "Google",
                _yield: "1.27"
            },
            {
                change: "134.54",
                change_percent: "-0.29",
                dividend: "0.66",
                exchange: "NASDAQ",
                last_trade_time: "2021-07-04T12:45:54.000Z",
                price: "23106.95",
                ticker: "AAPL",
                _category: 1,
                _company: "Apple",
                _yield: "0.04"
            },
            {
                change: "170.81",
                change_percent: "0.17",
                dividend: "0.63",
                exchange: "NASDAQ",
                last_trade_time: "2021-07-04T12:45:54.000Z",
                price: "12679.99",
                ticker: "AMZN",
                _category: 3,
                _company: "Amazon",
                _yield: "1.38"
            },
            {
                change: "183.45",
                change_percent: "-0.58",
                dividend: "0.68",
                exchange: "NASDAQ",
                last_trade_time: "2021-07-04T12:45:54.000Z",
                price: "22744.06",
                ticker: "MSFT",
                _category: 2,
                _company: "Microsoft",
                _yield: "0.09"
            },
            {
                change: "193.62",
                change_percent: "-0.14",
                dividend: "0.95",
                exchange: "NASDAQ",
                last_trade_time: "2021-07-04T12:45:54.000Z",
                price: "22786.66",
                ticker: "TSLA",
                _category: 1,
                _company: "Tesla",
                _yield: "1.99"
            }
    ]);
    const state = {
        tickers: [],
        isLoaded: false
    };
    // 2. action
    const newState = dataReducer( state, action );
    // 3. expectation
    expect(newState.tickers.length).toBe(6);
    expect(newState.tickers[5].ticker).toBe("TSLA");
});