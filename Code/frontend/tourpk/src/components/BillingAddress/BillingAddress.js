import React from 'react';
import styles from './BillingAddress.module.css';
import FormField from '../FormField/FormField';
import { Form as FormFinal } from 'react-final-form'
import PhoneNumber from '../PhoneNumber/PhoneNumber';
export const BillingAddress = (props) => {
   const required = value => (value ? undefined : 'Required');
   const onSubmit = (values, form) => {
      console.log('Form submitted with values:', values);
      form.reset(); // Reset the form's state after submission
      // TODO: manage redux -> dispatch redux...
   };

   return (
      <div className={styles.container} >
         <p className={styles.heading}>Billing Address</p>
         <div className={styles.form}>
            <FormFinal
               onSubmit={onSubmit}
               subscription={{
                  submitted: true
               }} >
               {({ handleSubmit, submitting, values }) => (
                  <form className={styles.form} onSubmit={handleSubmit}>
                     <div className={styles.row}>
                        <FormField name="First Name" label="First Name" type="text" placeholder="Jhon" validate={required} renderIcon={() => null} labelClass="showLabel" theme="light" />
                        <FormField name="Last Name" label="Last Name" type="text" placeholder="Doe" validate={required} renderIcon={() => null} labelClass="showLabel" theme="light" />
                     </div>
                     <FormField name="Email" label="Email" type="email" placeholder="abc@email.com" validate={required} renderIcon={() => null} labelClass="showLabel" theme="light" />
                     <FormField name="Street Address 1" label="Street Address 1" type="text" placeholder="House # 3, Street # 27" validate={required} renderIcon={() => null} labelClass="showLabel" theme="light" />
                     <FormField name="Street Address 2" label="Street Address 2" type="text" placssseholder="House # 3, Street # 27" validate={required} renderIcon={() => null} labelClass="showLabel" theme="light" />
                     <FormField name="Province" label="Province" type="text" placeholder="Punjab" validate={required} renderIcon={() => null} labelClass="showLabel" theme="light" />
                     <FormField name="City" label="City" type="text" placeholder="Lahore" validate={required} renderIcon={() => null} labelClass="showLabel" theme="light" />
                     <FormField name="Zip Code" label="Zip Code" type="number" placeholder="2234" validate={required} renderIcon={() => null} labelClass="showLabel" theme="light" />
                     <PhoneNumber />
                     {/* <FormField name="Same Address" label="My billing and shipping address are the same." type="checkbox" placeholder="Same Address" validate={required} value={values} renderIcon={() => null} labelClass="showLabel" />
                     <FormField name="Account" label="Create an account for later use." type="checkbox" placeholder="Account" validate={required} value={values} renderIcon={() => null} labelClass="showLabel" /> */}
                  </form>
               )}
            </FormFinal>
         </div>
      </div>
   );
}
