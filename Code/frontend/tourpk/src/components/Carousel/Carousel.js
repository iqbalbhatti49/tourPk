import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Carousel.module.css';

export default function Carousels({ imageList }) {

   let imagesConst = [
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

   const imageListArr = Array.isArray(imageList) ? imageList : [imageList];
   console.log(imageList);
   const images = imageList ? imageListArr : imagesConst;
   console.log(images);

   return (
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
         {images.map((imageObject, index) => (
            <div key={index}>
               {Object.values(imageObject).map((image, imageIndex) => (
                  <img
                     key={imageIndex}
                     alt=""
                     src={image}
                     className={styles.mainImage}
                  />
               ))}
            </div>
         ))}
      </Carousel>
   );
}