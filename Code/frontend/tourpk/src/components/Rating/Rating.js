import React from 'react'
import styles from './Rating.module.css'
import { CircularRating } from '../CircularRating/CircularRating';
export default function Rating({ rating }) {
  return (
    <div className={styles.ratingPricing}>
      <h2 className={styles.subHeading}>Ratings</h2>
      <div className={styles.rating}>
        <CircularRating rating={rating} />
      </div>
    </div>
  );
}


