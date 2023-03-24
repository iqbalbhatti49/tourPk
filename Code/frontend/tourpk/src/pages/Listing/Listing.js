import React from 'react'
import styles from './Listing.module.css'
import { ListingHotel } from "../../FakeData.js"
import { IconStar } from '../../components/IconStar/IconStar';
import InfoBox from '../../components/InfoBox/InfoBox';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import ServiceBox from '../../components/ServiceBox/ServiceBox';
import SellerProfile from '../../components/SellerProfile/SellerProfile';
import { BookingSummary } from '../../components/BookingSummary/BookingSummary';

export default function () {
  const hotelData = ListingHotel[0];
  const bigImage = hotelData.pictures.shift(); // remove the first image from the array to use it as the big image
  const rightImages = hotelData.pictures.splice(0, 4); // get the next 4 images from the array to use as the right-side images

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.headingListing}>{hotelData.name}</h1>
          <p className={styles.tourInfo}><span className={styles.separator}>&#8226;</span> {hotelData.rating} <IconStar /> <span className={styles.separator}>&#8226;</span> {hotelData.location} </p>
          <ImageGallery bigImage={bigImage} rightImages={rightImages} />
        </div>

        <div id={styles.listingBody}>
          <div className={styles.listingContent}>
            <h2 className={styles.headingListing}>{hotelData.tagline}</h2>
            <p className={styles.tourInfo}>
              {(hotelData.Accomodation).map((item, index) => {
                return (
                  <span key={index} className={styles.separator}>&#8226; {item} </span>
                )})}
            </p>
            <hr className={styles.divider} />

            <h3 className={styles.headingListing}> What this place offers</h3>
            <div className={styles.infoBoxContainer}>
              {hotelData.offers.map((item, index) => {
                return (
                  <InfoBox key={index} text={item} />
                )})}              
            </div>

            <hr className={styles.divider} />
              {Object.entries(hotelData.About_place).map(([key, value]) => (
                <div key={key}>
                  <h3>{value[0]}</h3>
                  <p>{value[1]}</p>
                </div>
              ))}

              <hr className={styles.divider} />
              <h3>Accomodation</h3>
              <div className={styles.box}>
                {
                  hotelData.bedrooms.map((item, index) => {
                    return (
                      <ServiceBox key={index} heading={`Bedroom ${index+1}`} description={item} />
                    )})
                }
              </div>

              <hr className={styles.divider} />
              <SellerProfile />
              <hr className={styles.divider} />

            <h3>Things to know</h3>
            <div className={styles.infoBoxContainer}>
              {
                hotelData.things_to_know.map((item, index)=> {
                  return (
                    <InfoBox key={index} text={item} />
                  )})
              }
            </div>
            <hr className={styles.divider} />
          </div>

          <div className={styles.summary}>
            <div>
              <BookingSummary />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )}