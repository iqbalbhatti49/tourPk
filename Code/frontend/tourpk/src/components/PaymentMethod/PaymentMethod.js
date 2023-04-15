import React from 'react';
import styles from './PaymentMethod.module.css';
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import FormField from '../FormField/FormField';
import { Form as FormFinal } from 'react-final-form'
import { validateExpirationDate, validateCreditCard, validateSecurityCode } from '../../utils/validations'
import { useDispatch, useSelector } from 'react-redux'
import { OnChange } from 'react-final-form-listeners'
import {
   updateCardNumber,
   updateSecurityNumber,
   updateExpirationDate
} from '../../app/features/checkout/checkoutSlice'

export const PaymentMethod = () => {
   const cardInfo = useSelector((state) => state.checkout.cardInfo);
   const dispatch = useDispatch();
   const onSubmit = (values, form) => {
      console.log('Form submitted with values:', values);
      form.reset();
   };

   return (
      <div className={styles.container}>
         <p className={styles.heading}>Payment Method</p>
         <RadioGroup
            options={[
               { value: 'visa', icon: <img className={styles.image} alt="card" src="../../static/images/visa.png" /> },
               { value: 'mastercard', icon: <img className={styles.image} alt="card" src="../../static/images/mastercard.png" /> },
               { value: 'amex', icon: <img className={styles.image} alt="card" src="../../static/images/amex.png" /> }
            ]}
            inline={true}
         />
         <div className={styles.form}>
            <FormFinal
               onSubmit={onSubmit}
               subscription={{
                  submitted: true
               }} >
               {({ handleSubmit }) => (
                  <form className={styles.form} onSubmit={handleSubmit}>
                     <div className={styles.row}>
                        <FormField name="Card Number" label="Card Number" type="text" placeholder="1234 5678 9012 3456" value={cardInfo.cardNumber} validate={validateCreditCard} renderIcon={() => null} labelClass="showLabel" theme="light" />
                        <OnChange name="Card Number">
                           {(value) => {
                              dispatch(updateCardNumber(value));
                           }}
                        </OnChange>
                        <FormField name="Expiration Date" label="Expiration Date" type="text" placeholder="MM/YY" value={cardInfo.cardExpiration} validate={validateExpirationDate} renderIcon={() => null} labelClass="showLabel" theme="light" />
                        <OnChange name="Expiration Date">
                           {(value) => {
                              dispatch(updateExpirationDate(value));
                           }}
                        </OnChange>
                     </div>
                     <FormField name="Security Number" label="Security Number" type="text" placeholder="123" value={cardInfo.cardSecurityNumber} validate={validateSecurityCode} renderIcon={() => null} labelClass="showLabel" theme="light" />
                     <OnChange name="Security Number">
                        {(value) => {
                           dispatch(updateSecurityNumber(value));
                        }}
                     </OnChange>
                  </form>
               )}
            </FormFinal>
         </div>
         <div className={styles.securityMessage}>
            <img src="../../static/images/lock.png" />
            <span>Your payment information is secure.</span>
         </div>
      </div>
   );
};
