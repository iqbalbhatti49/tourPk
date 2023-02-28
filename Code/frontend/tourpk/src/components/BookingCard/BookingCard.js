import React from 'react'
import styles from './BookingCard.module.css'
import { bookings } from '../../bookingsDetails'

export default function BookingCard() {
  return (
    <>
    { bookings.map((item) => {
        return (
            <div className={styles.card} key={item.bookingId}>
            <img src="../../static/images/booking.png" alt="yy" className={styles.image} />
            <div className={styles.details}>
              <div className={styles.row}>
                <h2>{item.packageName}</h2>
              </div>
              <div className={styles.row}>
                <p>Name: {item.customerName}</p>
              </div>
              <div className={styles.row}>
                <p>Phone: {item.contact}</p>
              </div>
            </div>
            <div className={styles.details}>
              <div className={styles.row}>
                <h2 className={styles.hide}>-</h2>
              </div>
            
              <div className={styles.row}>
                <p>Date: {item.date}</p>
              </div>
              <div className={styles.row}>
                <p>CNIC: {item.cnic}</p>
              </div>
            </div>
          </div>
        )
    })}  
    </>
  )
}
