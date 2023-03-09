import React, { useState } from 'react';
import styles from './OrderReviewItem.module.css';

const OrderReview = ({ imageSrc, title, count, price, discountedPrice, onIncrease, onDecrease, onRemove }) => {
   const [itemCount, setItemCount] = useState(count);

   const handleIncrease = () => {
      setItemCount(itemCount + 1);
      onIncrease();
   };

   const handleDecrease = () => {
      setItemCount(itemCount - 1);
      onDecrease();
   };

   const handleRemove = () => {
      onRemove();
   };

   return (
      <div className={styles.orderReview}>
         <div>
            <img src={imageSrc} alt={title} />
         </div>
         <div>
            <p>{title}</p>
            <div className={styles.count}>
               <button className={styles.button} onClick={handleDecrease}>-</button>
               <span className={styles.countValue}>{itemCount}</span>
               <button className={styles.button} onClick={handleIncrease}>+</button>
            </div>
         </div>
         <div className={styles.content}>
            <div className={styles.remove} onClick={handleRemove}>×</div>
            <div className={styles.prices}>
               <div className={styles.originalPrice}>{price}</div>
               <div className={styles.discountedPrice}>{discountedPrice}</div>
            </div>
         </div>
      </div>
   );
};

export default OrderReview;
