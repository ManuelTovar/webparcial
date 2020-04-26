import React from "react";
import './Categories.css';


const Categories = ({ CategoriesTitle, children }) => {

    return (
        <div className="o-categories" >
            <h1> {CategoriesTitle} </h1>

            <div className="o-movies">

                {children}

            </div>
        </div>

    );
}

export default Categories;