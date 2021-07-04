export const constantData = {
    SHOW_LOADER: 'SHOW_LOADER',
    HIDE_LOADER: 'HIDE_LOADER',
    SET_DATA: 'SET_DATA'
}

export const showLoader = () => ({
    type: constantData.SHOW_LOADER
});

export const hideLoader = () => ({
    type: constantData.HIDE_LOADER
});

export const setDataAction = data => ({
    type: constantData.SET_DATA,
    payload: data
});