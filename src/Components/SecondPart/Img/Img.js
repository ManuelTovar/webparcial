import React from "react";
import './Img.css';

const Img = ({ resource }) => {

    return (
        <div className="o-img-container">

            <img src={resource} className="o-img" alt="Movie" />

            <div className="o-overlay">

                <div className="o-text"> Ver ahora </div>

            </div>

        </div>

    );
}

export default Img;