import React from 'react';
import { Card, ImageHeader, CardBody } from 'react-simple-card';
import { IconStar } from '../IconStar/IconStar';
import { IconLocation } from '../IconLocation/IconLocation';
import styles from './HotelCard.module.css';
import { getReviewsStats } from '../../utils/FindReviewStats';

export const HotelCard = (props) => {
   console.log(props);
   const { data, type } = props;
   console.log(data)
   if (type) {
      const { name, address, Reviews } = data.Service;
      const price = (type === "TravelAgent") ? data.packagePrice :
         (type === "TourGuide") ? data.perDayRate : "";
      const imgesKey = type + "Images";
      const { reviewsCount, ratingAvg } = getReviewsStats(Reviews);
      let img = data[imgesKey][0];
      const { imageUrl } = img;

      return (
         <Card>
            <ImageHeader imageSrc={imageUrl} />
            <CardBody>
               <div className={styles.body}>
                  <p className={styles.title}>{name}</p>
                  <div className={styles.location}>
                     <IconLocation />
                     <p className={styles.place}>{address}</p>
                  </div>
                  {type === "Restaurant" || type === "Hotel" ? null : <p className={styles.place}>Rs. {price}</p>}
                  <div className={styles.stats}>
                     <div className={styles.rating}>
                        <p>{ratingAvg != "NaN" ? ratingAvg : 0}</p>
                        <IconStar />
                     </div>
                     <p className={styles.reviews}>{reviewsCount} reviews</p>
                  </div>
               </div>
            </CardBody>
         </Card>
      );
   } else {
      return (
         <Card>
            <ImageHeader imageSrc={data.picture} />
            <CardBody>
               <div className={styles.body}>
                  <p className={styles.title}>{data.name}</p>
                  <div className={styles.location}>
                     <IconLocation />
                     <p className={styles.place}>{data.location}</p>
                  </div>
                  <div className={styles.stats}>
                     <div className={styles.rating}>
                        <p>{data.rating}</p>
                        <IconStar />
                     </div>
                     <p className={styles.reviews}>{data.reviews} reviews</p>
                  </div>
               </div>
            </CardBody>
         </Card>
      );
   }
};
