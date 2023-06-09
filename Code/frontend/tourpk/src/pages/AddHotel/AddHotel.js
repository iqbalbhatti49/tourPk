import React from "react";
import styles from "./AddHotel.module.css";
import { Form as FormFinal } from "react-final-form";
import { FormField, Button } from "../../components/index";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { amenities } from "../../utils/Constants/HotelOptions";

const AddHotel = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const preProcess = (values) => {
        // convert selected checkbox values to comma-separated string
        const hotelAmenities = amenities
            .filter(option => values[option.name])
            .map(option => option.label)
            .join(", ");

        const hotelData = {
            service: location.state.values,
            hotelAmenities: hotelAmenities
        };
        console.log("first hotel dataaaaaaaa:>>  ", hotelData);

        return hotelData;
    };

    const onSubmit = (values) => {
        console.log("--> ", location.state);
        console.log("Form submitted with values:", values);
        const hotelData = preProcess(values);
        console.log("hotel dataaaaaaaa:>>  ", hotelData);
        navigate("/addHotelRoom", { state: { hotelData } });
    }

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
