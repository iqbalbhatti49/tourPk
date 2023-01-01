import styles from "./Home.module.css";
import { NavBar } from "../../components/NavBar/NavBar";

const Home = () => {
   return (
      <div className={styles.home}>
         <NavBar />
      </div>
   );
};

export default Home;
