import React from 'react';
import styles from './Testimonial.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRatings from 'react-star-ratings';
export function Testimonial({ testimonial }) {
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
   };
   const testimonials = [
      {
         name: "Eva",
         date: "Amazon",
         rating: 5,
         review:
            "Lorem 1 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      },
      {
         name: "Evelyn",
         date: "Netflix",
         rating: 3,
         review:
            "Lorem 2 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      },
      {
         name: "Jack",
         date: "Google",
         rating: 4,
         review:
            "Lorem 3 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      },
      {
         name: "Sam",
         date: "Microsoft",
         rating: 4.5,
         review:
            "Lorem 4 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      },
      {
         name: "Vernoica",
         date: "Facebook",
         rating: 2.5,
         review:
            "Lorem 8 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      },

   ];

   return (
      <div className={styles.testimonialContainer}>
         <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
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
                  <p className={styles.name}>{testimonial.name}</p>
                  <p className={styles.company}>{testimonial.date}</p>
               </div>
            ))}
         </Slider>
      </div>
   );
}
