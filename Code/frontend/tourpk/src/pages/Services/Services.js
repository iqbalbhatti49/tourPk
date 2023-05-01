import styles from "./Services.module.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { LahoreHotles, LahoreResturants } from "../../utils/FakeData";
import { IconHotel, IconResturant, IconGuide, IconAgent, HotelCard } from "../../components/index";
import { useLocation } from "react-router-dom";

const Services = () => {
   const location = useLocation();
   console.log(location.search);
   return (
      <div className={styles.container}>
         <div className={styles.header}>
            <p className={styles.subHeading}>{`Our Services`}</p>
            <h1 className={styles.Heading}>Book What You Want</h1>
            <p className={styles.description}>
               Do what you can, with what you have, where you are.Do what you can, with what you have, where you are.Do what you can, with what you have, where you are.
            </p>
         </div>
         <div className={styles.tabs}>
            <Tabs focusTabOnClick={false}>
               <TabList>
                  <Tab>
                     <IconHotel />
                     <p>Hotels</p>
                  </Tab>
                  <Tab>
                     <IconResturant />
                     <p>Resturants</p>
                  </Tab>
                  <Tab><IconGuide />
                     <p>Tourist Guides</p></Tab>
                  <Tab>
                     <IconAgent />
                     <p>Travel Agents</p>
                  </Tab>
               </TabList>
               <TabPanel>
                  <div className={styles.tabCards}>
                     {LahoreHotles.map((item, index) => {
                        return (
                           <HotelCard
                              key={index}
                              hotel={item}
                           />
                        );
                     })}
                  </div>
               </TabPanel>
               <TabPanel>
                  <div className={styles.tabCards}>
                     {LahoreResturants.map((item, index) => {
                        return (
                           <HotelCard
                              key={index}
                              hotel={item}
                           />
                        );
                     })}
                  </div>
               </TabPanel>
               <TabPanel>
                  <div className={styles.tabCards}>
                     {LahoreHotles.map((item, index) => {
                        return (
                           <HotelCard
                              key={index}
                              hotel={item}
                           />
                        );
                     })}
                  </div>
               </TabPanel>
               <TabPanel>
                  <div className={styles.tabCards}>
                     {LahoreHotles.map((item, index) => {
                        return (
                           <HotelCard
                              key={index}
                              hotel={item}
                           />
                        );
                     })}
                  </div>
               </TabPanel>
            </Tabs>
         </div>
      </div>
   );
};

export default Services;
