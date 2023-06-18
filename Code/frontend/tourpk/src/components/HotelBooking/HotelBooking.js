import React, { useState, useEffect } from 'react';
import styles from './HotelBooking.module.css';
import { Button } from '../../components';
import { BookingCalendar } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart, addItem } from '../../app/features/cart/cartSlice';
import swal from 'sweetalert';
import axiosInstance from '../../utils/Api';

export default function HotelBooking({ hotelName, roomCount, hotelId, imgSrc, roomId, price }) {
  const discount = useSelector(state => state.pricing.discount);
  const dispatch = useDispatch();
  const role = useSelector((state) => state.user.role);
  const [selectedDate, setSelectedDate] = useState(null);
  const [disabledDatesArr, setDisabledDates] = useState(null);
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.user.id);
  const [validRange, setValidRange] = useState(true)
  useEffect(() => {
    const getBookings = async () => {
      try {
        const response = await axiosInstance.get('/hotel/getBookingsByIds', {
          params: {
            hotelId,
            roomId
          }
        });
        const bookingsCountByDate = {};
        response.data.bookings.forEach(booking => {
          const startDate = new Date(booking.startDate);
          const endDate = booking.numberOfDays === 1 ? startDate : new Date(startDate.getTime() + (booking.numberOfDays - 1) * 24 * 60 * 60 * 1000);

          const currentDate = new Date(startDate);
          while (currentDate <= endDate) {
            const formattedDate = currentDate.toISOString().split('T')[0];
            if (!bookingsCountByDate[formattedDate]) {
              bookingsCountByDate[formattedDate] = 0;
            }
            bookingsCountByDate[formattedDate]++;
            currentDate.setDate(currentDate.getDate() + 1);
          }
        });

        // Generate disabled dates array
        const disabledDates = [];
        Object.entries(bookingsCountByDate).forEach(([date, count]) => {
          if (count >= roomCount) { // Compare with roomCount + 1
            const disabledDate = new Date(date);
            disabledDate.setDate(disabledDate.getDate());
            disabledDates.push(disabledDate);
          }
        });
        setDisabledDates(disabledDates);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    getBookings();
  }, [roomId, hotelId, roomCount]);


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
    if (!validRange) {
      swal({
        title: 'Invalid Range',
        text: 'First select an available date range from the calendar.',
        icon: 'error',
        buttons: {
          confirm: true,
        },
      });
      return;
    }
    dispatch(clearCart());
    let numberOfDays = 0;
    if (selectedDate.endDate != null) {
      const startDate = new Date(selectedDate.startDate);
      const endDate = new Date(selectedDate.endDate);

      if (startDate.getMonth() === endDate.getMonth()) {
        numberOfDays = (endDate.getDate() - startDate.getDate()) + 1;
      } else if (selectedDate.endDate != false) {
        const startMonthDays = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate();
        const startDaysRemaining = startMonthDays - startDate.getDate() + 1;
        const endDays = endDate.getDate();

        numberOfDays = startDaysRemaining + endDays;
      } else {
        numberOfDays = 1;
      }
    }

    const pricing = numberOfDays * price;
    const newItem = {
      imageSrc: imgSrc,
      title: hotelName,
      count: 1,
      price: pricing,
      discountedPrice: pricing - (pricing * (discount / 100)),
    };
    dispatch(addItem(newItem));
    const hotel = {
      startDate: selectedDate.startDate,
      numberOfDays: numberOfDays,
      totalPrice: pricing,
      userId: currentUser,
      hotelId: hotelId,
      roomId: roomId,
      endDate: selectedDate.endDate
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
          setValidRange={setValidRange}
        />
        {role == "tourist" && <Button value="Book Now" btnType="submit" handleClick={onSubmit} />}
      </div>
    </div>
  );
}
