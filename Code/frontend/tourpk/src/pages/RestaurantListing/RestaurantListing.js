import React from 'react'
import styles from './RestaurantListing.module.css'
import { useLocation } from "react-router";

export default function RestaurantListing() {
    const location = useLocation();
    console.log("location.restaurantAdded >>>>> ", location.restaurantAdded);

    return (
        <div className={styles.container}>

        </div>
    );
}
