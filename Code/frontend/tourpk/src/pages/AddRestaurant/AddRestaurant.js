import React from "react";
import { Form as FormFinal } from 'react-final-form'
import styles from './AddRestaurant.module.css'
import { FormField, Button } from "../../components/index";
import { mustBeNumber, required, validateURL } from '../../utils/validations';
import { mealOptions, featureOptions } from '../../utils/Constants/RestaurantsOptions';
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import axiosInstance from "../../utils/Api";

const AddRestaurant = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const preProcess = (values) => {
        // convert selected checkbox values to comma-separated string
        const meals = mealOptions
            .filter(option => values[option.name])
            .map(option => option.label)
            .join(", ");

        const features = featureOptions
            .flatMap(option => option.options)
            .filter(option => values[option])
            .join(", ");

        //objects to be sent to backend for storing in database
        const restaurant = {
            openTime: values.startTime,
            closeTime: values.endTime,
            menuUrl: values.menu,
            menuStartingPrice: values.minPrice,
            cuisineType: values.cuisine,
            mealType: meals,
            features: features,
        }
        const service = location.state.values;
        const imagesArray = service.images;
        delete service.images;

        const restaurantData = {
            service: service,
            restaurant: restaurant,
            images: imagesArray
        }
        return restaurantData;
    }

    const onSubmit = async (values) => {
        const restaurantData = preProcess(values);
        const restaurantAdded_ = await axiosInstance.post("restaurant/addRestaurant", restaurantData);
        const restaurantAdded = restaurantAdded_.data;
        swal("Restaurant Added Successfully", "Success! The new Restaurant entry has been added successfully.", "success");
        navigate(`/restaurantListing/`, { state: restaurantAdded });
        // navigate(`/restaurantListing/${restaurantAdded.serviceObj.name}`, { restaurantAdded });
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
                                    <FormField name="minPrice" label="Starting price(Rs.)" type="number" placeholder=" Starting price in your menu (eg. Rs 500)" validate={mustBeNumber} theme="light" value={values} renderIcon={() => null} />
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
