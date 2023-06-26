import styles from "./ServiceProviderHome.module.css";
import { React, useEffect, useDispatch, Link, Button, useSelector, fetchServicesByUserId, ServicesTabs, PaymentMethod, BillingAddress } 
from '../../components';


const ServiceProviderHome = () => {
   const user = useSelector((state) => state.user)
   const card = useSelector((state) => state.checkout.cardInfo);
   const address = useSelector((state) => state.checkout.billingAddress);
   const dispatch = useDispatch();
   const userId = useSelector((state) => state.user.id);
   const services = useSelector((state) => state.service.services);
   useEffect(() => {
      dispatch(fetchServicesByUserId({ userId }));
   }, [dispatch, userId]);
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
               <PaymentMethod/>
               <div>
                  <div className={styles.flex}>
                     <div>
                        <span className={styles.key}>Phone Number : </span>
                        <br/>
                        <span className={styles.key}>Email : </span>
                     </div>
                     <div>
                        <span>{user.phoneNumberVerified ? "Verified" : "Unverified"}</span>
                        <br/>
                        <span>{user.emailVerified ? "Verified" : "Unverified"}</span>
                     </div>
                  </div>
                  <div className={styles.btns}>
                     <Link to="/verify">
                        <Button value={!user.phoneNumberVerified ? "Verify Phone Number" : "Update Phone Number"} />
                     </Link>
                     <Link to="/verifyEmail">
                        <Button value={!user.emailVerified ? "Verfiy Email" : "Update Email"} />
                     </Link>
                  </div>
               </div>
            </div>
            <BillingAddress/>
         </div> 
         {services.length != 0 && 
            <>
               <p className={styles.subHeading}>{`Serices Offered By You`}</p>
               <ServicesTabs services={services}/>
            </>
         }
      </div>
   );
};

export default ServiceProviderHome;
