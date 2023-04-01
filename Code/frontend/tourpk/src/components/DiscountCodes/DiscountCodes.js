import React from 'react';
import styles from './DiscountCodes.module.css';
import FormField from '../FormField/FormField';
import { Form as FormFinal } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { OnChange } from 'react-final-form-listeners'
import {
   updateDiscountCode
} from '../../app/features/checkout/checkoutSlice'

export const DiscountCodes = () => {
   const discountCode = useSelector((state) => state.checkout.discountCode);
   const dispatch = useDispatch();
   const onSubmit = (values, form) => {
      console.log('Form submitted with values:', values);
      form.reset();
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
               {({ handleSubmit }) => (
                  <form className={styles.form} onSubmit={handleSubmit}>
                     <FormField name="copuncode" label="Enter Your Coupn Code" type="text" placeholder="XRTMSA70" value={discountCode} renderIcon={() => null} labelClass="showLabel" theme="light" />
                     <OnChange name="copuncode">
                        {(value) => {
                           dispatch(updateDiscountCode(value));
                        }}
                     </OnChange>
                  </form>
               )}
            </FormFinal>
         </div>
      </div>
   );
};
