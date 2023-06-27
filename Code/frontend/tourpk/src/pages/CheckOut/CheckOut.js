import styles from "./CheckOut.module.css";
import { PaymentMethod, OrderReview, DiscountCodes, BillingSummary, BillingAddress, useSelector } from "../../components/index";

const CheckOut = () => {
   const role = useSelector((state) => state.user.role);

   return (
      <>
         {
            role != "seller" ? (
               <div>
                  <div className={styles.container}>
                     <div className={styles.header}>
                        <p className={styles.subHeading}>BOOK YOUR DREAM VACATIONS WITH CONFIDENCE</p>
                        <h1 className={styles.heading}>Checkout in a few Clicks</h1>
                     </div>
                     <div className={styles.information}>
                        <BillingAddress />
                        <div>
                           <DiscountCodes />
                           <PaymentMethod />
                        </div>
                     </div>
                     <div className={styles.information}>
                        <OrderReview />
                        <div>
                           <BillingSummary />
                        </div>
                     </div>
                  </div>
               </div>
            ) :
               (<img src="../static/images/404.png" alt="" />)
         }
      </>
   );
};

export default CheckOut;
