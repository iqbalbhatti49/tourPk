import React from 'react'
import BookingCard from '../../components/BookingCard/BookingCard'
import BookingsSidebar from '../../components/BookingsSidebar/BookingsSidebar'
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
                <BookingsSidebar/>
            </div>
            <Footer />
        </>
    )
}
