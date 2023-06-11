import styles from "./Services.module.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { LahoreHotles, LahoreResturants } from "../../utils/FakeData";
import { IconHotel, IconResturant, IconGuide, IconAgent, HotelCard } from "../../components/index";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/Api";
import { useNavigate } from "react-router-dom";


const Services = () => {

   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);
   const [restaurants, setRestaurants] = useState([]);
   const [hotels, setHotels] = useState([]);
   const [tourGuides, setTourGuides] = useState([]);
   const [travelAgent, setTravelAgent] = useState([]);

   const getRestaurants = async () => {
      const res = await axiosInstance.get("/restaurant/getRestaurants");
      console.log("restrnt ----: ", res.data);
      setRestaurants(res.data);
   }
   const getHotels = async () => {
      const res = await axiosInstance.get("/hotel/getHotels");
      console.log("hotl ----: ", res.data);
      setHotels(res.data);
   }
   const getTravelAgents = async () => {
      const res = await axiosInstance.get("/travelAgent/getTravelAgents");
      console.log("Tagent ----: ", res.data);
      setTravelAgent(res.data);
   }
   const getTourGuides = async () => {
      const res = await axiosInstance.get("/tourguide/getTourGuides");
      console.log("tguide ----: ", res.data);
      setTourGuides(res.data);
   }

   useEffect(() => {
      Promise.all([getRestaurants(), getHotels(), getTravelAgents(), getTourGuides()])
         .then(() => {
            setIsLoading(false);
            console.log("SUCCESSFULLY fetched 4 services*******");
         })
         .catch((error) => {
            setError(error);
            setIsLoading(false);
         });
   }, []);

   const location = useLocation();
   const navigate = useNavigate();

   const handleRestaurantClick = (item) => {
      console.log("goin ahed --> ", item);
      // navigate(`/restaurantListing/${id}`, { state: "showReviews" });
   }

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
                           <HotelCard
                              key={index}
                              data={item}
                              type="Hotel"
                           />
                        );
                     })}
                  </div>
               </TabPanel>
               <TabPanel>
                  <div className={styles.tabCards}>
                     {restaurants.map((item, index) => {
                        return (
                           <a key={index} href="" onClick={() => handleRestaurantClick(item)}>
                              <HotelCard
                                 key={index}
                                 data={item}
                                 type="Restaurant"
                              />
                           </a>
                        );
                     })}
                  </div>
               </TabPanel>
               <TabPanel>
                  <div className={styles.tabCards}>
                     {tourGuides.map((item, index) => {
                        return (
                           <HotelCard
                              key={index}
                              data={item}
                              type="TourGuide"
                           />
                        );
                     })}
                  </div>
               </TabPanel>
               <TabPanel>
                  <div className={styles.tabCards}>
                     {travelAgent.map((item, index) => {
                        return (
                           <HotelCard
                              key={index}
                              data={item}
                              type="TravelAgent"
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
