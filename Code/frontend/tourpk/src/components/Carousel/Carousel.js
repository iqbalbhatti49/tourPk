import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Carousel.module.css';

const images = [
   {
      src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb'
   },
   {
      src: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb'
   },
   {
      src: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   },
   {
      src: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   }
];

export default () => (
   <Carousel infiniteLoop useKeyboardArrows autoPlay>
      {images.map((image, index) => (
         <div key={index}>
            <img alt="" src={image.src} className={styles.mainImage} />
         </div>
      ))}
   </Carousel>
);
