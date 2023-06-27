import React from 'react';
import styles from './OrderReviewItem.module.css';

const OrderReview = ({ imageSrc, title, count, price, discountedPrice, discountApplicability, onRemove }) => {

   const handleRemove = () => {
      onRemove();
   };
   
   return (
      <div className={styles.orderReview}>
         <div>
            <img className={styles.OrderReview_img} src={imageSrc} alt={title} />
         </div>
         <div className={styles.info}>
            <p>Title : {title}</p>
            <p>Count : {count}</p>
            <p>{discountApplicability}</p>
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
