import React from "react";
import dayjs from "dayjs";
import "../../styles/main.css";
import "remixicon/fonts/remixicon.css";

const CardEvent = (props) => {
  const { item } = props;

  console.log(item);

  if (item.type === 1) {
    return (
      <div className={`card__event ${item.type === 1 ? 'blue-bg' : ''}`}>
        <p className="card__title">{item.title}</p>
        <h4 className="card__time">
          {dayjs(item.from).format("H:mm A Z")} -{" "}
          {dayjs(item.to).format("H:mm A Z")}
        </h4>
      </div>
    );
  }
  return (
    <div className="card__event">
      <div className="d-flex">
        <p className="card__title">{item.title}</p>
        <div className="icon">
          <i class="ri-vidicon-line"></i>
        </div>
      </div>
      <h4 className="card__time">
        {dayjs(item.from).format("H:mm A Z")} -{" "}
        {dayjs(item.to).format("H:mm A Z")}
      </h4>
      <div className="card__ava">
        <img src={item.avatar} alt="" />
        <a href={item.link}>View Client Profile</a>
      </div>
    </div>
  );
};

export default CardEvent;
