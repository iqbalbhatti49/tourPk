import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './NavBar.module.css';

export const NavBar = () => {
   const location = useLocation();

   return (
      <div className={styles.container}>
         <nav className={styles.nav}>
            <img
               className={styles.logo}
               alt="logo"
               loading="eager"
               src="../static/images/logo-1@2x.png"
            />
            <div className={styles.navLinks}>
               <Link className={location.pathname === '/' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/">Home</Link>
               <Link className={location.pathname === '/about' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/about">About</Link>
               <Link className={location.pathname === '/services' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/services">Services</Link>
               <Link className={location.pathname === '/pricing' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/pricing">Pricing</Link>
               <Link className={location.pathname === '/contact' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/contact">Contact</Link>
            </div>
            <div className={styles.navButtons}>
               <Link className={styles.navLink} to="/login">Login</Link>
               <Button value="Register" type="primary" />
            </div>
         </nav>
      </div>
   );
};
