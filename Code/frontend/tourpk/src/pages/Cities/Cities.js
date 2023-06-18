import styles from "./Cities.module.css";
import 'react-tabs/style/react-tabs.css';
import { useSelector, IconKpk, IconPunjab, IconSindh, IconBalochistan, 
   HorizontalScroll, Tab, Tabs, TabList, TabPanel } from "../../components/index";

const Cities = () => {
   const data = useSelector((state) => state.cities.provinces);

   const punjabSpots = data.find(p => p.name === 'Punjab').cities.map(c => c.spots);
   const kpkSpots = data.find(c => c.name === 'Khyber Pakhtunkhwa').cities.map(c => c.spots);
   const balochistanSpots = data.find(p => p.name === 'Balochistan').cities.map(c => c.spots);
   const sindhSpots = data.find(p => p.name === 'Sindh').cities.map(c => c.spots);

   return (
      <>
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
                     {punjabSpots.map((e, index) => (
                        < HorizontalScroll key={index} spots={e} />
                     ))}
                  </TabPanel>
                  <TabPanel>
                     {kpkSpots.map((e, index) => (
                        < HorizontalScroll key={index} spots={e} />
                     ))}
                  </TabPanel>
                  <TabPanel>
                     {sindhSpots.map((e, index) => (
                        < HorizontalScroll key={index} spots={e} />
                     ))}
                  </TabPanel>
                  <TabPanel>
                     {balochistanSpots.map((e, index) => (
                        < HorizontalScroll key={index} spots={e} />
                     ))}
                  </TabPanel>
               </Tabs>
            </div>
         </div>
      </>
   );
};

export default Cities;
