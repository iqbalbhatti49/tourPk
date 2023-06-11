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

   return (
      <div className={styles.container}>
         <div className={styles.header}>
            <img className={styles.getInToch} alt="Get In Touch" loading="eager" src="../../static/images/GetInTouch.svg" />
            <div className={styles.content}>
               <Logo rootClassName="dark" height={50} width={100} />
               <div className={styles.linksContainer}>
                  <div className={styles.links}>
                     <p className={styles.subHeading}>Website Links</p>
                     <Link className={styles.navLink} to="/addService">add SERvice</Link>
                     <Link className={styles.navLink} to={isLoggedIn ? "/AddBlog" : "/login"}>Write Blog</Link>
                     <Link className={styles.navLink} to="/addHotelRoom">addHotelRoom</Link>
                     <Link className={styles.navLink} to="/restaurantListing/:id">restaurantListing</Link>
                     <Link className={styles.navLink} to="/addHotel">addHotel</Link>
                     <Link className={styles.navLink} to="/AddTravelAgent">AddTravelAgent</Link>
                     <Link className={styles.navLink} to="/addTourGuide">addTourGuide</Link>
                     <Link className={styles.navLink} to="/tourGuideListing">tourGuideListing</Link>
                     <Link className={styles.navLink} to="/addrestaurant">addrestaurant</Link>
                  </div>
                  <div className={styles.links}>
                     <p className={styles.subHeading}>Services</p>
                     <Link className={styles.navLink} to={isLoggedIn ? "/addpackage" : "/login"} >Add Package</Link>
                     <Link className={styles.navLink} to="/bookings">Bookings</Link>
                     <Link className={styles.navLink} to="/addrestaurant">Add Restaurant</Link>
                     <Link className={styles.navLink} to={isLoggedIn ? "/helpandsupport" : "/login"} >Help And Support</Link>
                     <Link className={styles.navLink} to="/hotelListing">Hotel Listing</Link>
                     <Link className={styles.navLink} to="/spotListing">Spot Listing</Link>
                     <Link className={styles.navLink} to={isLoggedIn ? "/checkout" : "/login"}>Checkout</Link>
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
            <p>Copyrighted © 2022 tourPk technologies</p>
         </div>
      </div>
   );
};
