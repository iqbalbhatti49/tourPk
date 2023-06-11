import styles from "./ServiceProviderHome.module.css";
import { useSelector } from 'react-redux';
import {Button} from "../../components/index"
import { Link } from "react-router-dom";

const ServiceProviderHome = () => {
   const user = useSelector((state) => state.user)
   const card = useSelector((state) => state.checkout.cardInfo);
   const address = useSelector((state) => state.checkout.billingAddress);

   return (
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subHeading}>{`OFFER YOUR SERVICES`}</p>
          <h1 className={styles.Heading}>Get Started Now</h1>
          <p className={styles.description}>
            Welocme to tourPk, a platform where you can offer your services 
            to a wide range of tourists for free.
          </p>
          </div>
          <div className={styles.outerFlex}>
            <div>
               <p className={styles.subHeading}>{`Account Information`}</p>
               <div className={styles.flex}>
                  <div>
                     <div>
                        <span className={styles.key}>Name : </span>
                     </div>
                     <div>
                        <span className={styles.key}>Phone Number : </span>
                     </div>
                     <div>
                        <span className={styles.key}>Email : </span> 
                     </div>
                     <div>
                        <span className={styles.key}>Phone Number Status : </span>
                     </div>
                     <div>
                        <span className={styles.key}>Email Status : </span> 
                     </div>
                  </div>
                  <div>
                     <div>
                        <span>{user.name}</span>
                     </div>
                     <div>
                        <span>{user.phoneNumber}</span>
                     </div>
                     <div>
                        <span>{user.email}</span>
                     </div>
                     <div>
                        <span>{user.phoneNumberVerified ? "Verified":"Unverified"}</span>
                     </div>
                     <div>
                        <span>{user.emailVerified ? "Verified":"Unverified"}</span>
                     </div>
                  </div>
               </div>
               <div className={styles.btns}>
                  <Link to="/verify">
                     <Button value= {!user.phoneNumberVerified ? "Verify Phone Number" : "Update Phone Number"} />
                  </Link>
                  <Button value= {!user.emailVerified && "Verfiy Email"} />
               </div>
            </div>
            <div>
               <p className={styles.subHeading}>{`Payment Information`}</p>
               <div className={styles.innerFlex}>
                  <div>
                     <p className={styles.informationTitle}>Card Information</p>
                     <div className={styles.flex}> 
                        <div>
                           <div>
                              <span className={styles.key}>Card Type : </span>
                           </div>
                           <div>
                              <span className={styles.key}>Card Number : </span>
                           </div>
                           <div>
                              <span className={styles.key}>Expiration Month : </span> 
                           </div>
                           <div>
                              <span className={styles.key}>Expiration Year : </span>
                           </div>
                        </div>
                        <div>
                           <div>
                              <span>{card.cardType == "001" ? "Visa" : card.cardType == "002" ? "Master Card" : "American Express" || "N/A"}</span>
                           </div>
                           <div>
                              <span>{card.cardNumber  || "N/A"}</span>
                           </div>
                           <div>
                              <span>{card.expirationMonth  || "N/A"}</span>
                           </div>
                           <div>
                              <span>{card.expirationYear  || "N/A"}</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <p className={styles.informationTitle}>Address Information</p>
                     <div className={styles.flex}> 
                        <div>
                           <div>
                              <span className={styles.key}>Address : </span>
                           </div>
                           <div>
                              <span className={styles.key}>City : </span> 
                           </div>
                           <div>
                              <span className={styles.key}>Zip Code : </span>
                           </div>
                        </div>
                        <div>
                           <div>
                              <span>{address.streetAddress1  || "N/A"}</span>
                           </div>
                           <div>
                              <span>{address.city  || "N/A"}</span>
                           </div>
                           <div>
                              <span>{address.zipCode  || "N/A"}</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.btns}>
                  <Link to="/paymentInformation">
                     <Button value= {"Update Payment Details" } />
                  </Link>
               </div>
            </div>
          </div>
          <div>
            <p className={styles.subHeading}>{`Serices offered`}</p>
          </div>
      </div>
   );
};

export default ServiceProviderHome;
