import styles from "./Services.module.css";
import 'react-tabs/style/react-tabs.css';
import { IconHotel, IconResturant, IconGuide, IconAgent, HotelCard, useNavigate,
   useEffect, useState, axiosInstance, Link, useLocation, Tab, Tabs, TabList, TabPanel } 
from "../../components/index";

const Services = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);
   const [restaurants, setRestaurants] = useState([]);
   const [hotels, setHotels] = useState([]);
   const [tourGuides, setTourGuides] = useState([]);
   const [travelAgent, setTravelAgent] = useState([]);
   const getRestaurants = async () => {
      const res = await axiosInstance.get("/restaurant/getRestaurants");
      setRestaurants(res.data);
   }
   const getHotels = async () => {
      const res = await axiosInstance.get("/hotel/getHotels");
      setHotels(res.data);
   }
   const getTravelAgents = async () => {
      const res = await axiosInstance.get("/travelAgent/getTravelAgents");
      setTravelAgent(res.data);
   }
   const getTourGuides = async () => {
      const res = await axiosInstance.get("/tourguide/getTourGuides");
      setTourGuides(res.data);
   }
   useEffect(() => {
      Promise.all([getRestaurants(), getHotels(), getTravelAgents(), getTourGuides()])
         .then(() => {
            setIsLoading(false);
         })
         .catch((error) => {
            setError(error);
            setIsLoading(false);
         });
   }, []);
   if (isLoading) {
      return <div>Loading...</div>;
   }
   if (error) {
      return <div>Error: {error.message}</div>;
   }
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
                     <p>Restaurants</p>
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
                     {hotels.map((item, index) => {
                        return (
                           <Link to={`/hotelListing/${item.id}`}>
                              <HotelCard
                                 key={index}
                                 data={item}
                                 type="Hotel"
                              />
                           </Link>
                        );
                     })}
                  </div>
               </TabPanel>
               <TabPanel>
                  <div className={styles.tabCards}>
                     {restaurants.map((item, index) => {
                        return (
                           <Link to={`/restaurantListing/${item.id}`}>
                              <HotelCard
                                 key={index}
                                 data={item}
                                 type="Restaurant"
                              />
                           </Link>
                        );
                     })}
                  </div>
               </TabPanel>
               <TabPanel>
                  <div className={styles.tabCards}>
                     {tourGuides.map((item, index) => {
                        return (
                           <Link to={`/tourGuideListing/${item.id}`}>
                              <HotelCard
                                 key={index}
                                 data={item}
                                 type="TourGuide"
                              />
                           </Link>
                        );
                     })}
                  </div>
               </TabPanel>
               <TabPanel>
                  <div className={styles.tabCards}>
                     {travelAgent.map((item, index) => {
                        return (
                           <Link to={`/travelAgentListing/${item.id}`}>
                              <HotelCard
                                 key={index}
                                 data={item}
                                 type="TravelAgent"
                              />
                           </Link>
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
