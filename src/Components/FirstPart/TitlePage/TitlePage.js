import React from "react";
import './TitlePage.css';


const TitlePage = ({Text}) => {

    return (
        <div className="o-name-page">
            <h1> {Text} </h1> 
        </div>
        
    );
}

export default TitlePage;