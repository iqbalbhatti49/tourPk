import styles from './NavBar.module.css';
import { Logo, React, Link, useLocation, useDispatch, useSelector, Button, IconAvatar, logout }
   from "../index";

export const NavBar = () => {
   const location = useLocation();
   const isloggedIn = useSelector((state) => state.user.loggedIn);
   const userName = useSelector((state) => state.user.name);
   const role = useSelector((state) => state.user.role);
   const dispatch = useDispatch();
   const logoutUser = () => {
      dispatch(logout());
   }
   const links = {
      "/allBlogs": "Blogs",
      "/help": "Contact Us",
   };
   const touristLinks = {
      "/": "Home",
      "/cities": "Tourist Attractions",
      "/services": "Services",
   }
   const sellerLinks = {
      "/serviceProvider": "Home",
      "/addService": "Offer-services"
   }
   return (
      <div className={styles.container}>
         <nav className={styles.nav}>
            <Logo width={100} height={50} rootClassName="dark" />
            <div className={styles.navLinks}>
               {Object.entries(touristLinks).map(([key, value]) => (
                  role != "seller" && <Link className={location.pathname === key ? `${styles.navLink} ${styles.active}` : styles.navLink} to={key}>{value}</Link>
               ))}
               {Object.entries(sellerLinks).map(([key, value]) => (
                  role == "seller" && <Link className={location.pathname === key ? `${styles.navLink} ${styles.active}` : styles.navLink} to={key}>{value}</Link>
               ))}
               {Object.entries(links).map(([key, value]) => (
                  <Link className={location.pathname === key ? `${styles.navLink} ${styles.active}` : styles.navLink} to={key}>{value}</Link>
               ))}
               {
                  isloggedIn ? <Link className={location.pathname === '/bookings' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/bookings">Bookings</Link> : null
               }
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
