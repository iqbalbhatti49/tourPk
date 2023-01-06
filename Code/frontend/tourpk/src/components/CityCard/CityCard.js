import React from 'react';
import { Card, ImageHeader, CardBody } from 'react-simple-card';
import styles from './CityCard.module.css';

export const CityCard = (props) => {
   const { city } = props;
   return (
      <Card>
         <ImageHeader imageSrc={city.picture} />
         <CardBody>
            <div className={styles.body}>
               <p className={styles.title}>{city.tagline}</p>
               <div className={styles.stats}>
                  <p className={styles.place}>{city.name}</p>
                  <p className={styles.reviews}>{city.reviews} reviews</p>
               </div>
            </div>
         </CardBody>
      </Card>
   );
};
