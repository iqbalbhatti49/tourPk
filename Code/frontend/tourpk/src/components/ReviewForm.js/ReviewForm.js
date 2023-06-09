import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import styles from './ReviewForm.module.css';
import { Form as FormFinal } from 'react-final-form'
import FormField from '../FormField/FormField';
import { required } from '../../utils/validations';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';
import axiosInstance from '../../utils/Api';

const ReviewForm = ({ serviceId }) => {
    const userId = useSelector(state => state.user.id);
    const [rating, setRating] = useState(0);
    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };
    const apiRequest = async (review) => {
        await axiosInstance.post("/review/addReview", review);
    }

    const onSubmit = (values, form) => {
        const review = {
            UserId: userId,
            ServiceId: serviceId,
            rating: rating,
            ...values
        }
        setRating(0);
        form.reset();
        apiRequest(review);
    };

    return (
        <div className={styles.container}>
            <h3>Add a Review</h3>
            <div className={styles.formBorder}>
                <div className={styles.formContainer}>
                    <FormFinal onSubmit={onSubmit} subscription={{ submitted: true }} >
                        {({ handleSubmit, submitting, values }) => (
                            <form onSubmit={handleSubmit}>
                                <div className={styles.ratingContainer}>
                                    <label htmlFor="rating">Rating </label>
                                    <StarRatings
                                        rating={rating}
                                        starRatedColor="#FFD700"
                                        changeRating={handleRatingChange}
                                        numberOfStars={5}
                                        starDimension="20px"
                                        starSpacing="2px"
                                        name="rating"
                                    />
                                </div>
                                <div className={styles.reviewTextContainer}>
                                    <FormField name="review" label="Your reviews" type="text" placeholder="How was your experience?" validate={required} renderIcon={() => null} theme="light" />
                                </div>
                                <Button value={"Submit Review"} type="primary" btnType="submit" width={150} />
                            </form>
                        )}
                    </FormFinal>
                </div>
            </div>
        </div>
    );
};

export default ReviewForm;