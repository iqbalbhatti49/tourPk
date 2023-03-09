import React from 'react';
import OrderReviewItem from '../OrderReviewItem/OrderReviewItem';
import styles from './OrderReview.module.css';

export const OrderReview = () => {
   const items = [
      {
         imageSrc: '../../static/images/booking.png',
         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         count: 2,
         price: '$19.99',
         discountedPrice: '$14.99',
      },
      {
         imageSrc: '../../static/images/booking.png',
         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         count: 1,
         price: '$29.99',
         discountedPrice: '$24.99',
      },
      {
         imageSrc: '../../static/images/booking.png',
         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         count: 1,
         price: '$29.99',
         discountedPrice: '$24.99',
      },
   ];
   const totalCount = items.reduce((total, item) => total + item.count, 0);

   return (
      <div className={styles.container}>
         <h1 className={styles.heading}>Order Review</h1>
         <div className={styles.subtitle}>
            <span>{totalCount} Item{totalCount !== 1 && 's'} in cart</span>
         </div>
         <div className={styles.items}>
            {items.map((item, index) => (
               <React.Fragment key={index}>
                  <OrderReviewItem
                     imageSrc={item.imageSrc}
                     title={item.title}
                     count={item.count}
                     price={item.price}
                     discountedPrice={item.discountedPrice}
                     onIncrease={() => { }}
                     onDecrease={() => { }}
                     onRemove={() => { }}
                  />
                  {index !== items.length - 1 && <hr className={styles.separator} />}
               </React.Fragment>
            ))}
         </div>
      </div>
   );
};

