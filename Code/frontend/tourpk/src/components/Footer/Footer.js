import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { IconFacebook } from '../IconFacebook/IconFacebook';
import { IconInstagram } from '../IconInstagram/IconInstagram';
import { IconLinkedin } from '../IconLinkedin/IconLinkedin';
import { Logo } from '../Logo/Logo';

export const Footer = () => {
   return (
      <div className={styles.container}>
         <div className={styles.header}>
            <img className={styles.getInToch} alt="Get In Touch" loading="eager" src="../../static/images/GetInTouch.svg" />
            <div className={styles.content}>
               <Logo rootClassName="dark" height={50} width={100} />
               <div className={styles.linksContainer}>
                  <div className={styles.links}>
                     <p className={styles.subHeading}>Website Links</p>
                     <Link className={styles.navLink} to="/">Home</Link>
                     <Link className={styles.navLink} to="/cities">Cities</Link>
                     <Link className={styles.navLink} to="/services">Services</Link>
                     <Link className={styles.navLink} to="/allBlogs">Blogs</Link>
                     <Link className={styles.navLink} to="/genericinfo">Generic Info Service</Link>
                     <Link className={styles.navLink} to="/Blog/:id">Blog/id</Link>
                     <Link className={styles.navLink} to="/AddBlog">Write Blog</Link>
                  </div>
                  <div className={styles.links}>
                     <p className={styles.subHeading}>Services</p>
                     <Link className={styles.navLink} to="/addpackage">Add Package</Link>
                     <Link className={styles.navLink} to="/bookings">Bookings</Link>
                     <Link className={styles.navLink} to="/addrestaurant">Add Restaurant</Link>
                     <Link className={styles.navLink} to="/viewrestaurant">View Restaurant</Link>
                     <Link className={styles.navLink} to="/helpandsupport">Help And Support</Link>
                     <Link className={styles.navLink} to="/listing">Listing</Link>
                     <Link className={styles.navLink} to="/checkout">Checkout</Link>
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
