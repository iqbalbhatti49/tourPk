import React, { useState } from 'react';
import styles from './PaymentMethod.module.css';
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import FormField from '../FormField/FormField';
import { Form as FormFinal, FormSpy } from 'react-final-form'
import { validateExpirationYear, validateCreditCard, validateExpirationMonth } from '../../utils/validations'
import { useDispatch, useSelector } from 'react-redux'
import { updateCardInfo } from '../../app/features/checkout/checkoutSlice'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const PaymentMethod = () => {
   const cardInfo = useSelector((state) => state.checkout.cardInfo);
   const role = useSelector((state) => state.user.role);
   const [method, setMethod] = useState('001');
   const id = useSelector((state) => state.user.id)
   const paymentState = useSelector((state) => state.checkout.cardInfo)
   const [submitted, setSubmitted] = useState(false);
   const location = useLocation();
  
   useEffect(() => {
      // Check if the previous path was '/login'
      const { state } = location;
      if (state && state.from === '/login') {
         // Code to execute if coming from the login page
         console.log('Navigated from login page');
      }
      else
      console.log(state)
   }, [location]);
    
   const dispatch = useDispatch();
   console.log(cardInfo);
   const navigate = useNavigate();
   const onSubmit = (values, form) => {
      console.log('Form submitted with values:', values);
      if(!values.cardType)
      values.cardType = method;
      dispatch(updateCardInfo({id,values}));
      form.reset();
      setSubmitted(true);
      Object.keys(values).forEach(key => {
         if(key!= null && key != undefined && key != "cardType")
         {
            form.change(key, undefined);
            form.resetFieldState(key);
         }
     }); 
   };
   const showSuccessAlert = () => {
      swal({
         title: 'Payment Details',
         text: 'Your payment details have been saved! Now fill the remaining information to checkout.',
         icon: 'success',
         buttons: {
            confirm: true,
         },
     }).then((clickedBtn) => {
      const { state } = location;
      if (state && state.from === '/login') {
         if (clickedBtn) {
            if(role == "seller")
              navigate("/serviceProvider");
            else
              navigate("/pricing");
        }
      }
      
   });
   };
   return (
      <div className={styles.container}>
         <p className={styles.heading}>Payment Method</p>
         <fieldset disabled={submitted && "disabled"}>
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
         </fieldset>
         <div className={styles.form}>
            <FormFinal
               onSubmit={onSubmit}
               subscription={{
                  submitted: true
               }} >
               {({ handleSubmit }) => (
                  <form className={styles.form} onSubmit={handleSubmit}>
                     <fieldset disabled={submitted && "disabled"}>
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
                     </fieldset>
                     <FormSpy subscription={{ form: true }}>
                        {({ form }) => {
                           useEffect(() => {
                              form.initialize(paymentState);
                           }, [paymentState]);

                           return null;
                        }}
                     </FormSpy>
                  </form>
               )}
            </FormFinal>
         </div>
         {submitted && showSuccessAlert()}
         <div className={styles.securityMessage}>
            <img src="../../static/images/lock.png" />
            <span>Your payment information is secure.</span>
         </div>
      </div>
   );
};
