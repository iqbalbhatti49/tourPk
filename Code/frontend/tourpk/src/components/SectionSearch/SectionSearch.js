import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './SectionSearch.module.css';
import { IconLocation } from '../../components/IconLocation/IconLocation';
import { IconCalendar } from '../../components/IconCalendar/IconCalendar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LocationPicker from '../LocationPicker/LocationPicker';

export const SectionSearch = () => {
   const [startDate, setStartDate] = useState(new Date());
   const [isVisible, setIsVisible] = useState(false);
   const [locationValue, setLocationValue] = useState("");

   function showLocationPicker() {
      setIsVisible(true);
   }

   function hideLocationPicker() {
      setIsVisible(false);
   }

   function handleLocationChange(location) {
      setLocationValue(`${location.lat},${location.lng}`);
      hideLocationPicker();
   }

   return (
      <div className={styles.container}>
         <img className={styles.image} alt="Cities" src="../../static/images/searchSectionBg.png" />
         <div className={styles.content}>
            <p>Let's Your Curiosity do the booking!</p>
            <div className={styles.actions}>
               <div className={styles.inputIconed}>
                  <IconLocation />
                  <div className={styles.inputLabeled}>
                     <label className={styles.sLabel} htmlFor="location">Location</label>
                     <input name="location" type="text" placeholder="Lahore, Pakistan" onClick={showLocationPicker} value={locationValue} />
                  </div>
               </div>
               {isVisible && (
                  <div className={styles.popUp}>
                     <LocationPicker onClose={hideLocationPicker} onChange={handleLocationChange} />
                  </div>
               )}
               <div className={styles.divider}></div>
               <div className={styles.inputIconed}>
                  <IconCalendar />
                  <div className={styles.inputLabeled}>
                     <label htmlFor="Date">Date</label>
                     <DatePicker showIcon selected={startDate} />
                  </div>
               </div>
               <Button type="primary" value="Search" />
            </div>
         </div>
      </div>
   );
};
