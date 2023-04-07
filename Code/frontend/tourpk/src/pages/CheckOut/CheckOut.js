import styles from "./CheckOut.module.css";
import { NavBar, Footer, PaymentMethod, OrderReview, DiscountCodes, BillingSummary } from "../../components/index";

const CheckOut = () => {
   return (
      <div>
         <NavBar />
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
         <Footer />
      </div>
   );
};

export default CheckOut;
