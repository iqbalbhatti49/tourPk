import React from 'react'
import styles from './RestaurantListing.module.css'
import { ListingHotel } from "../../utils/FakeData.js"
import { IconStar, InfoBox, ImageGallery, ServiceBox, SellerProfile, BookingSummary } from '../../components/index';

export default function RestaurantListing() {
    const hotelData = ListingHotel[0];
    const bigImage = hotelData.pictures.shift(); // remove the first image from the array to use it as the big image
    const rightImages = hotelData.pictures.splice(0, 4); // get the next 4 images from the array to use as the right-side images

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.headingRestaurantListing}>{hotelData.name}</h1>
                <p className={styles.tourInfo}><span className={styles.separator}>&#8226;</span> {hotelData.rating} <IconStar /> <span className={styles.separator}>&#8226;</span> {hotelData.location} </p>
                <ImageGallery bigImage={bigImage} rightImages={rightImages} />
            </div>

            <div id={styles.RestaurantListingBody}>
                <div className={styles.RestaurantListingContent}>
                    <h2 className={styles.headingRestaurantListing}>{hotelData.tagline}</h2>
                    <p className={styles.tourInfo}>
                        {(hotelData.Accomodation).map((item, index) => {
                            return (
                                <span key={index} className={styles.separator}>&#8226; {item} </span>
                            )
                        })}
                    </p>
                    <hr className={styles.divider} />

                    <h3 className={styles.headingRestaurantListing}> Cuisines </h3>
                    <div className={styles.infoBoxContainer}>
                        {hotelData.offers.map((item, index) => {
                            return (
                                <InfoBox key={index} text={item} />
                            )
                        })}
                    </div>

                    <hr className={styles.divider} />

                    <h3 className={styles.headingRestaurantListing}> Features </h3>
                    <div className={styles.infoBoxContainer}>
                        {hotelData.offers.map((item, index) => {
                            return (
                                <InfoBox key={index} text={item} />
                            )
                        })}
                    </div>

                    <hr className={styles.divider} />
                    <h3 className={styles.headingRestaurantListing}> Meals </h3>
                    <div className={styles.infoBoxContainer}>
                        {hotelData.offers.map((item, index) => {
                            return (
                                <InfoBox key={index} text={item} />
                            )
                        })}
                    </div>

                    <hr className={styles.divider} />

                    <h3> Restaurant xyz </h3>
                    <p> this is amazing this is amazing this is amazing this is amazing this is amazing this is amazingthis is amazing </p>


                    <hr className={styles.divider} />
                </div>

                <div className={styles.summary}>
                    <div>
                        <BookingSummary />
                    </div>
                </div>
            </div>
        </div>
    );
}
