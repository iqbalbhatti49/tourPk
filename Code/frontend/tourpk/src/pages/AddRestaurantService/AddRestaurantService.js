import React from "react";
import { Form as FormFinal } from 'react-final-form'
import styles from './AddRestaurantService.module.css'
import { FormField, PhoneNumber, Button, UploadMediaButton } from "../../components/index";

const AddRestaurant = () => {
    const onSubmit = (values, form) => {
        console.log('Form submitted with values:', values);
        form.reset(); // Reset the form's state after submission
        // TODO: manage redux -> dispatch redux --> "value"
    };
};

return (
    <>
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
                            <FormField name="RestaurantName" label="Name" type="text" placeholder="Restaurant Name" validate={required} theme="light" value={values} renderIcon={() => null} />
                            <FormField name="Description" label="Description" type="text" placeholder="Description about Restaurant" validate={required} theme="light" value={values} renderIcon={() => null} />
                            <h3>Contact Information</h3>
                            <FormField name="Email" label="Email" type="email" placeholder="abc@email.com" validate={required} theme="light" value={values} renderIcon={() => null} />
                            <FormField name="WebsiteURL" label="Website URL" type="text" placeholder="Enter website URL" validate={required} theme="light" value={values} renderIcon={() => null} />
                            <PhoneNumber />
                            <h3>Address</h3>
                            <FormField name="City" label="City" type="text" placeholder="Enter city name" validate={required} theme="light" value={values} renderIcon={() => null} />
                            <FormField name="Province" label="State/Province" type="text" placeholder="Enter province name" validate={required} theme="light" value={values} renderIcon={() => null} />
                            <FormField name="Country" label="Country" type="text" placeholder="Enter country name" validate={required} theme="light" value={values} renderIcon={() => null} />
                            <FormField name="Street" label="Street Address" type="text" placeholder="Enter street address" validate={required} theme="light" value={values} renderIcon={() => null} />
                            <FormField name="PostalCode" label="Postal Code" type="text" placeholder="Enter postal code" validate={required} theme="light" value={values} renderIcon={() => null} />
                            <UploadMediaButton />
                            <Button value="Add Restaurant" />
                        </form>
                    )}
                </FormFinal>
            </div>
        </div>
    </>
);
export default AddRestaurant;
