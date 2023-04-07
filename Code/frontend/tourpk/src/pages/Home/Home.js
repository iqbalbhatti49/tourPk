import styles from "./Home.module.css";
import { SectionHero } from "../../components/SectionHero/SectionHero";
import { SectionSearch } from "../../components/SectionSearch/SectionSearch";
import { SectionHierarchy } from "../../components/SectionHierarchy/SectionHierarchy";

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
