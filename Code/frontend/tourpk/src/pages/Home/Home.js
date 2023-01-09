import styles from "./Home.module.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { SectionHero } from "../../components/SectionHero/SectionHero";
import { SectionSearch } from "../../components/SectionSearch/SectionSearch";
import { SectionHierarchy } from "../../components/SectionHierarchy/SectionHierarchy";

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
