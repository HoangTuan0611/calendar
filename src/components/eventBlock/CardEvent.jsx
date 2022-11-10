import React from "react";
import dayjs from "dayjs";
import "../../styles/main.css";

const CardEvent = (props) => {
  const { item } = props;

  console.log(item);

  if (item.type === 1) {
    return (
      <div className="card__event">
        <span className="card__title">{item.title}</span>
        <h4 className="card__time">
          {dayjs(item.from).format("H:mm A Z")} -{" "}
          {dayjs(item.to).format("H:mm A Z")}
        </h4>
      </div>
    );
  }
  return (
    <div className="card__event">
      <span className="card__title">{item.title}</span>
      <h4 className="card__time">
        {dayjs(item.from).format("H:mm A Z")} -{" "}
        {dayjs(item.to).format("H:mm A Z")}
      </h4>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="card__ava">
          <img style={{ width: "25%" }} src={item.avatar} alt="" />
        </div>
        <div>
          <a href={item.link}>View Client Profile</a>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
