import React from 'react';
import styles from './DiscountCodes.module.css';
import { useSelector } from 'react-redux'


export const DiscountCodes = () => {
   const valueCode = useSelector((state) => state.pricing.planCode);

   return (
      <div className={styles.container} >
         <h2 className={styles.subHeading}>Discount Code</h2>
         <div className={styles.form}>
            {valueCode}
         </div>
      </div>
   );
};
