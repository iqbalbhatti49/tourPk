import React from 'react';
import styles from './BillingSummary.module.css';

export const BillingSummary = (props) => {

   return (
      <div className={styles.checkout4} >
         <div className={styles.billingSummary}>
            <div className={styles.billingSummaryChild} />
            <img className={styles.nortonIcon} alt="" src="../norton-icon.svg" />
            <div className={styles.forms9}>
               <div className={styles.formsChild3} />
               <img className={styles.formsChild4} alt="" src="../group-1492.svg" />
               <img className={styles.formsInner} alt="" src="../vector-5.svg" />
               <div className={styles.typeHere}>Type here...</div>
               <div className={styles.orderCommentWrapper}>
                  <div className={styles.emailAddress}>Order Comment</div>
               </div>
            </div>
            <b className={styles.billingAddress1}>Billing Summary</b>
            <img className={styles.orderReviewItem} alt="" src="../polygon-1.svg" />
            <div className={styles.grandTotalParent}>
               <b className={styles.grandTotal}>{`Grand Total `}</b>
               <b className={styles.b}>$3,439.00</b>
               <img className={styles.groupChild} alt="" src="../vector-4.svg" />
            </div>
            <div className={styles.buttons}>
               <div className={styles.buttonsChild} />
               <b className={styles.pay343900}>Pay $3,439.00</b>
            </div>
            <div className={styles.checkbox4} >
               <div className={styles.checkbox1}>
                  <div className={styles.deactive} />
                  <div className={styles.active}>
                     <div className={styles.activeChild} />
                     <img className={styles.vectorIcon1} alt="" src="../vector.svg" />
                  </div>
               </div>
               <div className={styles.myBillingAnd}>
                  <span>{`Please check to acknowledge our `}</span>
                  <span
                     className={styles.privacyTerms}
                  >{`Privacy & Terms Policy`}</span>
               </div>
            </div>
            <div className={styles.discountParent}>
               <div className={styles.discount}>Discount</div>
               <div className={styles.div12}>-$749.99</div>
            </div>
            <div className={styles.subtotalParent}>
               <div className={styles.discount}>Subtotal</div>
               <div className={styles.div13}>$3720,27</div>
            </div>
            <div className={styles.warrantyPlatinumParent}>
               <div className={styles.discount}>
                  <span>{`Warranty `}</span>
                  <span className={styles.platinum}>(Platinum)</span>
               </div>
               <div className={styles.remove}>Remove</div>
               <div className={styles.div14}>$259.99</div>
            </div>
            <div className={styles.shippingParent}>
               <div className={styles.discount}>Shipping</div>
               <div className={styles.div15}>$0.00</div>
            </div>
            <div className={styles.taxParent}>
               <div className={styles.discount}>Tax</div>
               <div className={styles.div16}>$228.72</div>
            </div>
         </div>
      </div>
   );
};
