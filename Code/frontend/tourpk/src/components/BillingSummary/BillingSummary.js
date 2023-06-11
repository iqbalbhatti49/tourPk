import React from 'react';
import styles from './BillingSummary.module.css';
import FormField from '../FormField/FormField';
import { Form as FormFinal } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { initiatePayment } from '../../app/features/checkout/checkoutSlice'
import Button from '../Button/Button';
import {clearCart }from "../../app/features/cart/cartSlice"
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { addTourGuideBooking } from '../../app/features/bookings/bookingsSlice';


export const BillingSummary = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const location = useLocation();
   const tourguide = location.state && location.state.payLaod;
   console.log(tourguide);
   const required = value => (value ? undefined : 'Required');
   const discount = useSelector((state) => state.pricing.discount);
   const cardInfo = useSelector((state) => state.checkout.cardInfo);
   const billingAddress = useSelector((state) => state.checkout.billingAddress);
   const paymentResult = useSelector((state) => state.checkout.paymentResult);
   const items = useSelector((state) => state.cart.items);

   let total = items.reduce((acc, item) => {
      return acc + item.price * item.count;
   }, 0);
   
   let totalDiscountedPrice = items.reduce((acc, item) => {
      if (item.discountApplicable) {
         return acc + item.discountedPrice * item.count;
      } else {
         return acc + item.price * item.count;
      }
   }, 0);
   
    
   total = total.toFixed(0)
   totalDiscountedPrice = totalDiscountedPrice.toFixed(0)
   let overallTotal = parseInt(totalDiscountedPrice);
   overallTotal = '$' + overallTotal;

   const billingSummary = [
      {
         label: 'Total',
         value: total 
      },
      {
         label: 'Discount Percentage',
         value: discount + "%" 
      },
      {
         label: 'Discount Granted',
         value: total - totalDiscountedPrice
      },
      {
         label: 'Discounted Total',
         value: totalDiscountedPrice 
      },
   ];

   console.log(total)
   const onSubmit = (values, form) => {
      console.log('Form submitted with values:', values);
      values.grandTotal = overallTotal;
      values.cardInfo = cardInfo;
      values.billingAddress = billingAddress;
      dispatch(initiatePayment(values))
      form.reset();
      form.change("OrderComment", undefined);
      form.resetFieldState("OrderComment");
      swal({
         title: 'Result',
         text: paymentResult,
         icon: 'success',
         buttons: {
           confirm: true,
         },
       })
       .then((confirmed) => {
         if (confirmed) {
            if(tourguide)
            {
               dispatch(addTourGuideBooking(tourguide));
            }
           dispatch(clearCart());
           navigate("/");
         }
       });
       
   }

   return (
      <div className={styles.container} >
         <p className={styles.heading}>Billing Summary</p>
         <div className={styles.summary}>
            {billingSummary.map((item, index) => (
               <div key={index} className={styles.summaryItem}>
                  <p>{item.label}</p>
                  <p>{item.value}</p>
               </div>
            ))}
            <hr className={styles.hr}></hr>
            <div className={styles.summaryItem}>
               <p className={styles.total}>Grand Total</p>
               <p className={styles.total}>{overallTotal}</p>
            </div>
            <div className={styles.form}>
               <FormFinal
                  onSubmit={onSubmit}
                  subscription={{
                     submitted: true
                  }} >
                  {({ handleSubmit }) => (
                     <form className={styles.form} onSubmit={handleSubmit}>
                        <FormField name="OrderComment" label="Order Comment" type="text" placeholder="Type Here...." validate={required} renderIcon={() => null} labelClass="showLabel" theme="light" />
                        <Button value={"Pay " + overallTotal} type="primary" width={480} btnType="submit" />
                     </form>
                  )}
               </FormFinal>
            </div>
         </div>
      </div>
   );
};
