import React from 'react';
import styles from './BillingSummary.module.css';
import FormField from '../FormField/FormField';
import { Form as FormFinal } from 'react-final-form'
import Button from '../Button/Button';

export const BillingSummary = (props) => {
   const required = value => (value ? undefined : 'Required');
   const onSubmit = (values, form) => {
      console.log('Form submitted with values:', values);
      form.reset();
   };
   const billingSummary = [
      {
         label: 'Subtotal',
         value: '$ 1,000.00'
      },
      {
         label: 'Discount',
         value: '$ 0.00'
      },
      {
         label: 'Tax',
         value: '$ 1,000.00'
      },
      {
         label: 'Shipping',
         value: '$ 0.00'
      },
      {
         label: 'Warranty (Platinum)',
         value: '$ 259.00'
      }
   ];
   return (
      <div className={styles.container} >
         <p className={styles.heading}>Billing Summary</p>
         <div className={styles.summary}>
            {billingSummary.map(item => (
               <div className={styles.summaryItem}>
                  <p>{item.label}</p>
                  <p>{item.value}</p>
               </div>
            ))}
            <hr className={styles.hr}></hr>
            <div className={styles.summaryItem}>
               <p className={styles.total}>Grand Total</p>
               <p className={styles.total}>$ 1,259.00</p>
            </div>
            <div className={styles.form}>
               <FormFinal
                  onSubmit={onSubmit}
                  subscription={{
                     submitted: true
                  }} >
                  {({ handleSubmit, submitting, values }) => (
                     <form className={styles.form} onSubmit={handleSubmit}>
                        <FormField name="copuncode" label="Order Comment" type="text" placeholder="Type Here...." validate={required} renderIcon={() => null} labelClass="showLabel" theme="light" />
                        <FormField name="terms" label="I agree to the Terms & Conditions." type="checkbox" renderIcon={() => null} labelClass="showLabel" theme="light" />
                     </form>
                  )}
               </FormFinal>

               <Button value="Pay $1259.00" type="primary" width={400} />
            </div>
         </div>
      </div>
   );
};
