import React, { useState } from "react";
import { Calendar as CalendarComponent } from "react-calendar";
import Time from "./Time";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  return (
    <div className="calendar__block">
      <CalendarComponent
        onChange={setDate}
        value={date}
        onClickDay={() => setShowTime(true)}
      />
      {/* {date.toDateString()} */}
    </div>
  );
};

export default Calendar;
