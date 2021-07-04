// constants for actions
export const constantFilters = {
    SHOW_LOADER: 'SHOW_LOADER',
    HIDE_LOADER: 'HIDE_LOADER',
    SET_CATEGORY: 'SET_CATEGORY',
    SET_ALL_CATEGORIES: 'SET_ALL_CATEGORIES',
};

// action creaters
export const filtersActions = {

    showLoader: () => ({
        type: constantFilters.SHOW_LOADER
    }),
    
    hideLoader: () => ({
        type: constantFilters.HIDE_LOADER
    }),
    
    setCategory: (category) => ({
        type: constantFilters.SET_CATEGORY,
        payload: category
    }),
    
    setAllCategories: (categories) => ({
        type: constantFilters.SET_ALL_CATEGORIES,
        payload: categories
    })

}