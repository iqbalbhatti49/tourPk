import React from 'react';
import { IconStar } from '../IconStar/IconStar';
import styles from './SellerProfile.module.css';

const SellerProfile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile_image}>
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/16/b5/28/avari-hotel-lahore.jpg?w=700&h=-1&s=1" alt="" />
      </div>
      <div className={styles.profile_info}>
        <div className={styles.profile_name}>
          <h3>Hosted by Rida</h3>
          <p id={styles.date}>Joined March 2022</p>
        </div>
       
        <p className={styles.profile_reviews}>
            <span > <span className={styles.profilestar}> <IconStar/> </span>  15 reviews</span>
        </p>
        <div className={styles.profile_tagline}>
          <p>We not only sell it. We make you live it</p>
        </div>
        <div className={styles.profile_response}>
          <p>Response Rate: 100%</p>
          <p>Response Time: within an hour</p>
        </div>
        <button className={styles.profile_button}>Contact Host</button>
      </div>
    </div>
  );
};

export default SellerProfile;
