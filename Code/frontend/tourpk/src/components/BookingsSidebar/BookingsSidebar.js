import React from 'react'
import styles from './BookingsSidebar.module.css'

export default function BookingsSidebar() {
    return (
        <div className={styles.icons}>
            <div className={styles.imgContainer}>
                <img id={styles.earning} src="../../static/images/earnings.png" alt="" />
                <p className={styles.count}>Rs. 5000</p>
            </div>
            <div className={styles.imgContainer}>
                <img id={styles.earning} src="../../static/images/totalBookings.png" alt="" />
                <p className={styles.count}>17</p>
            </div>
        </div>)
}
