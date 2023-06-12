import React from 'react';
import 'react-calendar/dist/Calendar.css';
import './BookingCalendar.module.css'; // Custom styling for the calendar
import { Calendar } from 'react-calendar';

export const BookingCalendar = ({disabledDates, selectedDate, onDateChange }) => {
  // const disabledDates = [new Date(2023, 4, 15), new Date(2023, 4, 25)];
  console.log(disabledDates)
  const isDateDisabled = (date) => {
    if (disabledDates === null || disabledDates === undefined) {
      return false; // or return true, depending on your requirements
    }
    // if (date.getDay() === 0 || date.getDay() == 6) {
    //   return true;
    // }
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return disabledDates.some(
      (disabledDate) =>
        disabledDate.getFullYear() === year &&
        disabledDate.getMonth() === month &&
        disabledDate.getDate() === day
    );
  };

  const tileDisabled = ({ date }) => {
    if (isDateDisabled(date)) {
      return (
        <div className="disabled-date">
          <div className="disabled-date-inner">{date.getDate()}</div>
        </div>
      );
    }
    return null;
  };

  const handleDateChange = (date) => {
    onDateChange(date);
  };

  return <Calendar selectRange={false} tileDisabled={tileDisabled} onChange={handleDateChange} value={selectedDate} />;
};
