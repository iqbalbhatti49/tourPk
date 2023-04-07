import styles from "./CheckOut.module.css";
import { PaymentMethod } from "../../components/PaymentMethod/PaymentMethod";
import { OrderReview } from "../../components/OrderReview/OrderReview";
import { DiscountCodes } from "../../components/DiscountCodes/DiscountCodes";
import { BillingSummary } from "../../components/BillingSummary/BillingSummary";

const CheckOut = () => {
   return (
      <div>
         <div className={styles.container}>
            <div className={styles.header}>
               <p className={styles.subHeading}>BOOK YOUR DREAM VACATIONS WITH CONFIDENCE</p>
               <h1 className={styles.Heading}>Checkout in a few Clicks</h1>
            </div>
            <div className={styles.information}>
               <OrderReview />
            </div>
            <div className={styles.information}>
               <div>
                  <PaymentMethod />
                  <DiscountCodes />
               </div>
               <div>
                  <BillingSummary />
               </div>
            </div>
         </div>
      </div>
   );
};

export default CheckOut;
