import styles from "./Services.module.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
               <img src="../static/images/citiesPageHeader.svg" alt="CitiesHead" />
            </div>
            <Tabs focusTabOnClick={false}>
               <TabList>
                  <Tab>lahore</Tab>
                  <Tab>multan</Tab>
                  <Tab>punjab</Tab>
                  <Tab>pak</Tab>
               </TabList>
               <TabPanel>lahore</TabPanel>
               <TabPanel>multan</TabPanel>
               <TabPanel>punjab</TabPanel>
               <TabPanel>pak</TabPanel>
            </Tabs>
         </div>
      </>
   );
};

export default Services;
