import React, { useState, useMemo } from "react";
import CardEvent from "./CardEvent";
import Calendar from "react-calendar";
import { events } from "../../data/fake-data";
import dayjs from "dayjs";
import "../../styles/main.css";

const EventBlock = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const filteredEvent = useMemo(() => {
    const dayformated = dayjs(selectedDate).format("D");
    const monthformated = dayjs(selectedDate).format("MM");
    const yearformated = dayjs(selectedDate).format("YY");

    let resultArr = [];
    events.forEach((element) => {
      let _day = dayjs(element.from).format("D");
      let _month = dayjs(element.from).format("MM");
      let _year = dayjs(element.from).format("YY");

      if (
        _year === yearformated &&
        _month === monthformated &&
        _day === dayformated
      ) {
        resultArr.push(element);
      }
    });
    //console.log('date formated', dayformated);

    console.log(resultArr);
    return resultArr;
  }, [selectedDate]);
  //console.log('asf',selectedDate);

  return (
    <div className="event__block">
      <Calendar
        onChange={setDate}
        value={date}
        onClickDay={(value) => setSelectedDate(value)}
      />
      <div className="upcoming__event">
        <div className="upcoming__event-header">
          <h1>Upcoming Event</h1>
          <button>View All</button>
        </div>
        <div className="today">
          <p>{date.toDateString()}</p>
        </div>
        {filteredEvent.map((item, index) => {
          return <CardEvent key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default EventBlock;
