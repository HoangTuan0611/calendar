import React from "react";
import dayjs from "dayjs";

const CardEvent = (props) => {
  const { item } = props;

  console.log(item);

  if (item.type === 1) {
    return (
      <>
        <h1 className="card__title">{item.title}</h1>
        <h4 className="card__time">
          {dayjs(item.from).format("H:mm A Z")} -{" "}
          {dayjs(item.to).format("H:mm A Z")}
        </h4>
      </>
    );
  }
  return (
    <div>
      <h1 className="card__title">{item.title}</h1>
      <h4 className="card__time">
        {dayjs(item.from).format("H:mm A Z")} -{" "}
        {dayjs(item.to).format("H:mm A Z")}
      </h4>
      <div style={{ display: "flex", justifyContent:'space-between' }}>
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
