import React from "react";
import './TitleMovie.css';

const TitleMovie = ({Text}) => {

    return (
        <div className="o-name-movie">
            <h1> {Text} </h1> 
        </div>
        
    );
}

export default TitleMovie;