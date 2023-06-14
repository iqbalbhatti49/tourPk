import React, { useState } from 'react';
import styles from './HotelBooking.module.css';
import { Button } from '../../components';
import { BookingCalendar} from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart, addItem } from '../../app/features/cart/cartSlice';
import swal from 'sweetalert';

export default function HotelBooking({ hotelName, hotelId, imgSrc, roomId, price }) {
  const discount = useSelector(state => state.pricing.discount);
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);
  const [disabledDatesArr, setDisabledDates] = useState(null);
  const navigate = useNavigate();

  const currentUser = useSelector(state => state.user.id);

  const handleDateChange = (dates) => {
    const startDate = dates.startDate;
    const endDate = dates.endDate;

    const formatDateString = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const formattedStartDate = startDate != null && formatDateString(startDate);
    const formattedEndDate = endDate != null && formatDateString(endDate);

    console.log("Start Date:", formattedStartDate);
    console.log("End Date:", formattedEndDate);

    setSelectedDate({ startDate: formattedStartDate, endDate: formattedEndDate });
  };

  const onSubmit = () => {
    if (selectedDate === null || selectedDate.startDate === null) {
      swal({
        title: 'Date Missing',
        text: 'First select an available date from the calendar.',
        icon: 'error',
        buttons: {
          confirm: true,
        },
      });
      return;
    }
    dispatch(clearCart());
    let numberOfDays = 0;
    console.log(selectedDate)
    if (selectedDate.endDate != null) {
      const startDate = new Date(selectedDate.startDate);
      const endDate = new Date(selectedDate.endDate);

      if (startDate.getMonth() === endDate.getMonth()) {
        console.log("Same")
        numberOfDays = (endDate.getDate() - startDate.getDate()) + 1;
      } else if (selectedDate.endDate != false) {
        console.log("Not Same")
        const startMonthDays = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate();
        const startDaysRemaining = startMonthDays - startDate.getDate() + 1;
        const endDays = endDate.getDate();

        numberOfDays = startDaysRemaining + endDays;
      }else {
        numberOfDays = 1; 
      }
    } 

console.log(numberOfDays);

    const pricing = numberOfDays * price;
    const newItem = {
      imageSrc: imgSrc,
      title: hotelName,
      count: 1,
      price: pricing,
      discountedPrice: pricing - (pricing * (discount / 100)),
    };
    console.log(newItem);
    dispatch(addItem(newItem));
    const hotel = {
      startDate: selectedDate.startDate,
      numberOfDays: numberOfDays,
      totalPrice: pricing,
      userId: currentUser,
      hotelId: hotelId,
      roomId: roomId,
    };
    navigate("/checkout", { state: { hotel } });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.subHeading}>Booking Calendar</h2>
      <div className={styles.calendar}>
        <BookingCalendar
          disabledDates={disabledDatesArr}
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
          selectRange={true}
        />   
        <Button value="Book Now" btnType="submit" handleClick={onSubmit} />
      </div>
    </div>
  );
}
