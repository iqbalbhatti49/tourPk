import styles from "./Home.module.css";
import { NavBar, Footer, SectionHero, SectionSearch, SectionHierarchy } from "../../components/index";

const Home = () => {
   return (
      <div className={styles.home}>
         <SectionHero />
         <SectionSearch />
         <SectionHierarchy />
      </div>
   );
};

export default Home;
