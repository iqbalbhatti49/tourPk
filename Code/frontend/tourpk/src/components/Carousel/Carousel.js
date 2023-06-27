import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Carousels({ imageList }) {
   const imagesConst = [
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
   const images = imageList ? imageList.map(item => item.imageUrl) : imagesConst.map(item => item.src);

   return (
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
         {images.map((image, index) => (
            <div key={index}>
               <img
                  key={index}
                  alt=""
                  src={image}
               />
            </div>
         ))}
      </Carousel>
   );
}
