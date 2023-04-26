import React from 'react';
import Button from '../Button/Button';
import styles from './SectionHero.module.css';
import { Link } from 'react-router-dom';
export const SectionHero = () => {
   return (
      <div className={styles.container}>
         <img className={styles.image} alt="Cities" src="../../static/images/sectionHero.png" />
         <div className={styles.content}>
            <div className={styles.heading}>
               <p>Explore Pakistan's beauty and culture with <span className={styles.logo}>tourPk</span></p>
            </div>
            <p className={styles.description}>
               Are you planning a vacation to enjoy your free time? Looking for a
               place to explore, eat and enjoy your vacation with your loved ones
               or Are you a solo traveler who travels often for a wonderful
               experiences.
            </p>
            <Link to="/services">
               <Button value="Book Now" type="primary" />
            </Link>
         </div>
      </div>
   );
};
