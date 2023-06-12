import React, { useEffect, useState } from 'react';
import styles from './HotelBooking.module.css';
import { Button, Carousel } from '../../components';
import { Testimonial, BookingCalendar, Rating, FormField } from '../../components';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart, addItem } from '../../app/features/cart/cartSlice';
import { Form as FormFinal } from 'react-final-form'
import { required } from '../../utils/validations';

export default function HotelBooking({hotelName, hotelId, imgSrc, roomId, price }) {
   const discount = useSelector(state => state.pricing.discount);
   const { id } = useParams();
   const dispatch = useDispatch();
   const userId = useSelector((state) => state.user.id);
   const [selectedDate, setSelectedDate] = useState(null);
   const [bookings,setBookings] =useState(null);
   const [disabledDatesArr, setDisabledDates] = useState(null);
   const navigate = useNavigate();
   
  const currentUser = useSelector(state => state.user.id);

   const handleDateChange = (date) => {
      console.log('Selected date:', date.toISOString().split('T')[0]);
      setSelectedDate(date.toISOString().split('T')[0]);
   };

   const onSubmit = (values) =>
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
      const pricing = values.days * price;
      const newItem = {
        imageSrc: imgSrc,
        title: hotelName,
        count: 1,
        price: pricing,
        discountedPrice: pricing - (pricing * (discount/100))
      };
      console.log(newItem)
      dispatch(addItem(newItem));
        const hotel =  {
            startDate:selectedDate, 
            numberOfDays:values.days, 
            totalPrice:pricing, 
            userId:currentUser, 
            hotelId:hotelId, 
            roomId:roomId
        }
        navigate("/checkout", { state: { hotel } });
   }

   return (
      <div className={styles.container}>
        <h2 className={styles.subHeading}>Booking Calendar</h2>
        <div className={styles.calendar}>
            <BookingCalendar disabledDates={disabledDatesArr} selectedDate={selectedDate} onDateChange={handleDateChange} />
        </div>
        <div className={styles.booking}>
            <p>Select the checkin date from the given calender.</p>
            <div className={styles.formContainer}>
            <FormFinal
                onSubmit={onSubmit}
                subscription={{
                        submitted: true
                }} >
                {({ handleSubmit, submitting, values }) => (
                    <form onSubmit={handleSubmit}>   
                        <FormField name="days"
                        label="NumberofDays" type="number" placeholder="3" 
                        validate={required} theme="light" value={values} 
                        renderIcon={() => null} />
                        <Button value="Book Now" btnType="submit" />
                    </form>
                    )}
            </FormFinal>
            </div>
        </div>
      </div>
   );
}
