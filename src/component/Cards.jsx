import React from "react";
import "./Cards.css";



 

const Cards = (props) => {
  return (
    <div className="cards_container">
      <div className="flex">
      <div className="img_time">
        <img src={props.image} alt="" className="round"/>
        <h5 className="time">{props.h5}</h5>
      </div>
        <div>
          <div className="h2_pix">
            <img src= {props.pic} alt ="" className="pix" />
           <h2 className="title">{props.h2}</h2>
          </div>
          <p className="text1">{props.p}</p>
          <h6 className="text2">{props.h6}</h6>
        </div>
      </div>
    </div>
  );
};
export default Cards;
