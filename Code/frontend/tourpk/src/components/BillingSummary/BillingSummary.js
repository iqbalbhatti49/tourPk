import React from 'react';
import styles from './BillingSummary.module.css';
import FormField from '../FormField/FormField';
import { Form as FormFinal } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { intiatePayment } from '../../app/features/checkout/checkoutSlice'
import Button from '../Button/Button';

export const BillingSummary = () => {
   const dispatch = useDispatch();
   const required = value => (value ? undefined : 'Required');
   const onSubmit = (values, form) => {
      console.log('Form submitted with values:', values);
      dispatch(intiatePayment(values))
      form.reset();
   };

   const items = useSelector((state) => state.cart.items);
   let total = items.reduce((acc, item) => {
      const itemPrice = parseFloat(item.price.replace('$', ''));
      return acc + itemPrice * item.count;
   }, 0);
   let totalDiscountedPrice = items.reduce((acc, item) => {
      const DiscountedPrice = parseFloat(item.discountedPrice.replace('$', ''));
      return acc + DiscountedPrice * item.count;
   }, 0);
   total = total.toFixed(0)
   totalDiscountedPrice = totalDiscountedPrice.toFixed(0)
   const tax = 1000;
   const warranty = 259;
   let totalWithTax = parseInt(totalDiscountedPrice) + parseInt(tax) + parseInt(warranty);
   totalWithTax = '$' + totalWithTax;

   const billingSummary = [
      {
         label: 'total',
         value: '$ ' + total
      },
      {
         label: 'Discount',
         value: '$ ' + (total - totalDiscountedPrice)
      },
      {
         label: 'DiscountedTotal',
         value: '$ ' + totalDiscountedPrice
      },
      {
         label: 'Tax',
         value: '$ ' + tax
      },
      {
         label: 'Warranty (Platinum)',
         value: '$ ' + warranty
      }
   ];

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
               <p className={styles.total}>{totalWithTax}</p>
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
                        <FormField name="terms" label="I agree to the Terms & Conditions." type="checkbox" renderIcon={() => null} labelClass="showLabel" theme="light" />
                        <Button value={"Pay " + totalWithTax} type="primary" width={400} btnType="submit" />
                     </form>
                  )}
               </FormFinal>
            </div>
         </div>
      </div>
   );
};
