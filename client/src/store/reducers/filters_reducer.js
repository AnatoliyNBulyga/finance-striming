// constants for actions
import { constantData } from "store/actions/filter_actions";

const initialState = {
    activeCategory: 0,
    categories: [],
    isLoaded: false
}

export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case constantData.SHOW_LOADER: 
            return {...state, isLoaded: false};
        case constantData.HIDE_LOADER: 
            return {...state, isLoaded: true};
        case constantData.SET_CATEGORY:
            return {...state, activeCategory: action.payload};
        case constantData.SET_ALL_CATEGORIES: {
            return {...state, categories: action.payload};
        }    
        default: 
            return state;
    }
}