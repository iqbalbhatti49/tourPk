import React from 'react';
import OrderReviewItem from '../OrderReviewItem/OrderReviewItem';
import styles from './OrderReview.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, increaseItem, decreaseItem } from '../../app/features/cart/cartSlice'

export const OrderReview = () => {
   const items = useSelector((state) => state.cart.items);

   const totalCount = items.reduce((total, item) => total + item.count, 0);
   const dispatch = useDispatch();

   const handleIncrease = (index) => {
      dispatch(increaseItem(index));
   };

   const handleDecrease = (index) => {
      dispatch(decreaseItem(index));
   };

   const handleRemove = (index) => {
      dispatch(removeItem(index));
   };

   return (
      <div className={styles.container}>
         <h2 className={styles.subHeading}>Order Review</h2>
         <div className={styles.subtitle}>
            <span>Cart Items : {totalCount}  </span>
         </div>
         <div className={styles.items}>
            {items.map((item, index) => (
               <React.Fragment key={item.id}>
                  <OrderReviewItem
                     key={item.id}
                     imageSrc={item.imageSrc}
                     title={item.title}
                     count={item.count}
                     price={item.price}
                     id={item.id}
                     discountApplicability = {item.discountApplicability ? "Discount Applicable" : "Discount Not Applicale"}
                     discountedPrice={item.discountedPrice}
                     onIncrease={() => handleIncrease(item.id)}
                     onDecrease={() => handleDecrease(item.id)}
                     onRemove={() => handleRemove(item.id)}
                  />
                  {index !== items.length - 1 && <hr key={index + items.length} className={styles.separator} />}
               </React.Fragment>
            ))}
         </div>
      </div>
   );
};
