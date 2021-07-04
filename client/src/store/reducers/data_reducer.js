// constants for actions
import { constantData } from "store/actions/data_actions";

const initialState = {
    tickers: [],
    isLoaded: false
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case constantData.SHOW_LOADER: 
            return {...state, isLoaded: false};
        case constantData.HIDE_LOADER: 
            return {...state, isLoaded: true};
        case constantData.SET_DATA:
            return {...state, tickers: action.payload};    
        default: 
            return state;
    }
};