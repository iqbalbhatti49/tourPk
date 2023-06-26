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

   return (
      <div className={styles.container}>
         <div className={styles.header}>
            <img className={styles.getInToch} alt="Get In Touch" loading="eager" src="../../static/images/GetInTouch.svg" />
            <div className={styles.content}>
               <Logo rootClassName="dark" height={50} width={100} />
               <div className={styles.linksContainer}>
                  <div className={styles.links}>
                     <p className={styles.subHeading}>Offerings</p>
                     <Link className={styles.navLink} to="/services"> Restaurants</Link>
                     <Link className={styles.navLink} to="/services">View Hotels</Link>
                     <Link className={styles.navLink} to="/services">Tour Guides</Link>
                     <Link className={styles.navLink} to="/services">Tour Packages</Link>
                     <Link className={styles.navLink} to="/allBlogs">Read Blogs</Link>
                  </div>
                  <div className={styles.links}>
                     <p className={styles.subHeading}>Explore</p>
                     <Link className={styles.navLink} to={isLoggedIn ? "/bookings" : "/login"}>Bookings</Link>
                     <Link className={styles.navLink} to={isLoggedIn ? "/AddBlog" : "/login"}>Write Blog</Link>
                     <Link className={styles.navLink} to={isLoggedIn ? "/helpandsupport" : "/login"}>Help Centre</Link>
                     {role == "seller" ? <>
                        <Link className={styles.navLink} to="/contract" >Seller Conditions</Link>
                        <Link className={styles.navLink} to="/addService">Offer service</Link>
                     </>
                        : <Link className={styles.navLink} to="/pricing" >Special offers</Link>
                     }
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
