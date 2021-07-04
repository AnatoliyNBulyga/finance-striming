// constants for actions
import { constantFilter } from "store/actions/filter_actions";

const initialState = {
    activeCategory: 0,
    categories: [],
    isLoaded: false
}

export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case constantFilter.SHOW_LOADER: 
            return {...state, isLoaded: false};
        case constantFilter.HIDE_LOADER: 
            return {...state, isLoaded: true};
        case constantFilter.SET_CATEGORY:
            return {...state, activeCategory: action.payload};
        case constantFilter.SET_ALL_CATEGORIES: {
            return {...state, categories: action.payload};
        }    
        default: 
            return state;
    }
}