import { SectionHero, SectionSearch, SectionHierarchy } from "../../components/index";

const Home = () => {
   return (
      <div>
         <SectionHero />
         <SectionSearch displayImage={true} />
         <SectionHierarchy />
      </div>
   );
};

export default Home;
