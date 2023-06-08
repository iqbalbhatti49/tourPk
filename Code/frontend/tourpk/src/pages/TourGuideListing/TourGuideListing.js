import React from 'react'
import styles from './TourGuideListing.module.css'
import { Button, Carousel } from '../../components';
import { Testimonial, CircularRating, BookingCalendar } from '../../components';
import ReviewForm from '../../components/ReviewForm.js/ReviewForm';

export default function TourGuideListing() {
   const attributes = {
      "Name": "Ghulam Murtaza",
      "Experience": "12 Years(Since 2008)",
      "Gender": "Male",
      "Primary Guiding Area": "Islamabad",
      "Other Areas": "Hunza, Skardu, Chitral, Lahore, Taxila, Larkana, Thatta, Karachi, Peshawar, Mardan, Khanpur",
      "Languages": "English, Punjabi, Urdu"
   }

   return (
      <div>
         <div className={styles.container}>
            <div className={styles.header}>
               <div className={styles.information}>
                  <h1 className={styles.heading}>Meet {attributes["Name"]}</h1>
                  <div className={styles.attributesContainer}>
                     {Object.entries(attributes).map(([key, value]) => (
                        <div className={styles.attributes} key={key}>
                           <p className={styles.key}>{key}</p>
                           <p>{value}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <Carousel />
            </div>

            <div className={styles.details}>
               <div className={styles.about}>
                  <div>
                     <h2 className={styles.subHeading}>About {attributes["Name"]}</h2>
                     <p className={styles.description}>
                        I Am Ghulam Murtaza real local, born in remote village of "Sindh" southern province of Pakistan, Lives in well planned town, most naturally green and world's one of the most beautiful Capital cities the Capital City of Pakistan "Islamabad" and having more then 14 year experience of Guiding.Come to see my beautiful country Pakistan, Here I will show you sea to world's Highest mountains & longest ranges (Himalaya, Karakuram & Hindu Kush), Deserts to Lush Green Fields, world's oldest civilizations (2500 BCE to 3500 BCE) to most modern societies, Adventure tourism to luxurious tourism, oldest archaeological sites to most modern cities, most oldest cultures (Kalash culture) to advanced ones, Shrines, Hindu temples, sikh gurdwars, most important Buddhist sites like Sawat region to Texila region, we have south Asia's oldest town Peshawar. In north west part of Pakistan, world's highest paved road "The Karakuram Highway, and many more to see.Khush Aamdeed (welcome in Urdu) to the country of smiley faces and most curtseious Nation of world, where people are polite and very warm welcoming. We don't call tourists as clients we always call tourists " honoured Guests". In Pakistani society Guest are considered as Blessing of God. and how we welcomes our blessing for this you have to visit Pakistan atlest once.I am a attentive, friendly and enthusiastic Islamabad based local tour Guide.
                     </p>
                  </div>
                  <div>
                     <h2 className={styles.subHeading}>People's Opinion</h2>
                     <Testimonial />
                  </div>
               </div>
               <div>
                  <div className={styles.ratingPricing}>
                     <h2 className={styles.subHeading}>Ratings</h2>
                     <div className={styles.rating}>
                        <CircularRating rating={4.5} />
                        <p className={styles.ratingText}>Based on 10 Reviews</p>
                     </div>
                  </div>
                  <div>
                     <h2 className={styles.subHeading}>Pricing</h2>
                     <div className={styles.pricing}>
                        <div className={styles.pricingItem}>
                           <div>
                              <p className={styles.pricingKey}>Half Day</p>
                              <p className={styles.pricingValue}>$50</p>
                           </div>
                           <div>
                              <p className={styles.pricingKey}>Full Day</p>
                              <p className={styles.pricingValue}>$100</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <h2 className={styles.subHeading}>Booking Calender</h2>
                     <div className={styles.calender}>
                        <BookingCalendar />
                     </div>
                  </div>
                  <div className={styles.booking}>
                     <Button value="Book Now" />
                  </div>
               </div>
            </div>
         </div>
         <ReviewForm serviceId={2} />
      </div>
   );
}
