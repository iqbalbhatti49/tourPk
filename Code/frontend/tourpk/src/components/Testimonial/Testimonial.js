import React from 'react';
import styles from './Testimonial.module.css';
import AwesomeTestimonial from 'react-awesome-testimonials';

export function Testimonial() {
   return (
      <>
         <AwesomeTestimonial
            testimonials={[
               {
                  name: "Eva",
                  company: "Amazon",
                  img_src: "https://i.ibb.co/84h8svL/eight.png",
                  review:
                     "Lorem 1 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
               },
               {
                  name: "Evelyn",
                  company: "Netflix",
                  img_src: "https://i.ibb.co/k8Jnx61/five.png",
                  review:
                     "Lorem 2 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
               },
               {
                  name: "Jack",
                  company: "Google",
                  img_src: "https://i.ibb.co/Yj8pMF8/four.png",
                  review:
                     "Lorem 3 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
               },
               {
                  name: "Sam",
                  company: "Microsoft",
                  img_src: "https://i.ibb.co/ph360c6/nine.png",
                  review:
                     "Lorem 4 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
               },
               {
                  name: "Vernoica",
                  company: "Facebook",
                  img_src: "https://i.ibb.co/pXMvXhK/three.png",
                  review:
                     "Lorem 8 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
               },

            ]}
         />
      </>
   );
}
