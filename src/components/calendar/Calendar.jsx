import React, { useState, useMemo } from "react";
import { Calendar as CalendarComponent } from "react-calendar";
import { events } from "../../data/fake-data";
import dayjs from "dayjs";

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
              Number(dayjs(item.time).format("DD")) ===
                Number(date.getDate()) &&
              Number(dayjs(item.time).format("MM")) ===
                Number(date.getMonth() + 1) &&
              Number(dayjs(item.time).format("YYYY")) ===
                Number(date.getFullYear())
          );
          //console.log("_temp", Number(date.getMonth()));
          //console.log("eventD title", eventD.title);
          console.log("_temp",_temp);
          return _temp && view === "month" ? (
            <p>
              {_temp.map((item) => {
               return <p> {item.title} </p>
              })}
            </p>
          ) : null;
        }}
      />
    </div>
  );
};

export default Calendar;
