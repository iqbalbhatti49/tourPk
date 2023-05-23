import React from 'react';
import { Card, ImageHeader, CardBody } from 'react-simple-card';
import styles from './CityCard.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

export const CityCard = (props) => {
   const { city } = props;
   return (
      <Card>
         <ImageHeader imageSrc={city.picture} />
         <CardBody>
            <div className={styles.body}>
               <p className={styles.title}>{city.tagline}</p>
               <div className={styles.stats}>
                  <div>
                     <p className={styles.place}>{city.name}</p>
                     <p className={styles.reviews}>{city.reviews} reviews</p>
                  </div>
                  <Link to={{ pathname: '/services', search: `?city=${city.name}` }}
                  >
                     <Button type="secondary" value="Visit Details" />
                  </Link>
               </div>
            </div>
         </CardBody>
      </Card>

   );
};
