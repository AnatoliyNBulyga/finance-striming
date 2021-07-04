// core
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import Preloader from "components/preloader/preloader";
// redux action creaters
import { getAllCategories } from "store/async_actions/data";
import { filtersActions } from "store/actions/filters_actions";
// styles
import "./categories.scss";
// socket
import socket from "socket/index.js";


const Categories = () => {
    // hooks
    const dispatch = useDispatch();
    const {categories, activeCategory, isLoaded} = useSelector( state => state.filters);
    
    // fetch all categories from server
    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    // handlers
    const onSelectCategory = useCallback( (index) => {
        // set active category
        dispatch(filtersActions.setCategory(index));
        socket.emit("start", {
            category: index
        })
    }, [dispatch]);

    if (!isLoaded) return ( // show preloader before loading all categories from server
        <div className="categories">
           <Preloader />
        </div>
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