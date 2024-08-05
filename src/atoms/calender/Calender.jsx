// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the default stylesheet

// Import custom stylesheet
import "./MyCalendar.css";

export const MyCalendar = () => {
  const [date, setDate] = useState(new Date()+1);

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">School Calendar</h2>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date, view }) => {
          if (view === "month") {
            if (
              date.getDate() === new Date().getDate() &&
              date.getMonth() === new Date().getMonth() &&
              date.getFullYear() === new Date().getFullYear()
            ) {
              return "highlight-current-date";
            }
          }
          return null;
        }}
      />
    </div>
  );
};


