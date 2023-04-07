import styles from "./Home.module.css";
import { NavBar, Footer, SectionHero, SectionSearch, SectionHierarchy } from "../../components/index";

const Home = () => {
   return (
      <div className={styles.home}>
         <NavBar />
         <SectionHero />
         <SectionSearch />
         <SectionHierarchy />
         <Footer />
      </div>
   );
};

export default Home;
