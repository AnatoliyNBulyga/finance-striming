// constants for actions
import { constantFilters } from "store/actions/filters_actions";

const initialState = {
    activeCategory: 0,
    categories: [],
    isLoaded: false
}

export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case constantFilters.SHOW_LOADER: 
            return {...state, isLoaded: false};
        case constantFilters.HIDE_LOADER: 
            return {...state, isLoaded: true};
        case constantFilters.SET_CATEGORY:
            return {...state, activeCategory: action.payload};
        case constantFilters.SET_ALL_CATEGORIES: {
            return {...state, categories: action.payload};
        }    
        default: 
            return state;
    }
}