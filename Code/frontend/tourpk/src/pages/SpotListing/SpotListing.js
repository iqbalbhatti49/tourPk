import React from 'react'
import styles from './SpotListing.module.css'
import { Carousel } from '../../components';
import { HorizontalScroll, LocationPicker } from "../../components/index";
import { LahoreHotles, LahoreResturants } from "../../utils/FakeData";
import { Testimonial } from '../../components';
import { useState } from 'react';

export default function SpotListing() {
  const [locationValue, setLocationValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  function hideLocationPicker() {
    setIsVisible(false);
  }
  function handleLocationChange(location) {
    setLocationValue(`${location.lat},${location.lng}`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.flex}>
          <div>
            <h1 className={styles.heading}>Explore Shalimar Gardens</h1>
            <p>Explore Pakistan's beauty and culture with tourPk
              Are you planning a vacation to enjoy your free time? Looking for a place to explore, eat and enjoy your vacation with your loved ones or Are you a solo traveler who travels often for a wonderful experiences.
              Explore Pakistan's beauty and culture with tourPk
              Are you planning a vacation to enjoy your free time? Looking for a place to explore, eat and enjoy your vacation with your loved ones or Are you a solo traveler who travels often for a wonderful experiences.  Explore Pakistan's beauty and culture with tourPk
              Are you planning a vacation to enjoy your free time?</p>
          </div>
          <Carousel />
        </div>
        <div>
          <h2 className={styles.subHeading}>Best Near By Places To Visit</h2>
          <div>
            <HorizontalScroll title="RESTURANTS" items={LahoreResturants} />
          </div>
          <div>
            <HorizontalScroll title="HOTELS" items={LahoreHotles} />
          </div>
          <div>
            <HorizontalScroll title="TOUR GUIDES" items={LahoreResturants} />
          </div>
        </div>
      </div>
      <div className={styles.testimonial}>
        <div>
          <h2 className={styles.subHeading}>What People Says About This Place?</h2>
          <Testimonial data={data.Reviews} />
        </div>
        <div>
          <div className={styles.map}>
            <LocationPicker onChange={handleLocationChange} onClose={hideLocationPicker} />
          </div>
        </div>
      </div>
    </div>
  );
}
