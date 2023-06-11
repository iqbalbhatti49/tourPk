import React, { useEffect, useState } from 'react';
import styles from './TourGuideListing.module.css';
import { Button, Carousel } from '../../components';
import { Testimonial, BookingCalendar, Rating } from '../../components';
import ReviewForm from '../../components/ReviewForm.js/ReviewForm';
import { useLocation } from "react-router";
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart, addItem } from '../../app/features/cart/cartSlice';
import axiosInstance from '../../utils/Api';
import { getReviewsStats } from '../../utils/FindReviewStats';
import { IconEdit, IconDelete } from "../../components/index";

export default function TourGuideListing() {
   const currentUser = useSelector(state => state.user.id);
   const location = useLocation();
   // console.log(location.state); // Output below
   const discount = useSelector(state => state.pricing.discount);
   const { id } = useParams();
   const dispatch = useDispatch();
   const userId = useSelector((state) => state.user.id);
   const [selectedDate, setSelectedDate] = useState(null);
   const [reviewCount, setreviewCount] = useState(null);
   const [ratingAverge, setratingAverge] = useState(null);
   const [data, setData] = useState(null);
   const bookingState = useSelector((state) => state.bookings.bookingStatus);
   const navigate = useNavigate();

   useEffect(() => {
      const getTourGuide = async () => {
         const response = await axiosInstance.get(`/TourGuide/getTourGuideById/${id}`);
         const { Service: { Reviews, ...serviceData }, TourGuideImages, ...restData } = response.data;
         const TourGuide = restData;
         const Service = serviceData;
         const TourGuideData = {
            Service,
            TourGuide,
            Reviews,
            TourGuideImages
         };
         setData(TourGuideData);
         console.log(TourGuideData);
         const { reviewsCount, ratingAvg } = getReviewsStats(Reviews);
         setratingAverge(ratingAvg);
         setreviewCount(reviewsCount);
      };
      getTourGuide();
   }, [id]);

   const handleDateChange = (date) => {
      console.log('Selected date:', date.toISOString().split('T')[0]);
      setSelectedDate(date.toISOString().split('T')[0]);
   };

   const handleClick = () => {
      if (selectedDate == null) {
         swal({
            title: 'Date Missing',
            text: 'First select an available date from the calender.',
            icon: 'error',
            buttons: {
               confirm: true,
            },
         })
         return;
      }
      dispatch(clearCart());
      const newItem = {
         imageSrc: tourGuideInfo.TourGuideImages[0].imageUrl,
         title: tourGuideInfo.Service.name,
         count: 1,
         price: tourGuideInfo.perDayRate,
         discountedPrice: tourGuideInfo.perDayRate - (tourGuideInfo.perDayRate * (discount / 100)),
      };
      dispatch(addItem(newItem));
      const totalPrice = tourGuideInfo["perDayRate"];
      const payLaod = { userId, id, selectedDate, totalPrice, type: "tourguide" };
      navigate("/checkout", { state: { payLaod } });
   }

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
               TourGuideId: data.TourGuide.id
            };
            axiosInstance.post(`/tourguide/deleteTourGuide/`, ids);
            navigate("/");
         } else {
            console.log('User clicked on "Cancel"');
         }
      });
   }

   const handleUpdate = () => {
      const state = {
         data, serviceType: "Tour Guide"
      }
      navigate("/AddService?edit=1", { state: state });
   }

   // Render the component once the data is available
   if (!data) {
      return <div>Loading...</div>;
   }

   //to send on Update option


   return (
      <div className={styles.container}>
         <div className={styles.header}>
            <div className={styles.information}>
               {/* <h1 className={styles.heading}>Meet {data.Service.name}</h1> */}
               <div className={styles.iconsDelEdit}>
                  <h1 className={styles.heading}>Meet {data.Service.name}</h1>
                  {
                     currentUser === data.TourGuide.UserId &&
                     <div className={styles.iconsBox}>
                        {/* <Link to={`/AddTravelAgent?edit=1`} state={state}>  */}
                        <button className={styles.delete} onClick={handleUpdate}>
                           <IconEdit />
                        </button>
                        {/* </Link> */}
                        <button className={styles.delete} onClick={handleDelete}>
                           <IconDelete />
                        </button>
                     </div>
                  }
               </div>
               <div className={styles.attributesContainer}>
                  {Object.entries(data.TourGuide).map(([key, value]) => (
                     key !== 'id' && key !== 'ServiceId' && key !== 'UserId' ? (
                        <div className={styles.attributes} key={key}>
                           <p className={styles.key}>{key}</p>
                           <p>{value}</p>
                        </div>) : null
                  ))}
               </div>
            </div>
            <Carousel />
         </div>

         <div className={styles.details}>
            <div className={styles.about}>
               <div>
                  <h2 className={styles.subHeading}>About  {data.Service.name}</h2>
                  <p className={styles.description}>{data.Service.description}</p>
               </div>
               <div>
                  <h2 className={styles.subHeading}>People's Opinion</h2>
                  <Testimonial />
                  <div className={styles.booking}>
                     <p>Select a date from the given calender to book me and click the button below.</p>
                     <Button btnType="submit" value="Book Now" handleClick={handleClick} />
                  </div>
               </div>
            </div>
            <div>
               <Rating rating={ratingAverge ? ratingAverge : 4.5} />
               <div>
                  <h2 className={styles.subHeading}>Pricing</h2>
                  <div className={styles.pricing}>
                     <p className={styles.pricingKey}>Per Day</p>
                     <p className={styles.pricingValue}>{data.TourGuide.perDayRate}</p>
                  </div>
               </div>
               <div>
                  <h2 className={styles.subHeading}>Booking Calendar</h2>
                  <div className={styles.calendar}>
                     <BookingCalendar selectedDate={selectedDate} onDateChange={handleDateChange} />
                  </div>
               </div>
            </div>
         </div>
         <ReviewForm serviceId={data.Service.id} />
      </div>
   );
}