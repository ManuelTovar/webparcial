import React from "react";
import TitleMovie from "../../SecondPart/TitleMovie/TitleMovie.js";
import Img from "../../SecondPart/Img/Img.js"
import './Card.css';



const Card = ({NameMovie, url}) => {

    return (
        <div className="o-card">
          <TitleMovie Text={NameMovie}/>
          <Img resource={url}/>
        </div>
    );
}

export default Card;