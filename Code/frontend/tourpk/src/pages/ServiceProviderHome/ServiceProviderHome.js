import styles from "./ServiceProviderHome.module.css";
import { React, useEffect, useDispatch, Link, Button, useSelector, fetchServicesByUserId, ServicesTabs, PaymentMethod, BillingAddress }
   from '../../components';

const ServiceProviderHome = () => {
   const user = useSelector((state) => state.user)
   const card = useSelector((state) => state.checkout.cardInfo);
   const address = useSelector((state) => state.checkout.billingAddress);
   const role = useSelector((state) => state.user.role);
   const dispatch = useDispatch();
   const userId = useSelector((state) => state.user.id);
   const services = useSelector((state) => state.service.services);
   useEffect(() => {
      dispatch(fetchServicesByUserId({ userId }));
   }, [dispatch, userId]);
   return (
      <>
         {
            role === "seller" ? (
            <div className={styles.container}>
               <div className={styles.header}>
                  <h1 className={styles.heading}>Offer Your Services Now</h1>
                  <p className={styles.description}>
                  Welcome to tourPk, an innovative platform that allows you to showcase your exceptional services to 
                  a diverse community of tourists, completely free of charge.
                  </p>
               </div>
               <div className={styles.outerFlex}>
                  <div>
                     <PaymentMethod/>
                     <div className={styles.flex}>
                        <h2 className={styles.subHeading}>Payment Method</h2>
                        <div className={styles.status}>
                           <span className={styles.key}>Phone Number : </span>
                           <span>{user.phoneNumberVerified ? "Verified" : "Unverified"}</span>
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           <span className={styles.key}>Email : </span>
                           <span>{user.emailVerified ? "Verified" : "Unverified"}</span>
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
            </div>) :
            (<img src="../static/images/404.png" alt="" />)
            }
      </>
   );
};

export default ServiceProviderHome;
