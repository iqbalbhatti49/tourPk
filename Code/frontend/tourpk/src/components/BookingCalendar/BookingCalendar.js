import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './BookingCalendar.module.css';
import { Calendar } from 'react-calendar';

export const BookingCalendar = ({ disabledDates, setValidRange, selectedDate, onDateChange, selectRange }) => {
  const [prevSelectedDate, setPrevSelectedDate] = useState(null);

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
      const isRangeValid = !disabledDates.some((disabledDate) =>
        isDateInRange(disabledDate, startDate, endDate)
      );

      if (isRangeValid) {
        setPrevSelectedDate(date);
        setValidRange(true);
        onDateChange({ startDate, endDate });
      } 
      else {
        if (prevSelectedDate) {
          swal({
            title: 'Invalid Selection',
            text: 'The selected date range includes disabled dates.',
            icon: 'error',
            buttons: {
              confirm: true,
            },
          });
        }
        onDateChange({startDate:null,endDate:null});
        setValidRange(false);
      }
    } else {
      setValidRange(true);
      setPrevSelectedDate(date);
      onDateChange(date);
    }
  };

  const isDateInRange = (dateToCheck, startDate, endDate) => {
    return dateToCheck >= startDate && dateToCheck <= endDate;
  };

  return (
    <Calendar
      selectRange={selectRange}
      tileDisabled={tileDisabled}
      onChange={handleDateChange}
      selectedDate = {selectedDate}
      minDate={new Date()}
      allowPartialRange={true}
    />
  );
};
