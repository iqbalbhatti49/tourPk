import React from "react";
import styles from "./AddHotel.module.css";
import { Form as FormFinal } from "react-final-form";
import { FormField, Button } from "../../components/index";
import { useLocation } from "react-router";

const AddHotel = () => {
    const location = useLocation();

    const onSubmit = (values) => {
        console.log("--> ", location.state);
        console.log("Form submitted with values:", values);
    };

    const amenities = [
        { name: 'Lobby area', label: 'Lobby area' },
        { name: 'Reception desk', label: 'Reception desk' },
        { name: 'Concierge services', label: 'Concierge services' },
        { name: 'Restaurant(s)', label: 'Restaurant(s)' },
        { name: 'Bar(s) or lounge(s)', label: 'Bar(s) or lounge(s)' },
        { name: 'Room service', label: 'Room service' },
        { name: 'Fitness center or gym', label: 'Fitness center or gym' },
        { name: 'Swimming pool (indoor or outdoor)', label: 'Swimming pool (indoor or outdoor)' },
        { name: 'Spa or wellness center', label: 'Spa or wellness center' },
        { name: 'Business center', label: 'Business center' },
        { name: 'Conference and meeting rooms', label: 'Conference and meeting rooms' },
        { name: 'Free Wi-Fi or internet access', label: 'Free Wi-Fi or internet access' },
        { name: '24-hour front desk', label: '24-hour front desk' },
        { name: 'Express check-in and check-out', label: 'Express check-in and check-out' },
        { name: 'Elevators or lifts', label: 'Elevators or lifts' },
        { name: 'Laundry services', label: 'Laundry services' },
        { name: 'Currency exchange', label: 'Currency exchange' },
        { name: 'On-site parking', label: 'On-site parking' },
        { name: 'Shuttle service', label: 'Shuttle service' },
        { name: 'Airport transportation', label: 'Airport transportation' },
    ];


    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.heading}>So, You Are A Hotel Owner?</h1>
                    <p className={styles.subHeading}>Offer your services through TourPK</p>
                    <p className={styles.description}>If you can't find the answers to the questions you are looking for, please contact us through the form
                        provided below! If you can't find the answers to the questions you are looking for, please contact us through the form
                        provided below!</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.formFields}>
                        <FormFinal onSubmit={onSubmit}>
                            {({ handleSubmit, values }) => (
                                <form onSubmit={handleSubmit} className={styles.formContainer}>
                                    <h2>Ameneties You Offer</h2>
                                    <div className={styles.hotelAmeneties}>
                                        {
                                            amenities.map((amenity) => (
                                                <div>
                                                    <FormField
                                                        key={amenity.name}
                                                        name={amenity.name}
                                                        label={amenity.label}
                                                        type="checkbox"
                                                        theme="light"
                                                        value={values}
                                                        renderIcon={() => null}
                                                    />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className={styles.btnDiv}>
                                        <Button
                                            id={styles.signupBtn}
                                            value="Submit"
                                            type="submit"
                                            btnType="submit"
                                            width={250}
                                        />
                                    </div>
                                </form>
                            )}
                        </FormFinal>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="../static/images/hotelDetails.png" alt="FAQs" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddHotel;
