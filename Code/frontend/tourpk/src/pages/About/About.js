import styles from "./About.module.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IconKpk } from "../../components/IconKpk/IconKpk";
import { IconPunjab } from "../../components/IconPunjab/IconPunjab";
import { IconSindh } from "../../components/IconSindh/IconSindh";
import { IconBalochistan } from "../../components/IconBalochistan/IconBalochistan";
import HorizontalScroll from "../../components/HorizontalScroller/HorizontalScroller";
import { PunjabtouristSpots } from "../../FakeData";
import { Footer } from "../../components/Footer/Footer";

const Services = () => {
   return (
      <>
         <NavBar />
         <div className={styles.container}>
            <div className={styles.header}>
               <div>
                  <h1>Explore Tourist Attraction Cities of Pakistan</h1>
                  <p>Life is short and the world is wide. So, better get started. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, nisl nec lacinia lacinia, nisl nisl tincidunt nisl, nec tincidunt nisl lorem nec nisl.
                  </p>
               </div>
               <img src="../static/images/citiesPageHeader.png" alt="CitiesHead" />
            </div>
            <div className={styles.tabs}>
               <Tabs focusTabOnClick={false}>
                  <TabList>
                     <Tab>
                        <IconPunjab />
                        <p>Punjab</p>
                     </Tab>
                     <Tab>
                        <IconKpk />
                        <p>KPK</p>
                     </Tab>
                     <Tab><IconSindh />
                        <p>Sindh</p></Tab>
                     <Tab>
                        <IconBalochistan />
                        <p>Balochistan</p>
                     </Tab>
                  </TabList>
                  <TabPanel>
                     {PunjabtouristSpots.map((e, index) => (
                        < HorizontalScroll key={index} spots={e} />
                     ))}
                  </TabPanel>
                  <TabPanel>
                     {PunjabtouristSpots.map((e, index) => (
                        < HorizontalScroll key={index} spots={e} />
                     ))}
                  </TabPanel>
                  <TabPanel>
                     {PunjabtouristSpots.map((e, index) => (
                        < HorizontalScroll key={index} spots={e} />
                     ))}
                  </TabPanel>
                  <TabPanel>
                     {PunjabtouristSpots.map((e, index) => (
                        < HorizontalScroll key={index} spots={e} />
                     ))}
                  </TabPanel>
               </Tabs>
            </div>
         </div>
         <Footer />
      </>
   );
};

export default Services;
