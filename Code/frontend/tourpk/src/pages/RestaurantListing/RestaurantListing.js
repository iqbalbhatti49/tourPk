import React, { useEffect, useState } from 'react'
import styles from './RestaurantListing.module.css'
import { useLocation } from "react-router";
import { Button, CircularRating, Carousel, Testimonial } from '../../components';
import ReviewForm from '../../components/ReviewForm.js/ReviewForm';
import axiosInstance from '../../utils/Api';

export default function RestaurantListing() {
    const location = useLocation();
    const restaurant = location.state;
    const [reviews, setReviews] = useState([]);
    const [reviewsAvg, setReviewsAvg] = useState();

    const getReviews = async (id) => {
        const review = await axiosInstance.get(`/review/getReviewsByServiceId/${id}`);
        setReviews(review.data);
        console.log(review.data)
        let avg = 0;
        review.data.forEach(element => {
            console.log(element);
            avg += element.rating;
        });
        avg = (avg / (review.data.length)).toFixed(1);;
        setReviewsAvg(avg);
    }
    useEffect(() => {
        getReviews(location.state.serviceObj.id);
    }, [])

    return (
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
                        <div className={styles.attributes}>
                            <p className={styles.key}>Website </p>
                            <p>{location.state.serviceObj.website}</p>
                        </div>
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
                                    key !== 'id' && key !== 'name' && key !== 'description' && key !== 'website' ? (
                                        <div className={styles.attributes} key={key}>
                                            <p className={styles.key}>{key}</p>
                                            <p>{value}</p>
                                        </div>
                                    ) : null
                                ))}
                            </div>
                        </div>
                    </div>


                    <div>
                        <h2 className={styles.subHeading}>People's Opinion</h2>
                        <Testimonial />
                    </div>


                </div>
                <div>
                    <div className={styles.ratingPricing}>
                        <h2 className={styles.subHeading}>Ratings</h2>
                        <div className={styles.rating}>
                            <CircularRating rating={reviewsAvg} />
                            <p className={styles.ratingText}>Based on {reviews.length} Reviews</p>
                        </div>
                    </div>
                    <div className={styles.booking}>
                        <Button value="Book Now" />
                    </div>
                </div>
            </div>
            <ReviewForm serviceId={location.state.serviceObj.id} />
        </div>
    );
}