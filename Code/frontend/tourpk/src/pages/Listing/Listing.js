import React from 'react'
import styles from './Listing.module.css'
import {  Button, Carousel, ReviewForm, Rating, Testimonial } from '../../components/index';
import {hotalDataObj} from "../../utils/FakeData";

export default function Listing() {
  const service = hotalDataObj[0].hotelData.hotelData.service;
  const rooms = hotalDataObj[0].roomData;
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div>
          <h1 className={styles.heading}>{service.name}</h1>
          <p className={styles.tourInfo}>{service.address + ", " + service.city + ", " + service.country  + ", " + service.province}</p>
          <p className={styles.tourInfo}>{service.website}</p>
          <p className={styles.tourInfo}>{service.email}</p>
          <p className={styles.tourInfo}>{service.phone}</p>
          <h3 className={styles.headingListing}>Hotel Amenities</h3>
          <p>{hotalDataObj[0].hotelData.hotelData.hotelAmenities}</p>
          <h3 className={styles.headingListing}>About Hotel</h3>
          <p>{service.description}</p>
        </div>
        <Carousel />
      </div>
      <div>
          <h3 className={styles.subHeading}>Room Types</h3>
          {rooms.map((room, index) => {
            return (
              <div className={styles.roomWrapper}>
                <div className={styles.roomContainer} key={index}>
                  <h2 className={styles.headingListing}>{room.roomType}</h2>
                  <div className={styles.roomDetails}>
                    {Object.entries(room).map(([key, value]) => (
                      key !== "roomAmenities" && (
                        <div className={styles.detailItem} key={key}>
                          <span className={styles.detailLabel}>{key}:</span>
                          <span className={styles.detailValue}>{value}</span>
                        </div>
                      )
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className={styles.headingListing}>Room Ameneties</h2>
                  {room.roomAmenities}
                </div>
              </div>
            );
          })}
          
      </div>
      <div>
        <div className={styles.reviewsContainer}>
          <div className={styles.testimonial}>
            <h2 className={styles.subHeading}>People's Opinion</h2>
            <Testimonial/>
          </div>
          <div className={styles.rating}>
            <Rating/>
            <div className={styles.btn}>
            <Button value="Book Room Now" btnType="submit"/>
            </div>
          </div>
        </div>
      </div>
      <ReviewForm />
    </div>
  );
}
