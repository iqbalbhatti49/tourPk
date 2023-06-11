import React, { useEffect, useState } from 'react'
import styles from './TravelAgentListing.module.css'
import { Button, Carousel, CircularRating } from '../../components';
import { Testimonial, BookingCalendar, Rating } from '../../components';
import ReviewForm from '../../components/ReviewForm.js/ReviewForm';
import { useLocation, useParams } from "react-router";
import axiosInstance from '../../utils/Api';
import { IconEdit, IconDelete } from "../../components/index";
import swal from 'sweetalert';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function TravelAgentListing() {
   const currentUser = useSelector(state => state.user.id);
   const location = useLocation();
   const { id } = useParams();
   const [data, setData] = useState(null);
   const [reviewCount, setreviewCount] = useState(5);
   const [ratingAverge, setratingAverge] = useState(4.5);
   const [loading, setLoading] = useState(true);
   const [isReviewsAvailable, setisReviewsAvailable] = useState(true);

   const handleDelete = () => {
      swal({
         title: 'Are you sure?',
         text: 'You will not be able to recover this Listing!',
         icon: 'warning',
         buttons: ['Cancel', 'Confirm'],
         dangerMode: true,
      }).then((clickedBtn) => {
         if (clickedBtn) {
            console.log('User clicked on confirm');
            const ids = {
               ServiceId: data.Service.id,
               TravelAgentId: data.TravelAgent.id
            };
            axiosInstance.post(`/deleteTourPackage/`, ids);
            navigate("/");
         } else {
            console.log('User clicked on "Cancel"');
         }
      });
   }


   const getTravelAgent = async () => {
      try {
         const response = await axiosInstance.get(`/travelagent/getTravelAgentById/${id}`);
         const { Service: { Reviews, ...serviceData }, TravelAgentImages, ...restData } = response.data;
         const TravelAgent = restData;
         const Service = serviceData;
         const TravelAgentData = {
            Service,
            TravelAgent,
            Reviews,
            TravelAgentImages
         };
         setData(TravelAgentData);
         const { reviewsCount, ratingAvg } = getReviewsStats(Reviews);
         setratingAverge(ratingAvg);
         setreviewCount(reviewsCount);

         if (TravelAgentData.hasOwnProperty("Reviews"))
            setisReviewsAvailable(true);
         else
            setisReviewsAvailable(false);
         setLoading(false);

      } catch (error) {
         setLoading(false);
      }
   };

   useEffect(() => {
      getTravelAgent();
      // console.log(location.state);
   }, []);

   if (loading) {
      return <div>Loading...</div>;
   }

   return (
      <div className={styles.container}>
         <div className={styles.header}>
            <div className={styles.information}>
               <div className={styles.iconsDelEdit}>
                  <h1 className={styles.heading}>{data.Service.name}</h1>
                  {
                     currentUser === data.TravelAgent.UserId &&
                     <div className={styles.iconsBox}>
                        <Link to={`/AddTravelAgent?edit=1`} state={data}> {/* set a stateful value for the new location */}
                           <IconEdit />
                        </Link>
                        <button className={styles.delete} onClick={handleDelete}>
                           <IconDelete />
                        </button>
                     </div>
                  }
               </div>
               <div className={styles.attributesContainer}>
                  {Object.entries(data.TravelAgent).map(([key, value]) => (
                     key !== 'ServiceId' && key !== 'id' && key !== 'UserId' && key !== 'itenerary' && key !== 'packagePrice' ? (
                        <div className={styles.attributes} key={key}>
                           <p className={styles.key}>{key}</p>
                           <p>{value}</p>
                        </div>
                     ) : null
                  ))}
                  <div className={styles.attributes} >
                     <p className={styles.key}>Our Website: </p>
                     <p>{data.Service.website}</p>
                  </div>
               </div>
            </div>
            <Carousel imageList={data.TravelAgentImages} />
         </div>

         <div className={styles.details}>
            <div className={styles.about}>
               <div>
                  <h2 className={styles.subHeading}>Travel itinerary (schedules)  </h2>
                  <p className={styles.description}>
                     {data.TravelAgent.itenerary}
                  </p>
               </div>
               <div>
                  <h2 className={styles.subHeading}>Other details </h2>
                  <p className={styles.description}>
                     {data.Service.description}
                  </p>
               </div>
               <div>
                  <h2 className={styles.subHeading}>Contact for queries </h2>
                  <div className={styles.attributes} >
                     <p className={styles.key}>Phone: </p>
                     <p>{data.Service.phone}</p>
                  </div>
                  <div className={styles.attributes} >
                     <p className={styles.key}>Email: </p>
                     <p>{data.Service.email}</p>
                  </div>
               </div>
               <div>
                  {isReviewsAvailable && <div>
                     <h2 className={styles.subHeading}>People's Opinion</h2>
                     <Testimonial />
                  </div>
                  }
                  <div className={styles.booking}>
                     <Button value="Book Now" />
                  </div>
               </div>
            </div>
            <div>
               <div>
                  {isReviewsAvailable &&
                     <div className={styles.ratingPricing}>
                        <h2 className={styles.subHeading}>Ratings</h2>
                        <div className={styles.rating}>
                           <CircularRating rating={ratingAverge} />
                           <p className={styles.ratingText}>Based on {reviewCount} Reviews</p>
                        </div>
                     </div>
                  }
               </div>
               <div>
                  <h2 className={styles.subHeading}>Pricing</h2>
                  <div className={styles.pricing}>
                     <p className={styles.pricingKey}>Package Price</p>
                     <p className={styles.pricingValue}> Rs. {data.TravelAgent.packagePrice}</p>
                  </div>
               </div>
               <div>
                  <h2 className={styles.subHeading}>Booking Calender</h2>
                  <div className={styles.calender}>
                     <BookingCalendar />
                  </div>
               </div>
            </div>
         </div>

         <ReviewForm serviceId={2} />
      </div>


   );
}
