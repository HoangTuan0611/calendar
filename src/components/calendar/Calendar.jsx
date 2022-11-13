import React, { useState, useMemo } from "react";
import { Calendar as CalendarComponent } from "react-calendar";
import { events } from "../../data/fake-data";
import dayjs from "dayjs";
import Format from "../../helper/Format";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  const eventD = useMemo(() => {
    let resultD = [];
    events.forEach((item) => {
      resultD.push({ time: item.from, title: item.title });
    });
    return resultD;
  }, [events]);

  return (
    <div className="calendar__block">
      <CalendarComponent
        onChange={setDate}
        value={date}
        onClickDay={() => setShowTime(true)}
        tileContent={({ date, view }) => {
          // console.log("eventD", eventD);
          // eventD.forEach((item) => {
          //   return console.log("item", Number(dayjs(item).format("MM")));
          // });
          const _temp = eventD.filter(
            // dayjs month return 1 -12, but getMonth() of JS language return 0 -11
            (item) =>
              Number(Format.formartD(item.time, "DD")) ===
                Number(date.getDate()) &&
              Number(Format.formartD(item.time, "MM")) ===
                Number(date.getMonth() + 1) &&
              Number(Format.formartD(item.time, "YYYY")) ===
                Number(date.getFullYear())
          );
          return _temp && view === "month" ? (
            <div className="content__events">
              {_temp.map((item, index) => {
                return <p key={index}> {item.title} </p>;
              })}
            </div>
          ) : null;
        }}
      />
    </div>
  );
};

export default Calendar;
