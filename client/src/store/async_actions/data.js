// axios
import axios from "axios";
// config settings
import { API_URL } from "config.js";
// redux action creaters
import { filterActions } from "store/actions/filter_actions";

// Get all categories from server
export const getAllCategories = () => {
    return async dispatch => {
        try {
            dispatch(filterActions.showLoader());
            const url = `${API_URL}api/tickers/categories`;
            const response = await axios.get(url);
            dispatch(filterActions.setAllCategories(response.data));
            dispatch(filterActions.hideLoader());
        } catch(e) {
            console.log('error', e);
        }
    }
};