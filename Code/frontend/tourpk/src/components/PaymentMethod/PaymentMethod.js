import React, { useState } from 'react';
import styles from './PaymentMethod.module.css';
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import { IconShipping, IconShipping1 } from '../IconShipping/IconShipping';
import FormField from '../FormField/FormField';
import { Form as FormFinal } from 'react-final-form'

export const PaymentMethod = () => {
   const [cardType, setCardType] = useState('visa');
   const [cardNumber, setCardNumber] = useState('');
   const [cardSecurityNumber, setCardSecurityNumber] = useState('');
   const [cardExpiration, setCardExpiration] = useState('');

   const handleCardTypeChange = (event) => {
      setCardType(event.target.value);
   };

   const handleCardNumberChange = (event) => {
      setCardNumber(event.target.value);
   };

   const handleCardSecurityNumberChange = (event) => {
      setCardSecurityNumber(event.target.value);
   };

   const handleCardExpirationChange = (event) => {
      setCardExpiration(event.target.value);
   };

   const required = value => (value ? undefined : 'Required');
   const onSubmit = (values, form) => {
      console.log('Form submitted with values:', values);
      form.reset(); // Reset the form's state after submission
      // TODO: manage redux -> dispatch redux...
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
            onChange={handleCardTypeChange}
            inline={true}
         />
         <div className={styles.form}>
            <FormFinal
               onSubmit={onSubmit}
               subscription={{
                  submitted: true
               }} >
               {({ handleSubmit, submitting, values }) => (
                  <form className={styles.form} onSubmit={handleSubmit}>
                     <div className={styles.row}>
                        <FormField name="Card Number" label="Card Number" type="text" placeholder="1234 5678 9012 3456" value={cardNumber} validate={required} renderIcon={() => null} labelClass="showLabel" theme="light" />
                        <FormField name="Expiration Date" label="Expiration Date" type="text" placeholder="MM/YY" value={cardExpiration} validate={required} renderIcon={() => null} labelClass="showLabel" theme="light" />
                     </div>
                     <FormField name="Security Number" label="Security Number" type="text" placeholder="123" value={cardSecurityNumber} validate={required} renderIcon={() => null} labelClass="showLabel" theme="light" />
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
