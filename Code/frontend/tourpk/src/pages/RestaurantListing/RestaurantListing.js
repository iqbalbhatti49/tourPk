import React, { useEffect, useState } from 'react'
import styles from './RestaurantListing.module.css'
import { useLocation } from "react-router";
import { Button, CircularRating, Carousel, Testimonial, Rating } from '../../components';
import ReviewForm from '../../components/ReviewForm.js/ReviewForm';
import axiosInstance from '../../utils/Api';
import { useParams } from 'react-router-dom';
import { getReviewsStats } from '../../utils/FindReviewStats';

export default function RestaurantListing() {
    const location = useLocation();
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [reviewCount, setreviewCount] = useState(null);
    const [ratingAverge, setratingAverge] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isReviewsAvailable, setisReviewsAvailable] = useState(true);

    const getRestaurant = async () => {
        try {
            const response = await axiosInstance.get(`/restaurant/getRestaurantById/${id}`);
            const { Service: { Reviews, ...serviceData }, RestaurantImages, ...restData } = response.data;
            const Restaurant = restData;
            const Service = serviceData;
            const restaurantData = {
                Service,
                Restaurant,
                Reviews,
                RestaurantImages
            };
            const { reviewsCount, ratingAvg } = getReviewsStats(Reviews);
            setratingAverge(ratingAvg);
            setreviewCount(reviewsCount);
            setData(restaurantData);
            if (restaurantData.hasOwnProperty("Reviews"))
                setisReviewsAvailable(true);
            else
                setisReviewsAvailable(false);
            // console.log(reviewsCount, "---", ratingAvg);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    useEffect(() => {
        getRestaurant();
        console.log(location.state);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.information}>
                    <h1 className={styles.heading}>{data.Service.name}</h1>
                    <div className={styles.attributesContainer}>
                        {Object.entries(data.Restaurant).map(([key, value]) => (
                            key !== 'ServiceId' && key !== 'id' && key !== 'UserId' ? (
                                <div className={styles.attributes} key={key}>
                                    <p className={styles.key}>{key}</p>
                                    <p>{value}</p>
                                </div>
                            ) : null
                        ))}
                        <div className={styles.attributes}>
                            <p className={styles.key}>Website </p>
                            <p>{data.Service.website}</p>
                        </div>
                    </div>
                </div>
                <Carousel imageList={data.RestaurantImages} />
            </div>

            <div className={styles.details}>
                <div className={styles.about}>
                    <div>
                        <h2 className={styles.subHeading}>Restaurant Description</h2>
                        <p className={styles.description}>
                            {data.Service.description}
                        </p>
                    </div>
                    <div>
                        <div className={styles.contactInfo}>
                            <h2 className={styles.subHeading}>{data.Service.name}</h2>
                            <div className={styles.attributesContainer}>
                                {Object.entries(data.Service).map(([key, value]) => (
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

                    {isReviewsAvailable && <div>
                        <h2 className={styles.subHeading}>People's Opinion</h2>
                        <Testimonial />
                    </div>
                    }

                </div>
                <div>
                    {isReviewsAvailable &&
                        <div>
                            <Rating rating={ratingAverge} />
                            <p className={styles.ratingText}>Based on {reviewCount} Reviews</p>
                        </div>
                    }
                    <div className={styles.booking}>
                        <Button value="Book Now" />
                    </div>
                </div>
            </div>
            <ReviewForm serviceId={data.Service.id} />
        </div>
    );
}