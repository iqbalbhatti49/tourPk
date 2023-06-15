import React from 'react';
import 'react-calendar/dist/Calendar.css';
import './BookingCalendar.module.css';
import { Calendar } from 'react-calendar';

export const BookingCalendar = ({ disabledDates, selectedDate, onDateChange, selectRange }) => {
  console.log(disabledDates);
  const isDateDisabled = (date) => {
    if (disabledDates === null || disabledDates === undefined) {
      return false;
    }
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
    if (selectRange && Array.isArray(date) && date.length === 2) {
      const [startDate, endDate] = date;
      onDateChange({ startDate, endDate });
    } else {
      onDateChange(date);
    }
  };

  return (
    <Calendar
      selectRange={selectRange}
      tileDisabled={tileDisabled}
      onChange={handleDateChange}
      minDate	= {new Date()}
      allowPartialRange	= {true}
    />
  );
};
