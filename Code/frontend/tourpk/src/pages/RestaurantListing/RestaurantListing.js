import React from 'react'
import styles from './RestaurantListing.module.css'
import { useLocation } from "react-router";
import { BookingCalendar, Button, CircularRating, Carousel } from '../../components';
import ReviewForm from '../../components/ReviewForm.js/ReviewForm';

export default function RestaurantListing() {
    const location = useLocation();
    console.log("location.restaurantAdded >>>>> ", location.state);
    const restaurant = location.state;
    const address = location.state.serviceObj.address + "  " + location.state.serviceObj.city + ",  " + location.state.serviceObj.province + ",  " + location.state.serviceObj.country;

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.information}>
                            <h1 className={styles.heading}>{restaurant.serviceObj.name}</h1>
                            <div className={styles.attributesContainer}>
                                {Object.entries(location.state.restaurantObj).map(([key, value]) => (
                                    key !== 'ServiceId' && key !== 'id' ? (
                                        <div className={styles.attributes} key={key}>
                                            <p className={styles.key}>{key}</p>
                                            <p>{value}</p>
                                        </div>
                                    ) : null
                                ))}
                            </div>
                        </div>
                        <Carousel imageList={location.state.images} />
                    </div>

                    <div className={styles.details}>
                        <div className={styles.about}>
                            <div>
                                <h2 className={styles.subHeading}>Restaurant Description</h2>
                                <p className={styles.description}>
                                    {restaurant.serviceObj.description}
                                </p>
                            </div>
                            <div>
                                <div className={styles.contactInfo}>
                                    <h1 className={styles.heading}>{restaurant.serviceObj.name}</h1>
                                    <div className={styles.attributesContainer}>
                                        {Object.entries(location.state.serviceObj).map(([key, value]) => (
                                            key !== 'id' && key !== 'name' && key !== 'description' ? (
                                                <div className={styles.attributes} key={key}>
                                                    <p className={styles.key}>{key}</p>
                                                    <p>{value}</p>
                                                </div>
                                            ) : null
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.ratingPricing}>
                                <h2 className={styles.subHeading}>Ratings</h2>
                                <div className={styles.rating}>
                                    <CircularRating rating={4.5} />
                                    <p className={styles.ratingText}>Based on 10 Reviews</p>
                                </div>
                            </div>
                            <div className={styles.booking}>
                                <Button value="Book Now" />
                            </div>
                        </div>
                    </div>
                </div>
                <ReviewForm serviceId={2} />
            </div>
        </div>
    );
}