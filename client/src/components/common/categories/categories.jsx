// core
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import Preloader from "components/preloader/preloader";
// redux action creaters
import { getAllCategories } from "store/async_actions/data";
import { setCategory} from "store/actions/filter_actions";
import { setDataAction, showLoader, hideLoader } from "store/actions/data_actions";
// styles
import "./categories.scss";

const Categories = () => {
    console.log("categories")
    // hooks
    const dispatch = useDispatch();
    const {categories, activeCategory, isLoaded} = useSelector( state => state.filters);

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    // handlers
    const onSelectCategory = useCallback( (index) => {
        // set active category
        dispatch(setCategory(index));
    }, [dispatch]);

    if (!isLoaded) return ( // show preloader before loading all categories from server
        <header className="categories header">
           <Preloader />
        </header>
    );
    
    return (
        <nav className="categories">
            <ul className="categories__list">
                {
                    categories.map( (item, index) => <li 
                        key={`${item}_${index}`}
                        className={`categories__list-item ${activeCategory === index ? " active" : ""}`} 
                        onClick={() => onSelectCategory(index)}
                    >{item}</li> )
                }
            </ul>  
        </nav>
    )
};
export default React.memo(Categories);