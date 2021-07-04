// axios
import axios from "axios";
// config settings
import {API_URL} from "../../config.js";
// redux action creaters
import {setAllCategories, showLoader, hideLoader} from "../actions/filter_actions";

export const getAllCategories = () => {
    return async dispatch => {
        try {
            dispatch(showLoader());
            const url = `${API_URL}api/tickers/categories`;
            const response = await axios.get(url);
            dispatch(setAllCategories(response.data));
            dispatch(hideLoader());
        } catch(e) {
            console.log('error', e);
        }
    }
}