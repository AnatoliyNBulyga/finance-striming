// constants for actions
export const constantFilter = {
    SHOW_LOADER: 'SHOW_LOADER',
    HIDE_LOADER: 'HIDE_LOADER',
    SET_CATEGORY: 'SET_CATEGORY',
    SET_ALL_CATEGORIES: 'SET_ALL_CATEGORIES',
};

// action creaters
export const filterActions = {

    showLoader: () => ({
        type: constantFilter.SHOW_LOADER
    }),
    
    hideLoader: () => ({
        type: constantFilter.HIDE_LOADER
    }),
    
    setCategory: (category) => ({
        type: constantFilter.SET_CATEGORY,
        payload: category
    }),
    
    setAllCategories: (categories) => ({
        type: constantFilter.SET_ALL_CATEGORIES,
        payload: categories
    })

}