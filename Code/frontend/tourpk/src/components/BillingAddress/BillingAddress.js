import React from 'react';
import styles from './BillingAddress.module.css';
import FormField from '../FormField/FormField';
import { Form as FormFinal } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { updateBillingAddress } from '../../app/features/checkout/checkoutSlice';
import { required, validatePhone } from '../../utils/validations';
import Button from '../Button/Button';
import Swal from 'sweetalert';
import { useState } from 'react';

export const BillingAddress = () => {
   const dispatch = useDispatch();
   const [submitted, setSubmitted] = useState(false);

   const onSubmit = (values, form) => {
      console.log('Form submitted with values:', values);
      dispatch(updateBillingAddress(values));
      form.reset();
      setSubmitted(true);
      Object.keys(values).forEach((key) => {
         form.change(key, undefined);
         form.resetFieldState(key);
      });
   };

   const showSuccessAlert = () => {
      swal({
         title: 'Address Submitted',
         text: 'Your address have been saved! Now fill the remaining information to checkout.',
         icon: 'success',
         buttons: {
            confirm: true,
         },
     })
   };

   return (
      <div className={styles.container}>
         <p className={styles.heading}>Billing Address</p>
         <div className={styles.form}>
            <FormFinal
               onSubmit={onSubmit}
               subscription={{
                  submitted: true,
               }}
            >
               {({ handleSubmit }) => (
                  <form className={styles.form} onSubmit={handleSubmit}>
                     <fieldset disabled={submitted && "disabled"}>
                     <div className={styles.row}>
                        <FormField
                           name="firstName"
                           label="First Name"
                           type="text"
                           placeholder="Jhon"
                           validate={required}
                           renderIcon={() => null}
                           labelClass="showLabel"
                           theme="light"
                        />
                        <FormField
                           name="lastName"
                           label="Last Name"
                           type="text"
                           placeholder="Doe"
                           validate={required}
                           renderIcon={() => null}
                           labelClass="showLabel"
                           theme="light"
                        />
                     </div>
                     <FormField
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="abc@email.com"
                        validate={required}
                        renderIcon={() => null}
                        labelClass="showLabel"
                        theme="light"
                     />
                     <FormField
                        name="streetAddress1"
                        label="Street Address 1"
                        type="text"
                        placeholder="House # 3, Street # 27"
                        validate={required}
                        renderIcon={() => null}
                        labelClass="showLabel"
                        theme="light"
                     />
                     <FormField
                        name="city"
                        label="City"
                        type="text"
                        placeholder="Lahore"
                        validate={required}
                        renderIcon={() => null}
                        labelClass="showLabel"
                        theme="light"
                     />
                     <FormField
                        name="zipCode"
                        label="Zip Code"
                        type="number"
                        placeholder="2234"
                        validate={required}
                        renderIcon={() => null}
                        labelClass="showLabel"
                        theme="light"
                     />
                     <FormField
                        name="phoneNumber"
                        label="Phone Number"
                        type="text"
                        placeholder="+923xxxxxxxxx"
                        validate={validatePhone}
                        renderIcon={() => null}
                        labelClass="showLabel"
                        theme="light"
                     />
                     <Button btnType="submit" disabled = {submitted} value="Add Address" />
                     </fieldset>
                  </form>
               )}
            </FormFinal>
            {submitted && showSuccessAlert()}
         </div>
      </div>
   );
};

