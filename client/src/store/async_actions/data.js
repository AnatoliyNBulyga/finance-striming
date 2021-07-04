// axios
import axios from "axios";
// config settings
import { API_URL } from "config.js";
// redux action creaters
import { filtersActions } from "store/actions/filters_actions";

// Get all categories from server
export const getAllCategories = () => {
    return async dispatch => {
        try {
            dispatch(filtersActions.showLoader());
            const url = `${API_URL}api/tickers/categories`;
            const response = await axios.get(url);
            dispatch(filtersActions.setAllCategories(response.data));
            dispatch(filtersActions.hideLoader());
        } catch(e) {
            console.log('error', e);
        }
    }
};