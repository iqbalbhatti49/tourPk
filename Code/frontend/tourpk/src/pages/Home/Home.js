import styles from "./Home.module.css";
import { SectionHero, SectionSearch, SectionHierarchy } from "../../components/index";

const Home = () => {
   return (
      <div className={styles.home}>
         <SectionHero />
         <SectionSearch displayImage={true} />
         <SectionHierarchy />
      </div>
   );
};

export default Home;
