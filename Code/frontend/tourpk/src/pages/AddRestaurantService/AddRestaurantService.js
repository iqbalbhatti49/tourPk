import React, { useState } from "react";
import styles from "./AddRestaurantService.module.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { Form as FormFinal } from 'react-final-form'
import FormField from '../../components/FormField/FormField'
import FormButton from '../../components/FormButton/FormButton';
import IconEmail from '../../components/IconEmail/IconEmail';
import IconPassword from '../../components/IconPassword/IconPassword';
import IconGoogle from '../../components/IconGoogle/IconGoogle';
import IconPerson from '../../components/IconPerson/IconPerson';
import PhoneNumber from "../../components/PhoneNumber/PhoneNumber";
import { IconHotel } from "../../components/IconHotel/IconHotel";
import Button from "../../components/Button/Button";

const AddRestaurant = () => {
    const required = value => (value ? undefined : 'Required') // ****** move
    const showResults = values => {
        window.alert("submitted");
    }
    return (<>
        <NavBar />
        <div className={styles.formContainer}></div>
        <div className={styles.tableContainer}>
            <div >
                <FormFinal
                    onSubmit={showResults}
                    subscription={{
                        submitted: true
                    }} >
                    {({ handleSubmit, submitting, values }) => (
                        <form onSubmit={handleSubmit}>
                            <h1>Add a Restaurant</h1>
                            <h3>Name and Description</h3>
                            <FormField name="RestaurantName" label="Restaurant Name" type="text" placeholder="Restaurant Name" validate={required} theme="light" value={values} renderIcon={() => <IconHotel />} />
                            <FormField name="Description" label="Description" type="text" placeholder="Description about Restaurant" validate={required} theme="light" value={values} renderIcon={() => <IconHotel />} />
                            <h3>Contact Information</h3>
                            <PhoneNumber />
                            <FormField name="Email" label="Email" type="email" placeholder="abc@email.com" validate={required} theme="light" value={values} renderIcon={() => <IconEmail />} />
                            <FormField name="WebsiteURL" label="Website URL" type="text" placeholder="Website URL" validate={required} theme="light" value={values} renderIcon={() => <IconHotel />} />
                            <h3>Address</h3>
                            <FormField name="RestaurantName" label="Restaurant Name" type="text" placeholder="Restaurant Name" validate={required} theme="light" value={values} renderIcon={() => <IconHotel />} />
                            <FormField name="Description" label="Description" type="text" placeholder="Description about Restaurant" validate={required} theme="light" value={values} renderIcon={() => <IconHotel />} />
                            <Button value="Add Service"/>
                        </form>
                    )}
                </FormFinal>
            </div>
        </div>
        <Footer />
    </>
    );
}

export default AddRestaurant;