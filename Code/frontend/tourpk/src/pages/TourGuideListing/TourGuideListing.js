import React, { useEffect, useState } from 'react';
import styles from './TourGuideListing.module.css';
import { Button, Carousel } from '../../components';
import { Testimonial, BookingCalendar, Rating } from '../../components';
import ReviewForm from '../../components/ReviewForm.js/ReviewForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart, addItem } from '../../app/features/cart/cartSlice';

export default function TourGuideListing() {
   const discount = useSelector(state => state.pricing.discount);
   const { id } = useParams();
   const dispatch = useDispatch();
   const userId = useSelector((state) => state.user.id);
   const [tourGuideInfo, setTourGuideInfo] = useState(null);
   const [selectedDate, setSelectedDate] = useState(null);
   const [bookings,setBookings] =useState(null);
   const [disabledDatesArr, setDisabledDates] = useState(null);
   const navigate = useNavigate();

   const handleDateChange = (date) => {
      console.log('Selected date:', date.toISOString().split('T')[0]);
      setSelectedDate(date.toISOString().split('T')[0]);
   };

   const handleClick = () =>
   {
      if(selectedDate == null)
      {
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
         discountedPrice: tourGuideInfo.perDayRate - (tourGuideInfo.perDayRate * (discount/100)),
      };
      dispatch(addItem(newItem));
      const totalPrice = tourGuideInfo["perDayRate"];
      const payLaod = {userId, id, selectedDate, totalPrice, type: "tourguide" };
      navigate("/checkout", { state: { payLaod } });
   }

   const fetchTourGuideBookings = async () => {
      try {
        const response = await fetch(`/tourguide/getAllBookings/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBookings(data);
        } else {
          console.log('Error:', response.status);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };
    
    useEffect(() => {
      if (bookings) {
        const disabledDates = bookings.map((booking) => new Date(booking.bookingDate));
        setDisabledDates(disabledDates);
        console.log(disabledDatesArr);
      }
    }, [bookings]);
    
    useEffect(() => {
      const fetchTourGuideInfo = async () => {
        try {
          const response = await fetch(`/tourguide/getTourGuideById/${id}`);
          if (response.ok) {
            const data = await response.json();
            setTourGuideInfo(data);
            console.log(data);
          } else {
            console.log('Error:', response.status);
          }
        } catch (error) {
          console.log('Error:', error);
        }
      };
    
      fetchTourGuideBookings();
      fetchTourGuideInfo();
    }, [id]);
    

   if (!tourGuideInfo) {
      return <div>Loading...</div>;
   }

   const attributes = {
      "Name": tourGuideInfo.Service.name,
      "Experience": tourGuideInfo.experience + " Years",
      "Gender": tourGuideInfo.gender,
      "Primary Guiding Area": tourGuideInfo.primaryAreas,
      "Other Areas": tourGuideInfo.otherAreas,
      "Languages": tourGuideInfo.language
   };

   return (
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
                  <p className={styles.description}>{tourGuideInfo.Service.description}</p>
               </div>
               <div>
                  <h2 className={styles.subHeading}>People's Opinion</h2>
                  <Testimonial />
                  <div className={styles.booking}>
                     <p>Select a date from the given claender to book me and click the button below.</p>
                     <Button btnType="submit"  value="Book Now" handleClick={handleClick}/>
                  </div>
               </div>
            </div>
            <div>
               <Rating />
               <div>
                  <h2 className={styles.subHeading}>Pricing</h2>
                  <div className={styles.pricing}>
                     <p className={styles.pricingKey}>Per Day</p>
                     <p className={styles.pricingValue}>{tourGuideInfo.perDayRate}</p>
                  </div>
               </div>
               <div>
                  <h2 className={styles.subHeading}>Booking Calendar</h2>
                  <div className={styles.calendar}>
                     <BookingCalendar disabledDates={disabledDatesArr} selectedDate={selectedDate} onDateChange={handleDateChange} />
                  </div>
               </div>
            </div>
         </div>

         <ReviewForm serviceId={tourGuideInfo.ServiceId} />
      </div>
   );
}
