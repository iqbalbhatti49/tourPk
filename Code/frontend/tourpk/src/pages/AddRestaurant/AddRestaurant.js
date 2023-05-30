import React from "react";
import { Form as FormFinal } from 'react-final-form'
import styles from './AddRestaurant.module.css'
import { FormField, Button } from "../../components/index";
import { required, validateURL } from '../../utils/validations';
import { mealOptions, featureOptions } from '../../utils/Constants/RestaurantsOptions';

const AddRestaurant = () => {

    const onSubmit = (values) => {
        console.log(values);

        const meals = mealOptions
            .filter(option => values[option.name])
            .map(option => option.label)
            .join(", ");

        // Store selected features as a comma-separated string
        const features = featureOptions
            .flatMap(option => option.options)
            .filter(option => values[option])
            .join(", ");

        console.log("Selected Meals:", meals);
        console.log("Selected Features:", features);

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
                                    <FormField name="startTime" label="Opening Time" type="text" placeholder="eg. 9:00 am" validate={required} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="endTime" label="Closing Time" type="text" placeholder="eg. 12:00 pm" validate={required} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="menu" label="Menu URL (if any)" type="text" placeholder="https:/resturant.com/menu.png" validate={validateURL} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="minPrice" label="Starting price" type="text" placeholder=" Starting price in your menu (eg. Rs 500)" validate={required} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="cuisine" label="Cuisines" type="text" placeholder="Cuisines you offer (eg. French, Italian, Japanese)" validate={required} theme="light" value={values} renderIcon={() => null} />
                                </div>
                                <div >
                                    <h3 className={styles.title}>Meals You Offer</h3>
                                    <div className={styles.meals}>
                                        {
                                            mealOptions.map(option => (
                                                <FormField key={option.name} name={option.name} label={option.label} type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                            ))}
                                    </div>
                                </div>
                                <div >
                                    <h3 className={styles.title}>What features does this restaurant have ?</h3>
                                    <div className={styles.features}>
                                        {featureOptions.map((feature) => (
                                            <div className={styles.subfeatures} key={feature.subheading}>
                                                <h4 className={styles.subheading}>{feature.subheading}</h4>
                                                {feature.options.map((option) => (
                                                    <FormField key={option} name={option} label={option} type="checkbox" theme="light" value={values} renderIcon={() => null} />
                                                ))}
                                            </div>
                                        ))}
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
