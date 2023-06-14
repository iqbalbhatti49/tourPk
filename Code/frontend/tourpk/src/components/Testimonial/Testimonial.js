import React from 'react';
import styles from './Testimonial.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRatings from 'react-star-ratings';

export function Testimonial({ data }) {
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
   };

   return (
      <div className={styles.testimonialContainer}>
         <Slider {...settings}>
            {data.map((testimonial, index) => (
               <div key={index} className={styles.testimonial}>
                  <StarRatings
                     rating={testimonial.rating}
                     starRatedColor="#FFD700"
                     numberOfStars={5}
                     starDimension="20px"
                     starSpacing="2px"
                     name="rating"
                     isSelectable={false}
                  />
                  <p>{testimonial.review}</p>
                  <p className={styles.name}>{testimonial.User.name}</p>
                  <p className={styles.company}>{testimonial.date}</p>
               </div>
            ))}
         </Slider>
      </div>
   );
}
