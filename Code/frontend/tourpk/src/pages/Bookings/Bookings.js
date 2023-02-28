import React from 'react'
import BookingCard from '../../components/BookingCard/BookingCard'
import { Footer } from '../../components/Footer/Footer'
import { NavBar } from '../../components/NavBar/NavBar'
import styles from './Bookings.module.css'

export default function Bookings() {
    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.bookingsList}>
                    <h1>My Bookings</h1>
                    <p className={styles.bookingText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in quo veritatis praesentium laborum fugiat impedit nobis sequi unde quos, dolore quae et, nam fugit ut, quidem autem ullam nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <BookingCard />
                </div>
                <div className={styles.icons}>
                    <div className={styles.imgContainer}>
                    <img id={styles.earning} src="../../static/images/earnings.png" alt="" />
                    <p className={styles.count}>Rs. 5000</p>
                    </div>
                    <div className={styles.imgContainer}>
                    <img id={styles.earning} src="../../static/images/totalBookings.png" alt="" />
                    <p className={styles.count}>17</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
