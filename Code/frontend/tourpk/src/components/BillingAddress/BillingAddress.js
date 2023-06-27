import React from 'react';
import styles from './BillingAddress.module.css';
import FormField from '../FormField/FormField';
import { Form as FinalForm, FormSpy } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { updateBillingAddress } from '../../app/features/checkout/checkoutSlice';
import { required, validatePhone } from '../../utils/validations';
import Button from '../Button/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const BillingAddress = () => {
   const dispatch = useDispatch();
   const [submitted, setSubmitted] = useState(false);
   const id = useSelector((state) => state.user.id);
   const BillingAddressState = useSelector((state) => state.checkout.billingAddress);

   const onSubmit = (values, form) => {
      dispatch(updateBillingAddress({ id, values }));
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
         text: 'Your address has been saved! Now fill the remaining information to checkout.',
         icon: 'success',
         buttons: {
            confirm: true,
         },
      });
   };

   return (
      <div className={styles.container}>
         <h2 className={styles.subHeading}>Billing Address</h2>
         <div className={styles.form}>
            <FinalForm
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
                        <Button btnType="submit" disabled={submitted} value="Add Address" />
                     </fieldset>
                     <FormSpy subscription={{ form: true }}>
                        {({ form }) => {
                           useEffect(() => {
                              const valuesToInitialize = {};
                              for (const key in BillingAddressState) {
                                 if (BillingAddressState.hasOwnProperty(key)) {
                                    const value = BillingAddressState[key];
                                    if (value !== null) {
                                       valuesToInitialize[key] = value;
                                    }
                                 }
                              }

                              form.initialize(valuesToInitialize);
                           }, [BillingAddressState]);

                           return null;
                        }}
                     </FormSpy>
                  </form>
               )}
            </FinalForm>
            {submitted && showSuccessAlert()}
         </div>
      </div>
   );
};
