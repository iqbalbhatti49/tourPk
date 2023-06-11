import React from 'react';
import 'react-calendar/dist/Calendar.css';
import './BookingCalendar.module.css'; // Custom styling for the calendar
import { Calendar } from 'react-calendar';

export const BookingCalendar = ({ selectedDate, onDateChange }) => {
  const disabledDates = [new Date(2023, 4, 15), new Date(2023, 4, 25)];

  const isDateDisabled = (date) => {
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

  return <Calendar tileDisabled={tileDisabled} onChange={handleDateChange} value={selectedDate} />;
};
