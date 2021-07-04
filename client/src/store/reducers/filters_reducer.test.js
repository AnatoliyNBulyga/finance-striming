import { filtersReducer } from "store/reducers/filters_reducer";
import { filtersActions } from "store/actions/filters_actions";

it("Length of categories array should be incremented", () => {
    // 1. Test data
    const action = filtersActions.setAllCategories(
        [
            "All",
            "USA", 
            "Europe", 
            "Asia", 
            "Crypto"
        ]
    );    
    const state = {
        activeCategory: 0,
        categories: [],
        isLoaded: false
    };
    // 2. action
    const newState = filtersReducer( state, action );
    // 3. expectation
    expect(newState.categories.length).toBe(5);
    expect(newState.categories[4]).toBe("Crypto");
});

it("Index of active category should be set", () => {
    // 1. Test data
    const action = filtersActions.setCategory(1);    
    const state = {
        activeCategory: 0,
        categories: [],
        isLoaded: false
    };
    // 2. action
    const newState = filtersReducer( state, action );
    // 3. expectation
    expect(newState.activeCategory).toBe(1);
});