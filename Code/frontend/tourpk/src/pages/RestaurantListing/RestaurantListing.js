import React, { useEffect, useState } from 'react'
import styles from './RestaurantListing.module.css'
import { useLocation } from "react-router";
import { Button, CircularRating, Carousel } from '../../components';
import ReviewForm from '../../components/ReviewForm.js/ReviewForm';
import axiosInstance from '../../utils/Api';

export default function RestaurantListing() {
    const location = useLocation();
    const restaurant = location.state;
    const [reviews, setReviews] = useState([]);
    const [reviewsAvg, setReviewsAvg] = useState();

    const getReviews = async (id) => {
        console.log("id of reviews --- > ", id);
        const reviews = await axiosInstance.get(`/review/getReviewsByServiceId/${id}`);
        // setReviews(reviews.data);
        // setReviewsAvg();
        console.log(reviews.data)
    }
    useEffect(() => {
        getReviews(location.state.serviceObj.id);
    }, [])

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
                                    <h2 className={styles.subHeading}>{restaurant.serviceObj.name}</h2>
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
                                    <p className={styles.ratingText}>Based on {reviews.length} Reviews</p>
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