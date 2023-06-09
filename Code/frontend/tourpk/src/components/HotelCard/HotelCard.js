import React from 'react';
import { Card, ImageHeader, CardBody } from 'react-simple-card';
import { IconStar } from '../IconStar/IconStar';
import { IconLocation } from '../IconLocation/IconLocation';
import styles from './HotelCard.module.css';

export const HotelCard = (props) => {
   const { hotel } = props
   return (
      <Card>
         <ImageHeader imageSrc={hotel.picture} />
         <CardBody>
            <div className={styles.body}>
               <p className={styles.title}>{hotel.name}</p>
               <div className={styles.location}>
                  <IconLocation />
                  <p className={styles.place}>{hotel.location}</p>
               </div>
               <p className={styles.place}>Rs. 500</p>
               <div className={styles.stats}>
                  <div className={styles.rating}>
                     <p>{hotel.rating}</p>
                     <IconStar />
                  </div>
                  <p className={styles.reviews}>{hotel.reviews} reviews</p>
               </div>
            </div>
         </CardBody>
      </Card>
   );
};
