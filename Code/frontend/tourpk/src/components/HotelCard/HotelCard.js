import React from 'react';
import { Card, ImageHeader, CardBody } from 'react-simple-card';
import { IconStar } from '../IconStar/IconStar';
import { IconLocation } from '../IconLocation/IconLocation';
import styles from './HotelCard.module.css';

export const HotelCard = (props) => {
   const { data, type } = props
   console.log("----CARD*********  ", data);
   const name = data.Service.name;
   const address = data.Service.address;

   if (type == "TravelAgent")
      console.log(data.packagePrice);
   const price = (type == "TravelAgent") ? data.packagePrice :
      (type == "Hotel") ? data.pricePerDay :
         (type == "TourGuide") ? data.perHourRate : "";
   // const price = (type == "TravelAgent") ? (data.packagePrice + "/package") :
   // (type == "Hotel") ? (data.pricePerDay + "/perDay") :
   //    (type == "TourGuide") ? (data.perHourRate + "/perHour") : "";
   const imgesKey = type + "Images"; //key of corresponding images object
   const reviews = data.Service.Reviews;
   console.log(reviews);

   let ratingAvg = 0;
   reviews.forEach(element => {
      console.log(element);
      ratingAvg += element.rating;
   });
   ratingAvg = (ratingAvg / (reviews.length)).toFixed(1);
   let img = data[imgesKey][0];
   const { imageUrl } = img;
   const reviewsCount = reviews.length;

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
               {type == "Restaurant" ? null : <p className={styles.place}>Rs. {price}</p>}
               <div className={styles.stats}>
                  <div className={styles.rating}>
                     <p>{ratingAvg}</p>
                     <IconStar />
                  </div>
                  <p className={styles.reviews}>{reviewsCount} reviews</p>
               </div>
            </div>
         </CardBody>
      </Card>
   );
};
