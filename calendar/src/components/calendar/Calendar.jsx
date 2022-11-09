import React, { useState } from "react";
import { Calendar as CalendarComponent } from "react-calendar";
import Time from "./Time";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  return (
    <>
      <CalendarComponent
        onChange={setDate}
        value={date}
        onClickDay={() => setShowTime(true)}
      />
      {date.length > 0 ? (
        <p>
          <span>Start:</span>
          {date[0].toDateString()}
          &nbsp; &nbsp;
          <span>End:</span>
          {date[1].toDateString()}
        </p>
      ) : (
        <p>
          <span>Default selected date:</span>
          {date.toDateString()}
        </p>
      )}
      <Time showTime={showTime} date={date} />
    </>
  );
};

export default Calendar;
