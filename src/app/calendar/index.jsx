import React, { useState, useEffect } from "react";
import moment from "moment";
import Header from "./header";
import "./styles.css";
import fullCalendar from "./build";
import dayStyles from "./styles";
import PostRender from "./postRender";
export default function Calendar() {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(fullCalendar(value));
  }, [value]);

  return (
    <div>
      <div>
        <div className="calendar">
          <div className="body">
            <Header value={value} setValue={setValue} />

            <div className="day-names">
              {[
                "sunday",
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday",
                "saturday",
              ].map((d) => (
                <div className="week">{d}</div>
              ))}
            </div>
            {calendar.map((week) => (
              <div>
                {week.map((day) => (
                  <div className="day" onClick={() => setValue(day)}>
                    <div className={dayStyles(day, value)}>
                      {day.format("D").toString()}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <PostRender />
    </div>
  );
}
