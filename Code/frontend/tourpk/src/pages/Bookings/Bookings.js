import React from 'react'
import { Footer, NavBar, BookingsSidebar, BookingCard } from '../../components/index'
import styles from './Bookings.module.css'

export default function Bookings() {
    return (
        <>
            <h1 className={styles.heading1}>My Bookings</h1>
            <div className={styles.container}>
                <div className={styles.bookingsList}>
                    <p className={styles.bookingText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in quo veritatis praesentium laborum fugiat impedit nobis sequi unde quos, dolore quae et, nam fugit ut, quidem autem ullam nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <BookingCard />
                </div>
                <BookingsSidebar />
            </div>
        </>
    )
}
