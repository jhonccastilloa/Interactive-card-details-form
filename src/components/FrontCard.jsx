import React from "react";
import "./style/frontCard.css";

const FrontCard = ({ formCard }) => {
  console.log(formCard);
  return (
    <div className="card frontCard">
      <div className="circles">
        <div className="circle__big"></div>
        <div className="circle__small"></div>
      </div>
      <p className="card__number">
        {formCard.number.padStart(16, 0).replace(/([0-9]{4})/g, "$1 ")}
      </p>
      <div className="card__aditional">
        <span className="card__name">{formCard.name? formCard.name:"JANE APPLESEED"} </span>{" "}
        <span className="card__date">
          {formCard.month.padStart(2,0)}/{formCard.year.padStart(2,0)}
        </span>
      </div>
    </div>
  );
};

export default FrontCard;
