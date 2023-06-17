import React from 'react';
import { Card, ImageHeader, CardBody } from 'react-simple-card';
import { IconStar } from '../IconStar/IconStar';
import styles from './PlaceCard.module.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

export const PlaceCard = (props) => {
   const { city } = props;
   console.log(city)
   return (
      <Card>
        
            <ImageHeader imageSrc={city.picture} />
            <CardBody>
               <div className={styles.body}>
                  <p className={styles.title}>{city.tagline}</p>
                  <div className={styles.flex}>
                     <div className={styles.rating}>
                        <p>{city.rating}</p>
                        <IconStar />
                     </div>
                     <div>
                        <Link to="/spotListing" state={city}>
                           <Button value="Explore" type="secondary"/>
                        </Link>
                     </div>
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
