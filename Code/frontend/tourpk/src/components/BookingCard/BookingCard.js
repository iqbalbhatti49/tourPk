import React from 'react'
import styles from './BookingCard.module.css'
import { useSelector } from 'react-redux'

export default function BookingCard() {
  const bookings = useSelector((state) => state.bookings.currentBookings);

  return (
    <>
      {bookings.map((item) => {
        return (
          <div className={styles.card} key={item.bookingId}>
            <img src="../../static/images/booking.png" alt="yy" className={styles.image} />
            <div className={styles.details}>
              <div className={styles.row}>
                <h2>{item.packageName}</h2>
              </div>
              <div className={styles.row}> Name: {item.customerName} </div>
              <div className={styles.row}> Phone: {item.contact} </div>
            </div>
            <div className={styles.details}>
              <div className={styles.row}>
                <h2 className={styles.hide}>-</h2>
              </div>

              <div className={styles.row}> Date: {item.date} </div>
              <div className={styles.row}>CNIC: {item.cnic} </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
