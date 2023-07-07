import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { IconFacebook } from '../IconFacebook/IconFacebook';
import { IconInstagram } from '../IconInstagram/IconInstagram';
import { IconLinkedin } from '../IconLinkedin/IconLinkedin';
import { Logo } from '../Logo/Logo';
import { useSelector } from "react-redux";

export const Footer = () => {
   const isLoggedIn = useSelector(state => state.user.loggedIn);
   const role = useSelector((state) => state.user.role);

   const links = {
      "/cities": "Explore city",
      "/services": "View Hotels",
      "/forgetPassword": "Reset Password",
      "/allBlogs": "Read Blogs"
   };
   const otherLinks = {
      "/AddBlog": "Write a Blog",
      "/bookings": "Bookings",
   };
   const touristLinks = {
      "/plans": "Special offers",
      "/paymentInformation": "Account Information",
   }
   const sellerLinks = {
      "/serviceProvider": "My Account",
      "/addService": "Offer services",
   }

   return (
      <div className={styles.container}>
         <div className={styles.header}>
            <img className={styles.getInToch} alt="Get In Touch" loading="eager" src="../../static/images/GetInTouch.svg" />
            <div className={styles.content}>
               <Logo rootClassName="dark" height={50} width={100} />
               <div className={styles.linksContainer}>
                  <div className={styles.links}>
                     <p className={styles.subHeading}>Website Links</p>
                     {Object.entries(links).map(([key, value]) => (
                        <Link className={styles.navLink} to={key}>{value}</Link>
                     ))}
                  </div>
                  <div className={styles.links}>
                     <p className={styles.subHeading}>Explore</p>
                     {Object.entries(otherLinks).map(([key, value]) => (
                        <Link className={styles.navLink} to={key}>{value}</Link>
                     ))}
                     {Object.entries(touristLinks).map(([key, value]) => (
                        isLoggedIn && key !== "/paymentInformation" ? (
                           <Link className={styles.navLink} to={key}>{value}</Link>
                        ) : null
                     ))}
                     {role === "seller" && (
                        <Link className={styles.navLink} to="/contract">Seller Terms</Link>
                     )}
                     {Object.entries(sellerLinks).map(([key, value]) => (
                        role == "seller" && <Link className={styles.navLink} to={key}>{value}</Link>
                     ))}
                  </div>
               </div>
            </div>
         </div>
         <hr className={styles.divider} />
         <div className={styles.foot}>
            <div className={styles.socialHandles}>
               <IconFacebook />
               <IconInstagram />
               <IconLinkedin />
            </div>
            <p>Copyrighted © 2023 tourPk technologies</p>
         </div>
      </div>
   );
};