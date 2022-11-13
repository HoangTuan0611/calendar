import React from "react";
import dayjs from "dayjs";
import "../../styles/main.css";
import "remixicon/fonts/remixicon.css";
import Format from "../../helper/Format";

const CardEvent = (props) => {
  const { item } = props;

  //console.log(item);

  if (item.type === 1) {
    return (
      <div className={`card__event ${item.type === 1 ? "blue-bg" : ""}`}>
        <p className="card__title">{item.title}</p>
        <h4 className="card__time">
          {Format.formartD(item.from, "H:mm A Z")} -{" "}
          {Format.formartD(item.to, "H:mm A Z")}
        </h4>
      </div>
    );
  }
  return (
    <div className="card__event">
      <div className="d-flex">
        <p className="card__title">{item.title}</p>
        <div className="icon">
          <i className="ri-vidicon-line"></i>
        </div>
      </div>
      <h4 className="card__time">
        {Format.formartD(item.from, "H:mm A Z")} -{" "}
        {Format.formartD(item.to, "H:mm A Z")}
      </h4>
      <div className="card__ava">
        <img src={item.avatar} alt="" />
        <a href={item.link}>View Client Profile</a>
      </div>
    </div>
  );
};

export default CardEvent;
