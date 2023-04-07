import styles from "./Contract.module.css";
import { NavBar, Footer, Button } from "../../components/index";

const Services = () => {
   return (
      <>
         <NavBar />
         <div className={styles.container}>
            <div className={styles.header}>
               <p className={styles.subHeading}>CONTRACT TAILORED TO FIT YOUR NEEDS</p>
               <h1 className={styles.Heading}>Service Provider Contract</h1>
               <p className={styles.description}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                  posuere vel venenatis eu sit massa volutpat.
               </p>
            </div>
            <div className={styles.content}>
               <h2>Section 1</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a turpis sed tellus ultrices semper. Donec suscipit mi sed malesuada pellentesque. Nulla accumsan lacus imperdiet felis aliquam, sed vulputate est lacinia. Maecenas leo lorem, imperdiet fermentum diam non, rhoncus sodales mauris. Maecenas eu justo viverra, blandit est sit amet, ultrices magna. Vivamus pharetra nulla at nisl vestibulum, sed gravida quam fringilla. Vestibulum venenatis metus vitae ligula varius consequat. Mauris pulvinar ut purus vel luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               <h2>Section 2</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a turpis sed tellus ultrices semper. Donec suscipit mi sed malesuada pellentesque. Nulla accumsan lacus imperdiet felis aliquam, sed vulputate est lacinia. Maecenas leo lorem, imperdiet fermentum diam non, rhoncus sodales mauris. Maecenas eu justo viverra, blandit est sit amet, ultrices magna. Vivamus pharetra nulla at nisl vestibulum, sed gravida quam fringilla. Vestibulum venenatis metus vitae ligula varius consequat. Mauris pulvinar ut purus vel luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               <h2>Section 3</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a turpis sed tellus ultrices semper. Donec suscipit mi sed malesuada pellentesque. Nulla accumsan lacus imperdiet felis aliquam, sed vulputate est lacinia. Maecenas leo lorem, imperdiet fermentum diam non, rhoncus sodales mauris. Maecenas eu justo viverra, blandit est sit amet, ultrices magna. Vivamus pharetra nulla at nisl vestibulum, sed gravida quam fringilla. Vestibulum venenatis metus vitae ligula varius consequat. Mauris pulvinar ut purus vel luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={styles.buttons}>
               <Button type="primary" value="Accept" />
               <Button type="secondary" value="Negotiate" />
            </div>
         </div>
         <Footer />
      </>
   );
};

export default Services;
