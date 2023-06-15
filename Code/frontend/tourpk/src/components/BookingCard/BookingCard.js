import React, { useEffect, useState } from 'react'
import styles from './BookingCard.module.css'
import { useSelector } from 'react-redux'
import axiosInstance from '../../utils/Api';
import { Link } from 'react-router-dom';

export default function BookingCard() {
  const booking = useSelector((state) => state.bookings.currentBookings);
  const userId = useSelector(state => state.user.id);

  const [bookings, setBookings] = useState();

  const getMyBookings = async () => {
    const data = await axiosInstance.get(`/service/Bookings/${userId}`);
    setBookings(data.data);
  };

  useEffect(() => {
    getMyBookings()
  }, [])

  if (!bookings)
    return <div>Loading...</div>

  return (
    <>
      {bookings.tourguideBookings && bookings.tourguideBookings.length > 0 && (
        <div>
          <h2>Tour Guide Bookings</h2>
          {bookings.tourguideBookings.map((booking) => (
            <div className={styles.card} key={booking.bookingDate}>
              <img src="../../static/images/booking.png" alt="yy" className={styles.image} />
              <div className={styles.details}>
                <div className={styles.row}>
                  <Link to={`/tourGuideListing/${booking.TourGuide.id}`} >
                    <h2 className={styles.subHeading}>{booking.TourGuide.Service.name}</h2>
                  </Link>
                </div>
                <div className={styles.row}>Booking Date: {booking.bookingDate}</div>
                <div className={styles.row}>Price: Rs. {booking.totalPrice}</div>
                <div className={styles.row}>Customer Name: {booking.User.name}</div>
                <div className={styles.row}>Phone Number: {booking.User.phoneNumber}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {bookings.hotelBookings && bookings.hotelBookings.length > 0 && (
        <div>
          <h2>Hotel Bookings</h2>
          {bookings.hotelBookings.map((booking) => (
            <div className={styles.card} key={booking.startDate}>
              <img src="../../static/images/booking.png" alt="yy" className={styles.image} />
              <div className={styles.details}>
                <div className={styles.row}>
                  <Link to={`/hotelListing/${booking.Hotel.id}`} >
                    <h2 className={styles.subHeading}>{booking.Hotel.Service.name}</h2>
                  </Link>
                </div>
                <div className={styles.row}>Start Date: {booking.startDate}</div>
                <div className={styles.row}>Price: Rs. {booking.totalPrice}</div>
                <div className={styles.row}>Customer Name: {booking.User.name}</div>
                <div className={styles.row}>Phone Number: {booking.User.phoneNumber}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {bookings.travelAgentBookings && bookings.travelAgentBookings.length > 0 && (
        <div>
          <h2>Travel Agent Bookings</h2>
          {bookings.travelAgentBookings.map((booking) => (
            <div className={styles.card} key={booking.bookingDate}>
              <img src="../../static/images/booking.png" alt="yy" className={styles.image} />
              <div className={styles.details}>
                <div className={styles.row}>
                  <Link to={`/TravelAgentListing/${booking.TravelAgent.id}`} >
                    <h2 className={styles.subHeading}>{booking.TravelAgent.Service.name}</h2>
                  </Link>
                </div>
                <div className={styles.row}>Booking Date: {booking.bookingDate}</div>
                <div className={styles.row}>Price: Rs. {booking.totalPrice}</div>
                <div className={styles.row}>Customer Name: {booking.User.name}</div>
                <div className={styles.row}>Phone Number: {booking.User.phoneNumber}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
