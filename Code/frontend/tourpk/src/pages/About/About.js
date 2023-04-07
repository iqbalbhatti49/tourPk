import styles from "./About.module.css";
import 'react-tabs/style/react-tabs.css';
import { PunjabtouristSpots } from "../../FakeData";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { NavBar, IconKpk, IconPunjab, IconSindh, IconBalochistan, HorizontalScroll, Footer } from "../../components/index";


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
