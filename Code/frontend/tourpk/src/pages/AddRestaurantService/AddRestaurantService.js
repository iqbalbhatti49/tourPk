import React, { useState } from "react";
import { Form as FormFinal } from 'react-final-form'
import styles from './AddRestaurantService.module.css'
import { FormField, UploadMediaButton, Button } from "../../components/index";
import { required, validatePhone, validateEmail, validateAlpha, validateURL } from '../../utils/validations';
import axios from 'axios';
const AddRestaurant = () => {
    const [formData, setFormData] = useState({});
    const onSubmit = (values, form) => {
        console.log('Form submitted with values:', values);
        setFormData(values); // Store the form data in state
        form.reset(); // Reset the form's state after submission
    };
    return (
        <div id={styles.restaurantContainer}>
            <div >
                <FormFinal
                    onSubmit={onSubmit}
                    subscription={{
                        submitted: true
                    }} >
                    {({ handleSubmit, submitting, values }) => (
                        <form onSubmit={handleSubmit}>
                            <h1>Add a Restaurant</h1>
                            <h3>Name and Description</h3>
                            <FormField name="RestaurantName" label="Name" type="text" placeholder="Restaurant Name" validate={validateAlpha} theme="light" value={values} renderIcon={() => null} />
                            <FormField name="Description" label="Description" type="text" placeholder="Description about Restaurant" validate={validateAlpha} theme="light" value={values} renderIcon={() => null} />
                            <h3>Contact Information</h3>
                            <FormField name="Email" label="Email" type="email" placeholder="abc@email.com" validate={validateEmail} theme="light" value={values} renderIcon={() => null} />
                            <FormField name="WebsiteURL" label="Website URL" type="text" placeholder="Enter website URL" validate={validateURL} theme="light" value={values} renderIcon={() => null} />
                            <FormField name="PhoneNumber" label="Phone no." type="text" placeholder="Your Phone Number" validate={validatePhone} theme="light" renderIcon={() => null} />
                            <h3>Address</h3>
                            <FormField name="City" label="City" type="text" placeholder="Enter city name" validate={validateAlpha} theme="light" value={values} renderIcon={() => null} />
                            <FormField name="Province" label="State/Province" type="text" placeholder="Enter province name" validate={validateAlpha} theme="light" value={values} renderIcon={() => null} />
                            <FormField name="Country" label="Country" type="text" placeholder="Enter country name" validate={validateAlpha} theme="light" value={values} renderIcon={() => null} />
                            <FormField name="Street" label="Street Address" type="text" placeholder="Enter street address" validate={required} theme="light" value={values} renderIcon={() => null} />
                            <UploadMediaButton />
                            <Button value="Add Restaurant" type="submit" btnType="submit" />
                        </form>
                    )}
                </FormFinal>
            </div>
        </div>
    );
};
export default AddRestaurant;