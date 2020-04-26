import React from "react";
import './Account.css';

const TitlePage = ({icon}) => {

    return (
        <div className="o-icon-user">
            <img src={icon} alt="Icon user"/>
        </div>
        
    );
}

export default TitlePage;