import styles from "./ViewRestaurantService.module.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

const ViewRestaurant = () => {
   return (
      <>
         <NavBar />
         <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.Heading}>Dummy Restaurant Details</h1>
                <img src="../static/images/packagehead.png" alt="packages" />
            </div>
            <div className={styles.content}>
              
               <h2>Name and Description</h2>
               <h3>Restaurant Name</h3>
               <p>Lorem ipsum</p>
               <h3>About Restaurant</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a turpis sed tellus ultrices semper. Donec suscipit mi sed malesuada pellentesque. Nulla accumsan lacus imperdiet felis aliquam, sed vulputate est lacinia. Maecenas leo lorem, imperdiet fermentum diam non, rhoncus sodales mauris. Maecenas eu justo viverra, blandit est sit amet, ultrices magna. Vivamus pharetra nulla at nisl vestibulum, sed gravida quam fringilla. Vestibulum venenatis metus vitae ligula varius consequat. Mauris pulvinar ut purus vel luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               
               <br />
               <br />
               
               <h2>Contact Information</h2>
               <h3>Contact No</h3>
               <p>042-46876865975</p>
               <h3>Email</h3>
               <p>restaurant@gmail.com</p>
               <h3>Website URL</h3>
               <p>https://www.restaurant.com</p>
              
               <br />
               <br />
              
               <h2>Address</h2>
               <h3>City</h3>
               <p>Lahore</p>
               <h3>State</h3>
               <p>Punjab</p>
               <h3>Country</h3>
               <p>Pakistan</p>
               <h3>Street Address</h3>
               <p>Street address goes here</p>
               <h3>Postal Code</h3>
               <p>54700</p>
            
            </div>
         </div>
         <Footer />
      </>
   );
};

export default ViewRestaurant;
