import React, { useEffect, useState } from "react";
import "./Timeout.css";

export const Timeout = () => {
  const [timeLeft, setTimeLeft] = useState(calculateRemainingTime());

  // to update the time every 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateRemainingTime());
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const timerComponents = [];

  /* traverse through the timeLeft Object
   * for making the timer UI component */
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    // console.log(interval);
    timerComponents.push(
      <span className={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  console.log(timeLeft);

  /* main function for calculating the time remaining
   * from the current date */
  function calculateRemainingTime() {
    const year = new Date().getFullYear();

    var eventDate = `09/23/${year}`; // MM-DD-YYYY (31st Dec)

    /* difference holds the time difference in
     * milliseconds of the event date from the
     * current date. */
    const difference = +new Date(eventDate) - +new Date();
    let timeRemaining = {};

    if (difference > 0) {
      timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeRemaining;
  }

  // rendering the final UI
  return (
    <div className="timerComponent">
      <h1 className="eventName">До мероприятия осталось:</h1>
      <div className="timer">{timerComponents.length ? timerComponents : <span>00:00:00</span>}</div>
    </div>
  );
};
