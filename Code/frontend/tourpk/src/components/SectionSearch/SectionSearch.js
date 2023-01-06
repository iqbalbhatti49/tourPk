import React from 'react';
import Button from '../Button/Button';
import styles from './SectionSearch.module.css';
import { IconLocation } from '../../components/IconLocation/IconLocation';
import { IconCalendar } from '../../components/IconCalendar/IconCalendar';

export const SectionSearch = () => {
   return (
      <div className={styles.container}>
         <img className={styles.image} alt="Cities" src="../../static/images/searchSectionBg.png" />
         <div className={styles.content}>
            <p>Let's Your Curiosity do the booking!</p>
            <div className={styles.actions}>
               <div className={styles.inputIconed}>
                  <IconLocation />
                  <div className={styles.inputLabeled}>
                     <label htmlFor="location">Location</label>
                     <input name="location" type="text" placeholder="Lahore, Pakistan" />
                  </div>
               </div>
               <div className={styles.divider}></div>
               <div className={styles.inputIconed}>
                  <IconCalendar />
                  <div className={styles.inputLabeled}>
                     <label htmlFor="date">Date</label>
                     <input name="date" type="text" placeholder="04 Aug,2023" />
                  </div>
               </div>

               <Button type="primary" value="Search" />
            </div>
         </div>
      </div>
   );
};
