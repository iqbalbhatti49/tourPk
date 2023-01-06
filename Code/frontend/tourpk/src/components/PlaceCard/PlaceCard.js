import React from 'react';
import { Card, ImageHeader, CardBody } from 'react-simple-card';
import { IconStar } from '../IconStar/IconStar';
import styles from './PlaceCard.module.css';

export const PlaceCard = (props) => {
   const { city } = props;
   return (
      <Card>
         <ImageHeader imageSrc={city.picture} />
         <CardBody>
            <div className={styles.body}>
               <p className={styles.title}>{city.tagline}</p>
               <div className={styles.rating}>
                  <p>{city.rating}</p>
                  <IconStar />
               </div>
               <div className={styles.stats}>
                  <p className={styles.place}>{city.name}</p>
                  <p className={styles.reviews}>{city.reviews} reviews</p>
               </div>
            </div>
         </CardBody>
      </Card>
   );
};
