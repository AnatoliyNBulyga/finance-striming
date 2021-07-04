// core
import { combineReducers } from "redux";
// reducers
import { dataReducer } from "store/reducers/data_reducer";
import { filtersReducer } from "store/reducers/filters_reducer";

const rootReducer = combineReducers({
    data: dataReducer,
    filters: filtersReducer
});

export default rootReducer;