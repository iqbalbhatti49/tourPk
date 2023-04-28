import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './NavBar.module.css';
import { Logo } from '../Logo/Logo';
import { useDispatch, useSelector } from "react-redux";

export const NavBar = () => {
   const location = useLocation();
   const isloggedIn = useSelector((state) => state.user.loggedIn);

   return (
      <div className={styles.container}>
         <nav className={styles.nav}>
            <Logo width={100} height={50} rootClassName="dark" />
            <div className={styles.navLinks}>
               <Link className={location.pathname === '/' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/">Home</Link>
               <Link className={location.pathname === '/cities' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/cities">Cities</Link>
               <Link className={location.pathname === '/services' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/services">Services</Link>
               <Link className={location.pathname === '/pricing' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/pricing">Pricing</Link>
               <Link className={location.pathname === '/contact' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/contact">Contact</Link>
            </div>
            {
               isloggedIn ? (
                  <div className={styles.navButtons}>
                     <Button value="Logout" type="primary" />
                  </div>
               ) : (
                  <div className={styles.navButtons}>
                     <Link className={styles.navLink} to="/login">Login</Link>
                     <Link to="/signupAsTourist">
                        <Button value="Register" type="primary" />
                     </Link>
                  </div>
               )
            }
         </nav>
      </div>
   );
};
