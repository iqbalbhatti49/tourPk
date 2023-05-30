// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// export const BookingCalendar = () => {
//    const [selectedDate, setSelectedDate] = useState(null);
//    const disabledDates = [new Date(2023, 4, 15), new Date(2023, 4, 17)];
//    const handleDateChange = (date) => {
//       setSelectedDate(date);
//    };

//    const isDateDisabled = (date) => {
//       return disabledDates.some((disabledDate) =>
//          !isSameDay(disabledDate, date)
//       );
//    };

//    const isSameDay = (dateA, dateB) => {
//       return (
//          dateA.getDate() === dateB.getDate() &&
//          dateA.getMonth() === dateB.getMonth() &&
//          dateA.getFullYear() === dateB.getFullYear()
//       );
//    };

//    return (
//       <DatePicker
//          selected={selectedDate}
//          onChange={handleDateChange}
//          filterDate={isDateDisabled}
//          inline
//       />
//    );
// };
import React from 'react';
import 'react-calendar/dist/Calendar.css';
import './BookingCalendar.module.css'; // Custom styling for the calendar
import { Calendar } from 'react-calendar';

export const BookingCalendar = () => {
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

   return <Calendar tileDisabled={tileDisabled} />;
};

