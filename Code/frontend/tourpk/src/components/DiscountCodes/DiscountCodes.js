import React from 'react';
import styles from './DiscountCodes.module.css';

export const DiscountCodes = (props) => {
   return (
      <div className={styles.checkout4} >
         <div className={styles.discountCodes}>
            <div className={styles.discountCodesChild} />
            <div className={styles.forms}>
               <div className={styles.formsChild} />
               <img className={styles.formsItem} alt="" src="../group-1492.svg" />
               <img className={styles.formsInner} alt="" src="../vector-5.svg" />
               <div className={styles.usernamegmailcom}>XRTMAS70</div>
               <div className={styles.emailAddressWrapper}>
                  <div className={styles.emailAddress}>Enter your coupon code</div>
               </div>
            </div>
            <b className={styles.discountCodes1}>Discount Codes</b>
            <img
               className={styles.discountCodesItem}
               alt=""
               src="../polygon-1.svg"
            />
         </div>
      </div>
   );
};
