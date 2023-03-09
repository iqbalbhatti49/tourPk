import styles from "./Services.module.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { LahoreHotles, LahoreResturants } from "../../FakeData";
import { IconHotel } from "../../components/IconHotel/IconHotel";
import { IconResturant } from "../../components/IconResturant/IconResturant";
import { IconGuide } from "../../components/IconGide/IconGuide";
import { IconAgent } from "../../components/IconAgent/IconAgent";
import { HotelCard } from "../../components/HotelCard/HotelCard";
import { Footer } from "../../components/Footer/Footer";

const Services = () => {
   return (
      <>
         <NavBar />
         <div className={styles.container}>
            <div className={styles.header}>
               <p className={styles.subHeading}>{`Our Services`}</p>
               <h1 className={styles.Heading}>Book What You Want</h1>
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
         <Footer />
      </>
   );
};

export default Services;
