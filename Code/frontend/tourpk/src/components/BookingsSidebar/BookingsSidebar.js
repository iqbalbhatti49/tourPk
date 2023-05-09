import React from 'react'
import styles from './BookingsSidebar.module.css'
import { useSelector } from 'react-redux'

export default function BookingsSidebar() {
    const bookings = useSelector((state) => state.bookings.totalBookings);
    const earnings = useSelector((state) => state.bookings.totalEarnings);

    return (
        <div className={styles.icons}>
            <div className={styles.imgContainer}>
                <img id={styles.earning} src="../../static/images/earnings.png" alt="" />
                <p className={styles.count}>Rs. {earnings}</p>
            </div>
            <div className={styles.imgContainer}>
                <img id={styles.earning} src="../../static/images/totalBookings.png" alt="" />
                <p className={styles.count}>{bookings}</p>
            </div>
        </div>)
}
