import React, { useState } from 'react';
import styles from './PaymentMethod.module.css';
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import FormField from '../FormField/FormField';
import { Form as FormFinal } from 'react-final-form'
import { validateExpirationYear, validateCreditCard, validateExpirationMonth } from '../../utils/validations'
import { useDispatch, useSelector } from 'react-redux'
import { updateCardInfo } from '../../app/features/checkout/checkoutSlice'
import Button from '../Button/Button';

export const PaymentMethod = () => {
   const cardInfo = useSelector((state) => state.checkout.cardInfo);
   const [method, setMethod] = useState('001');
   const dispatch = useDispatch();
   console.log(cardInfo);
   const onSubmit = (values, form) => {
      console.log('Form submitted with values:', values);
      values.cardType = method;
      dispatch(updateCardInfo(values));
      form.reset();
   };
   return (
      <div className={styles.container}>
         <p className={styles.heading}>Payment Method</p>
         <RadioGroup
            options={[
               { value: '001', icon: <img className={styles.image} alt="visa" src="../../static/images/visa.png" /> },
               { value: '002', icon: <img className={styles.image} alt="mastercard" src="../../static/images/mastercard.png" /> },
               { value: '003', icon: <img className={styles.image} alt="amex" src="../../static/images/amex.png" /> }
            ]}
            inline={true}
            value={method}
            onChange={(value) => { setMethod(value) }}
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
                        <FormField name="expirationMonth" label="Expiration Month" type="text" placeholder="MM" value={cardInfo.cardExpirationMonth}
                           //validate={validateExpirationMonth}
                           renderIcon={() => null} labelClass="showLabel" theme="light" />
                        <FormField name="expirationYear" label="Expiration Year" type="text" placeholder="YYYY" value={cardInfo.cardExpirationYear}
                           //  validate={validateExpirationYear}
                           renderIcon={() => null} labelClass="showLabel" theme="light" />
                     </div>
                     <FormField name="cardNumber" label="Card Number" type="text" placeholder="1234 5678 9012 3456" value={cardInfo.cardNumber} validate={validateCreditCard} renderIcon={() => null} labelClass="showLabel" theme="light" />
                     <Button btnType="submit" value="Add Payment Method" />
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
