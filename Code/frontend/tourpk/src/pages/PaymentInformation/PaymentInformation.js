import styles from "./PaymentInformation.module.css";
import { PaymentMethod, BillingAddress } from "../../components/index";

const PaymentInformation = () => {
   return (
      <div>
         <div className={styles.container}>
            <div className={styles.header}>
               <p className={styles.subHeading}>Provide us your payment account information.</p>
               <h1 className={styles.Heading}>We Offer Services With Confidence</h1>
            </div>
            <div className={styles.information}>
               <BillingAddress />
               <div>
                  <PaymentMethod />
               </div>
            </div>
         </div>
      </div>
   );
};

export default PaymentInformation;
