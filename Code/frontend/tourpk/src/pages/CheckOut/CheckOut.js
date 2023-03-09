import styles from "./CheckOut.module.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { PaymentMethod } from "../../components/PaymentMethod/PaymentMethod";
import { OrderReview } from "../../components/OrderReview/OrderReview";
import { BillingAddress } from "../../components/BillingAddress/BillingAddress";
import { DiscountCodes } from "../../components/DiscountCodes/DiscountCodes";
import { BillingSummary } from "../../components/BillingSummary/BillingSummary";
import { ShippingMethod } from "../../components/ShippingMethod/ShippingMethod"

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
               <div>
                  <BillingAddress />
                  <ShippingMethod />
                  <PaymentMethod />
               </div>
               <div>
                  <OrderReview />
                  <DiscountCodes />
                  <BillingSummary />
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
};

export default CheckOut;
