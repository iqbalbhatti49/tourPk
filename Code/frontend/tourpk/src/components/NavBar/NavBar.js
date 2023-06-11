import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';
import { Logo } from '../Logo/Logo';
import { Button, IconAvatar, logout } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";

export const NavBar = () => {
   const location = useLocation();
   const isloggedIn = useSelector((state) => state.user.loggedIn);
   const userName = useSelector((state) => state.user.name);
   const role = useSelector((state) => state.user.role);
   const dispatch = useDispatch();
   const logoutUser = () => {
      dispatch(logout());
   }
   useEffect(() => {
      console.log("value of isloggedIn: ", isloggedIn);
   }, []);
   return (
      <div className={styles.container}>
         <nav className={styles.nav}>
            <Logo width={100} height={50} rootClassName="dark" />
            <div className={styles.navLinks}>
               {
                  role != "seller" ? 
                  <Link className={location.pathname === '/' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/">Home</Link> :
                  <Link className={location.pathname === '/serviceProvider' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/serviceProvider">Home</Link> 
               }
               {
                  role == "seller" && <Link className={location.pathname === '/bookings' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/bookings">Bookings</Link>
               }
               {
                  role != "seller" &&
                  <>
                     <Link className={location.pathname === '/cities' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/cities">Cities</Link>
                     <Link className={location.pathname === '/services' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/services">Services</Link>   
                  </>
               }
               {
                  role != "seller" ? 
                  <Link className={location.pathname === '/pricing' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/pricing">Pricing</Link> :
                  <Link className={location.pathname === '/addService' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/addService">Add Service</Link> 
               }
               <Link className={location.pathname === '/allBlogs' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/allBlogs">Blogs</Link>
            </div>
            {
               isloggedIn ? (
                  <div className={styles.navButtons}>
                     <div className={styles.navButtons}>
                        <Button value="Logout" type="primary" handleClick={logoutUser} />
                        <div className={styles.username}>
                           <IconAvatar />
                           {userName}
                        </div>
                     </div>
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
