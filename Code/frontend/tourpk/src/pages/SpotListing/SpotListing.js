import React, { useEffect } from 'react';
import styles from './SpotListing.module.css';
import { Carousel } from '../../components';
import { HorizontalScroll, LocationPicker } from "../../components/index";
import { LahoreHotles, LahoreResturants } from "../../utils/FakeData";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axiosInstance from '../../utils/Api';
import { PlaceCard } from '../../components/PlaceCard/PlaceCard';

export default function SpotListing() {
  const [locationValue, setLocationValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [services, setServices] = useState(null); // State to store services fetched from the API

  function hideLocationPicker() {
    setIsVisible(false);
  }
  function handleLocationChange(location) {
    setLocationValue(`${location.lat},${location.lng}`);
  }

  const location = useLocation();
  const city = location.state;
  const img = [{ imageUrl: city.picture }]
  const cityFromLocation = (location) => {
    const words = location.split(',');
    const firstWord = words[0].trim();
    return firstWord;
  };

  const cityy = cityFromLocation(city.location);
  console.log(city);
  // useEffect(() => {
  //   const fetchServices = async () => {
  //     try {
  //       const response = await axiosInstance.post('/service/spotsByCities', { city: cityy });
  //       setServices(response.data); // Store the fetched services in the state
  //       console.log(response.data)
  //       console.log(services)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchServices(); // Call the fetchServices function when the component mounts
  // }, []);
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
        
        {/* {services != null ? 
        <div>
          <h2 className={styles.subHeading}>Service NearBy</h2>
          {services.map((e, index) => (
                     <div>
                      {services.name}
                      </div>
                  ))}
        </div>
        :
        <><p>loading</p></>} */}
      </div>
     
    </div>
  );
}
