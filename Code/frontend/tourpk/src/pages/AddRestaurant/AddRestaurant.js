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
import { useSelector } from "react-redux";

const AddRestaurant = () => {

    const userId = useSelector(state => state.user.id);
    const navigate = useNavigate();
    const location = useLocation();

    // Logic for Update restaurant 
    const searchParams = new URLSearchParams(location.search);
    const isEditMode = searchParams.get('edit') === '1';
    console.log(isEditMode);
    let values, restaurant;
    let updateInitialValue;
    if (isEditMode) {
        console.log(location.state);
        values = location.state.values;
        restaurant = location.state.obj;
        console.log("Before Formatting****** ", restaurant);
        console.log(values);
    }

    if (isEditMode) {
        const formatToFieldNames = (obj) => {
            const convertOptionsToValues = (options, features) => {
                return options.reduce((values, option) => {
                    values[option] = features.includes(option);
                    return values;
                }, {});
            };
            const mealTypeValues = convertOptionsToValues(mealOptions.map(option => option.label), obj.mealType.split(', '));
            const featureValues = convertOptionsToValues(featureOptions.flatMap(option => option.options), obj.features.split(', '));
            console.log(mealTypeValues);
            const obj1 = {
                startTime: obj.openTime,
                endTime: obj.closeTime,
                menu: obj.menuUrl,
                minPrice: obj.menuStartingPrice.toString(),
                cuisine: obj.cuisineType,
                ...mealTypeValues,
                ...featureValues,
                UserId: obj.UserId,
                serviceId: obj.ServiceId,
            };
            return obj1;
        };

        updateInitialValue = formatToFieldNames(restaurant);
        console.log(restaurant);
    }

    const addInitialValue = {
        openTime: "",
        closeTime: "",
        menuUrl: "",
        menuStartingPrice: null,
        cuisineType: "",
        mealType: "",
        features: "",
        ServiceId: null,
        UserId: null
    };

    console.log(addInitialValue);
    const initialValue = isEditMode ? updateInitialValue : addInitialValue;

    // ADD: Process the selected checkboxes to string for storing in DB
    const preProcess = (values) => {
        console.log(values);
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
            UserId: userId
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

    const onSubmit = async (value) => {
        console.log(value);
        const formattedValues = preProcess(value);

        console.log(value);
        value.UserId = userId;
        const servic = isEditMode ? value : location.value;
        if (isEditMode)
            servic.serviceId = restaurant.id;
        const restaurantData = {
            service: servic,
            restaurant: formattedValues.restaurant
        };
        console.log(restaurantData);

        let restaurantObj;
        console.log(restaurantData);
        if (!isEditMode) {
            restaurantObj = await axiosInstance.post("restaurant/addRestaurant", restaurantData);
            swal("Restaurant Added Successfully", "Success! The new Restaurant entry has been added successfully.", "success");
        }
        else {
            restaurantObj = await axiosInstance.post("/restaurant/updateRestaurant", restaurantData);
            swal("Restaurant Updated Successfully", "Success! Changes has been updated successfully.", "success");
        }

        const id = restaurantObj.data;
        navigate(`/restaurantListing/${id}`);
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
                                    <FormField name="startTime" label="Opening Time" type="text" placeholder="eg. 9:00 am" validate={required} theme="light" value={values} defaultValue={initialValue.startTime} renderIcon={() => null} />
                                    <FormField name="endTime" label="Closing Time" type="text" placeholder="eg. 12:00 pm" validate={required} theme="light" value={values} defaultValue={initialValue.endTime} renderIcon={() => null} />
                                    <FormField name="menu" label="Menu URL (if any)" type="text" placeholder="https:/resturant.com/menu.png" validate={validateURL} theme="light" value={values} defaultValue={initialValue.menu} renderIcon={() => null} />
                                    <FormField name="minPrice" label="Starting price(Rs.)" type="number" placeholder=" Starting price in your menu (eg. Rs 500)" validate={mustBeNumber} theme="light" value={values} defaultValue={initialValue.minPrice} renderIcon={() => null} />
                                    <FormField name="cuisine" label="Cuisines" type="text" placeholder="Cuisines you offer (eg. French, Italian, Japanese)" validate={required} theme="light" value={values} defaultValue={initialValue.cuisine} renderIcon={() => null} />
                                </div>
                                <div >
                                    <h3 className={styles.title}>Meals You Offer</h3>
                                    <div className={styles.meals}>
                                        {
                                            mealOptions.map(option => (
                                                <FormField key={option.name} name={option.name} label={option.label} type="checkbox" theme="light" value={values} defaultValue={isEditMode ? updateInitialValue[option.label] : ""} renderIcon={() => null} />
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
                                                    <FormField key={option} name={option} label={option} type="checkbox" theme="light" value={values} defaultValue={isEditMode ? updateInitialValue[option] : ""} renderIcon={() => null} />
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
