import React from 'react';
import styles from './DiscountCodes.module.css';
import FormField from '../FormField/FormField';
import { Form as FormFinal } from 'react-final-form'

export const DiscountCodes = (props) => {
   const required = value => (value ? undefined : 'Required');
   const onSubmit = (values, form) => {
      console.log('Form submitted with values:', values);
      form.reset(); // Reset the form's state after submission
      // TODO: manage redux -> dispatch redux...
   };

   return (
      <div className={styles.container} >
         <p className={styles.heading}>Discount Codes</p>
         <div className={styles.form}>
            <FormFinal
               onSubmit={onSubmit}
               subscription={{
                  submitted: true
               }} >
               {({ handleSubmit, submitting, values }) => (
                  <form className={styles.form} onSubmit={handleSubmit}>
                     <FormField name="copuncode" label="Enter Your Coupn Code" type="text" placeholder="XRTMSA70" validate={required} renderIcon={() => null} labelClass="showLabel" theme="light" />
                  </form>
               )}
            </FormFinal>
         </div>
      </div>
   );
};
