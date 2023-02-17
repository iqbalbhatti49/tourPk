import React from 'react';
import styles from './PaymentMethod.module.css';

export const PaymentMethod = (props) => {

   return (
      <div className={styles.checkout4} >
         <div className={styles.paymentMethod}>
            <div className={styles.discountCodesChild} />
            <b className={styles.paymentMethod1}>Payment Method</b>
            <div className={styles.weProtectYourPaymentInformParent}>
               <div className={styles.weProtectYour}>
                  We protect your payment information using encryption to provide
                  bank-level security.
               </div>
               <img className={styles.groupItem} alt="" src="../frame-1507.svg" />
            </div>
            <div className={styles.rectangleParent}>
               <div className={styles.groupInner} />
               <div className={styles.groupChild1} />
               <img className={styles.groupChild2} alt="" src="../group-1455.svg" />
               <div className={styles.radioParent}>
                  <div className={styles.radio}>
                     <img
                        className={styles.radioButtonIcon}
                        alt=""
                        src="../radio-button.svg"
                     />
                     <div className={styles.payWithCredit}>Pay with Credit Card</div>
                  </div>
                  <div className={styles.forms10}>
                     <div className={styles.formsChild6} />
                     <img
                        className={styles.formsItem}
                        alt=""
                        src="../group-1492.svg"
                     />
                     <img className={styles.formsInner} alt="" src="../vector-5.svg" />
                     <div className={styles.usernamegmailcom}>1234 5678 9101 3456</div>
                     <div className={styles.emailAddressFrame}>
                        <div className={styles.emailAddress}>Card number</div>
                     </div>
                  </div>
                  <div className={styles.forms11}>
                     <div className={styles.box6} />
                     <div className={styles.text5}>MM/YY</div>
                     <div className={styles.label6}>
                        <div className={styles.emailAddress}>Expiration Date</div>
                     </div>
                  </div>
               </div>
               <div className={styles.groupDiv}>
                  <div className={styles.forms12}>
                     <div className={styles.box6} />
                     <div className={styles.text}>***</div>
                     <div className={styles.emailAddressFrame}>
                        <div className={styles.emailAddress}>Card Security Code</div>
                     </div>
                  </div>
                  <div className={styles.whatIsThis}>What is this?</div>
               </div>
            </div>
            <div className={styles.component80}>
               <div className={styles.component80Child} />
               <div className={styles.youWillBe}>
                  You will be redirected to the PayPal website after submitting your
                  order
               </div>
               <img className={styles.paypalIcon} alt="" src="../paypal.svg" />
               <div className={styles.radio1}>
                  <img
                     className={styles.radioButtonIcon}
                     alt=""
                     src="../radio-button1.svg"
                  />
                  <div className={styles.payWithCredit}>PayPal</div>
               </div>
            </div>
         </div>
         <div className={styles.shippingMethod}>
            <div className={styles.discountCodesChild} />
            <b className={styles.shippingMethod1}>Shipping Method</b>
            <div className={styles.rectangleGroup}>
               <div className={styles.groupInner} />
               <div className={styles.groupChild1} />
               <div className={styles.usps1stClassContainer}>
                  <span className={styles.usps1stClassContainer1}>
                     <p className={styles.usps1stClass}>
                        USPS 1st Class With Tracking
                     </p>
                     <p className={styles.daysCovid19Delay}>
                        (5 - 13 days) COVID19 Delay
                     </p>
                  </span>
               </div>
               <div className={styles.radio2}>
                  <img
                     className={styles.radioButtonIcon}
                     alt=""
                     src="../radio-button.svg"
                  />
                  <div className={styles.payWithCredit}>$2.99</div>
               </div>
               <img className={styles.image36Icon} alt="" src="../image-36@2x.png" />
            </div>
            <div className={styles.rectangleContainer}>
               <div className={styles.frameChild3} />
               <div className={styles.frameChild4} />
               <div className={styles.usps1stClassContainer}>
                  <span className={styles.usps1stClassContainer1}>
                     <p className={styles.usps1stClass}>USPS PRIORITY With Tracking</p>
                     <p className={styles.daysCovid19Delay}>
                        (5 - 10 days) COVID19 Delay
                     </p>
                  </span>
               </div>
               <div className={styles.radio2}>
                  <img
                     className={styles.radioButtonIcon}
                     alt=""
                     src="../radio-button1.svg"
                  />
                  <div className={styles.payWithCredit}>$9.00</div>
               </div>
               <div className={styles.logo}>
                  <img
                     className={styles.image36Icon1}
                     alt=""
                     src="../image-36@2x.png"
                  />
                  <div className={styles.logoChild} />
                  <div className={styles.faster}>faster</div>
               </div>
            </div>
         </div>
         <div className={styles.header}>
            <img className={styles.logoIcon} alt="" src="../logo.svg" />
            <div className={styles.alreadyHaveAnAccountParent}>
               <div className={styles.emailAddress}>Already have an account?</div>
               <div className={styles.signIn}>Sign In</div>
            </div>
         </div>
      </div>
   );
};
