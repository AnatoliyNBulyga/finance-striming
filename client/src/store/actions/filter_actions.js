export const constantData = {
    SHOW_LOADER: 'SHOW_LOADER',
    HIDE_LOADER: 'HIDE_LOADER',
    SET_CATEGORY: 'SET_CATEGORY',
    SET_ALL_CATEGORIES: 'SET_ALL_CATEGORIES',
}

export const showLoader = () => ({
    type: constantData.SHOW_LOADER
});

export const hideLoader = () => ({
    type: constantData.HIDE_LOADER
});

export const setCategory = (category) => ({
    type: constantData.SET_CATEGORY,
    payload: category
});

export const setAllCategories = (categories) => ({
    type: constantData.SET_ALL_CATEGORIES,
    payload: categories
});