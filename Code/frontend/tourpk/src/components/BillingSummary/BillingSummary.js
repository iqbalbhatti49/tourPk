import React from 'react';
import styles from './BillingSummary.module.css';
import FormField from '../FormField/FormField';
import { Form as FormFinal } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { initiatePayment } from '../../app/features/checkout/checkoutSlice'
import Button from '../Button/Button';

export const BillingSummary = () => {
   const dispatch = useDispatch();
   const required = value => (value ? undefined : 'Required');
   const cardInfo = useSelector((state) => state.checkout.cardInfo);
   const billingAddress = useSelector((state) => state.checkout.billingAddress);
   const items = useSelector((state) => state.cart.items);
   let total = items.reduce((acc, item) => {
      const priceWithCurrency = item.price;
      if (typeof priceWithCurrency === 'string' && priceWithCurrency.includes('$')) {
         const itemPrice = parseFloat(priceWithCurrency.replace('$', ''));
         return acc + itemPrice * item.count;
      } else {
         return acc;
      }
   }, 0);
   
   let totalDiscountedPrice = items.reduce((acc, item) => {
      const priceWithCurrency = item.discountedPrice;
      if (typeof priceWithCurrency === 'string' && priceWithCurrency.includes('$')) {
        const discountedPrice = parseFloat(priceWithCurrency.replace('$', ''));
        if (!isNaN(discountedPrice)) {
          return acc + discountedPrice * item.count;
        }
      }
      return acc;
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

   const onSubmit = (values, form) => {
      console.log('Form submitted with values:', values);
      values.grandTotal = totalWithTax;
      values.cardInfo = cardInfo;
      values.billingAddress = billingAddress;
      dispatch(initiatePayment(values))
      form.reset();
   };

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
                        <Button value={"Pay " + totalWithTax} type="primary" width={480} btnType="submit" />
                     </form>
                  )}
               </FormFinal>
            </div>
         </div>
      </div>
   );
};
