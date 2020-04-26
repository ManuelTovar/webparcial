import React from "react";
import TitlePage from "../../FirstPart/TitlePage/TitlePage.js";
import Account from "../../FirstPart/Account/Account.js";
import './HeaderBar.css';

const HeaderBar = ({NamePage, user}) => {

    return (
        <div className="o-headerbar">
            <TitlePage Text={NamePage}/>
            <Account icon={user}/>

        </div>

    );
}

export default HeaderBar;