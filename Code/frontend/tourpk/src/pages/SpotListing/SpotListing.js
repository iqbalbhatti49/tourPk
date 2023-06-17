import styles from './SpotListing.module.css';
import 'react-tabs/style/react-tabs.css';
import { IconHotel, IconResturant, IconGuide, IconAgent, HotelCard, Carousel, React, useState,
  useEffect, axiosInstance, Link, useLocation, Tab, Tabs, TabList, TabPanel } 
from "../../components/index";

export default function SpotListing() {
  const [locationValue, setLocationValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [services, setServices] = useState(null); // State to store services fetched from the API
  const [hotels, setHotels] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [tourGuides, setTourGuides] = useState([]);
  const [travelAgents, setTravelAgents] = useState([]);

  function hideLocationPicker() {
    setIsVisible(false);
  }
  function handleLocationChange(location) {
    setLocationValue(`${location.lat},${location.lng}`);
  }

  const location = useLocation();
  const city = location.state;
  const img = [{ imageUrl: city.picture }];
  const cityFromLocation = (location) => {
    const words = location.split(',');
    const firstWord = words[0].trim();
    return firstWord;
  };

  const cityy = cityFromLocation(city.location);
  console.log(city);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axiosInstance.post('/service/spotsByCities', { city: cityy });
        setServices(response.data); // Store the fetched services in the state
        console.log(response.data);

        // Extracting hotels, restaurants, tour guides, and travel agents into separate arrays
        const extractedHotels = response.data.map(service => {
          if(service.Hotels.length != 0) 
          {
            const fromattedHotel = {};
            fromattedHotel.id = service.id
            fromattedHotel.Service = {
              name:service.name,
              address:service.address,
              Reviews : service.Reviews
            }
            fromattedHotel.HotelImages = service.Hotels[0].HotelImages;
            return fromattedHotel;
          }
          else return null;
        }).flat();
        const extractedRestaurants = response.data.map(service => {
          if(service.Restaurants.length != 0) 
          {
            const fromatted = {};
            fromatted.id = service.id
            fromatted.Service = {
              name:service.name,
              address:service.address,
              Reviews : service.Reviews
            }
            fromatted.RestaurantImages = service.Restaurants[0].RestaurantImages;
            return fromatted;
          }
          else return null;
        }).flat();
        const extractedTourGuides = response.data.map(service => {
          if(service.TourGuides.length != 0) 
          {
            const fromatted = {};
            fromatted.id = service.id
            fromatted.Service = {
              name:service.name,
              address:service.address,
              Reviews : service.Reviews
            }
            fromatted.TourGuideImages = service.TourGuides[0].TourGuideImages;
            return fromatted;
          }
          else return null;
        }).flat();
        const extractedTravelAgents = response.data.map(service => {
          if(service.TravelAgents.length != 0) 
          {
            const fromatted = {};
            fromatted.id = service.id
            fromatted.Service = {
              name:service.name,
              address:service.address,
              Reviews : service.Reviews
            }
            fromatted.TravelAgentImages = service.TravelAgents[0].TravelAgentImages;
            return fromatted;
          }
          else return null;
        }).flat();

        setHotels(extractedHotels);
        setRestaurants(extractedRestaurants);
        setTourGuides(extractedTourGuides);
        setTravelAgents(extractedTravelAgents);
        // console.log(extractedHotels)//,extractedRestaurants,extractedTourGuides,extractedTravelAgents)
      } catch (error) {
        console.error(error);
      }
    };
    fetchServices(); // Call the fetchServices function when the component mounts
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.flex}>
          <div>
            <h1 className={styles.heading}>Explore {city.name}</h1>
            <p>{city.Description}</p>
            <p>{city.location}</p>
            <p>{city.reviews} Reviews</p>
            <p>{city.rating} Rating</p>
            <p>{city.tagline}</p>
          </div>
          <Carousel imageList={img}/>
        </div>
        {/* Conditional rendering for services */}
        {services && (
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
                      if(item != null)
                      {
                        
                        return (
                          <Link to={`/hotelListing/${item.id}`}>
                             <HotelCard
                                key={index}
                                data={item}
                                type="Hotel"
                             />
                          </Link>
                       );
                      }
                   })}
                </div>
             </TabPanel>
             <TabPanel>
                <div className={styles.tabCards}>
                   {restaurants.map((item, index) => {
                    if(item != null)
                    {
                      return (
                         <Link to={`/restaurantListing/${item.id}`}>
                            <HotelCard
                               key={index}
                               data={item}
                               type="Restaurant"
                            />
                         </Link>
                      );
                    }
                   })}
                </div>
             </TabPanel>
             <TabPanel>
                <div className={styles.tabCards}>
                   {tourGuides.map((item, index) => {
                     if(item != null)
                     {
                      console.log(item)
                      return (
                         <Link to={`/tourGuideListing/${item.id}`}>
                            <HotelCard
                               key={index}
                               data={item}
                               type="TourGuide"
                            />
                         </Link>
                      );}
                   })}
                </div>
             </TabPanel>
             <TabPanel>
                <div className={styles.tabCards}>
                   {travelAgents.map((item, index) => {
                    if(item != null)
                    {
                     console.log(item)
                      return (
                         <Link to={`/travelAgentListing/${item.id}`}>
                            <HotelCard
                               key={index}
                               data={item}
                               type="TravelAgent"
                            />
                         </Link>
                      );
                      }
                   })}
                </div>
             </TabPanel>
          </Tabs>
       </div>
        )}
      </div>
    </div>
  );
}
