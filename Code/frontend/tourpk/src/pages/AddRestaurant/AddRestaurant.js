import React, { useState } from "react";
import { Form as FormFinal } from 'react-final-form'
import styles from './AddRestaurant.module.css'
import { FormField, Button } from "../../components/index";
import { required, validatePhone, validateEmail, validateAlpha, validateURL } from '../../utils/validations';

const AddRestaurant = () => {
    const [formData, setFormData] = useState({});
    // const onSubmit = (values, form) => {
    //     console.log('Form submitted with values:', values);
    //     setFormData(values); // Store the form data in state
    //     form.reset(); // Reset the form's state after submission
    // };

    const onSubmit = (values) => {
        console.log(values);

        // Concatenate the meal options into a single string
        let mealOptions = '';
        // if (values.dinner) mealOptions += 'Dinner, ';
        // if (values.brunch) mealOptions += 'Brunch, ';
        // if (values.lunch) mealOptions += 'Lunch, ';
        if (values.breakfast) mealOptions += 'Breakfast, ';
        if (values.hiTea) mealOptions += 'Hi-Tea, ';
        // if (values.other) mealOptions += `${values.other}, `;

        // Remove trailing comma and whitespace
        mealOptions = mealOptions.replace(/,\s*$/, '');

        // Store the concatenated meal options in the database
        // Your code to save the mealOptions string to the database goes here
        console.log(mealOptions);
    };

    return (
        <div id={styles.restaurantContainer}>
            <div className={styles.formContainer}>
                <FormFinal
                    onSubmit={onSubmit}
                    subscription={{
                        submitted: true
                    }} >
                    {({ handleSubmit, submitting, values }) => (
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formBody}>
                                <h1>Add Your Restaurant Details</h1>
                                <h3 className={styles.title}>Basic Information</h3>
                                <div className={styles.basicInfo}>
                                    <FormField name="startTime" label="Opening Time" type="text" placeholder="Opening Time (eg. 9:00 am)" theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="endTime" label="Closing Time" type="text" placeholder="Closing Time (eg. 12:00 pm)" theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="menu" label="Menu URL (if any)" type="text" placeholder="URL of your menu (eg. https:/resturant/menu.png)" validate={validateAlpha} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="minPrice" label="Starting price" type="text" placeholder=" Starting price in your menu (eg. Rs 500)" validate={validateAlpha} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="cuisine" label="Cuisines" type="text" placeholder="Cuisines you offer (eg. French, Italian, Japanese)" validate={validateAlpha} theme="light" value={values} renderIcon={() => null} />
                                </div>
                                <div >
                                    <h3 className={styles.title}>Meals You Offer</h3>
                                    <div className={styles.meals}>
                                        <FormField name="breakfast" label="Breakfast" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                        <FormField name="brunch" label="Brunch" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                        <FormField name="lunch" label="Lunch" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                        <FormField name="snacks" label="Snacks" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                        <FormField name="hiTea" label="Hi-Tea" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                        <FormField name="dinner" label="Dinner" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                        <FormField name="buffet" label="Buffet" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                        <FormField name="Other" label="Other" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                    </div>
                                </div>
                                <div >
                                    <h3 className={styles.title}>What features does this restaurant have ?</h3>
                                    <div className={styles.features}>
                                        <div className={styles.subfeatures}>
                                            <h4 className={styles.subheading}>Payment</h4>
                                            <FormField name="acceptsCreditCards" label="Credit Cards" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            <FormField name="acceptsVisa" label="Visa" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            <FormField name="acceptsMastercard" label="Mastercard" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            <FormField name="cashOnly" label="Cash Only" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            <FormField name="digitalPayments" label="Digital Payments" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                        </div>
                                        <div className={styles.subfeatures}>
                                            <h4 className={styles.subheading}>Parking</h4>
                                            <FormField name="streetParking" label="Street Parking" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            <FormField name="parkingAvailable" label="Parking Available" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            <FormField name="valetparking" label="Valet Parking" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                        </div>
                                        <div className={styles.subfeatures}>
                                            <h4 className={styles.subheading}>Atmosphere</h4>
                                            <FormField name="cafe" label="Cafe" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            <FormField name="beach" label="Beach" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            <FormField name="liveMusic" label="Live Music" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            <FormField name="playgrounds" label="Playgrounds" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            <FormField name="television" label="Television" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            <FormField name="outdoorSeating" label="Outdoor Seating" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            <FormField name="rooftop" label="Rooftop" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                        </div>
                                        <div className={styles.subfeatures}>
                                            <h4 className={styles.subheading}>Additional</h4>
                                            <FormField name="delivery" label="Delivery" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            <FormField name="driveThru" label="Drive Thru" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            <FormField name="familyStyle" label="Family Style" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            <FormField name="freeWifi" label="Free Wifi" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            <FormField name="reservations" label="Reservations" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            <FormField name="takeAway" label="Take Away" type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button value="Add Restaurant" type="submit" btnType="submit" />
                        </form>
                    )}
                </FormFinal>
            </div>
            <div className={styles.imageContainer}>
                <img src="https://images.pexels.com/photos/3534744/pexels-photo-3534744.jpeg" alt="" />
            </div>
        </div >
    );
};
export default AddRestaurant;
