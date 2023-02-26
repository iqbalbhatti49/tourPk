import React from 'react';
import styles from './BillingAddress.module.css';
import FormField from '../FormField/FormField';
import { Form as FormFinal } from 'react-final-form'
import IconEmail from '../../components/IconEmail/IconEmail';
import PhoneNumber from '../PhoneNumber/PhoneNumber';
export const BillingAddress = (props) => {
   const required = value => (value ? undefined : 'Required');
   const showResults = values => {
      window.alert("submitted");
   }

   return (
      <div className={styles.container} >
         <p className={styles.heading}>Billing Address</p>
         <div className={styles.form}>
            <FormFinal
               onSubmit={showResults}
               subscription={{
                  submitted: true
               }} >
               {({ handleSubmit, submitting, values }) => (
                  <form className={styles.form} onSubmit={handleSubmit}>
                     <div className={styles.row}>
                        <FormField name="First Name" label="First Name" type="text" placeholder="Jhon" validate={required} value={values}  theme="light" renderIcon={() => null} labelClass="showLabel" />
                        <FormField name="Last Name" label="Last Name" type="text" placeholder="Doe" validate={required} value={values}  theme="light" renderIcon={() => null} labelClass="showLabel" />
                     </div>
                     <FormField name="Email" label="Email" type="email" placeholder="abc@email.com" validate={required} value={values}  theme="light" renderIcon={() => null} labelClass="showLabel" />
                     <FormField name="Street Address 1" label="Street Address 1" type="text" placeholder="House # 3, Street # 27" validate={required} value={values}  theme="light" renderIcon={() => null} labelClass="showLabel" />
                     <FormField name="Street Address 2" label="Street Address 2" type="text" placssseholder="House # 3, Street # 27" validate={required} value={values}  theme="light" renderIcon={() => null} labelClass="showLabel" />
                     <div className={styles.row}>
                        <FormField name="Province" label="Province" type="text" placeholder="Punjab" validate={required} value={values}  theme="light" renderIcon={() => null} labelClass="showLabel" />
                        <FormField name="City" label="City" type="text" placeholder="Lahore" validate={required} value={values}  theme="light" renderIcon={() => null} labelClass="showLabel" />
                     </div>
                     <div className={styles.row}>
                        <FormField name="Zip Code" label="Zip Code" type="number" placeholder="2234" validate={required} value={values}  theme="light" renderIcon={() => null} labelClass="showLabel" />
                        <PhoneNumber />
                     </div>
                     {/* <FormField name="Same Address" label="My billing and shipping address are the same." type="radio" placeholder="Same Address" validate={required} value={values} renderIcon={() => null} labelClass="showLabel" />
                     <FormField name="Account" label="Create an account for later use." type="radio" placeholder="Account" validate={required} value={values} renderIcon={() => null} labelClass="showLabel" /> */}
                  </form>
               )}
            </FormFinal>
         </div>
      </div>
   );
};
