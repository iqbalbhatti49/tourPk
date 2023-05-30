import React from "react";
import styles from "./AddRoom.module.css";
import { Form as FormFinal } from "react-final-form";
import { FormField, Button } from "../../components/index";
import RoomAmeneties from "../RoomAmeneties/RoomAmeneties"

const AddRoom = () => {
    const required = (value) => (value ? undefined : "Required");
    const onSubmit = (values) => {
      console.log("Form submitted with values:", values);
    };
  
  return (
    <>
        <div className={styles.container}>
            <h1 className={styles.heading}>Add New Room Type</h1>
            <div className={styles.content}>
                <div className={styles.formFields}>
                    <FormFinal onSubmit={onSubmit}>
                    {({ handleSubmit, values }) => (
                        <form onSubmit={handleSubmit} className={styles.formContainer}>
                            <FormField
                                name="roomType"
                                label="Room Type"
                                type="text"
                                placeholder="Single, Double, Suite"
                                validate={required}
                                renderIcon={() => null}
                                theme="light"
                            />
                            <FormField
                                name="roomNumber"
                                label="Room Number"
                                type="text"
                                placeholder="101, 202"
                                validate={required}
                                renderIcon={() => null}
                                theme="light"
                            />

                            <FormField
                                name="occupancy"
                                label="Occupancy"
                                type="number"
                                placeholder="1, 2, 4"
                                validate={required}
                                renderIcon={() => null}
                                theme="light"
                            />

                            <FormField
                                name="bedConfiguration"
                                label="Bed Configuration"
                                type="text"
                                placeholder="King, Queen, Twin"
                                validate={required}
                                renderIcon={() => null}
                                theme="light"
                            />

                            <FormField
                                name="view"
                                label="View"
                                type="text"
                                placeholder="City View, Ocean View"
                                validate={required}
                                renderIcon={() => null}
                                theme="light"
                            />

                            <FormField
                                name="roomSize"
                                label="Room Size"
                                type="text"
                                placeholder="300 sq. ft., 25 sq. m"
                                validate={required}
                                renderIcon={() => null}
                                theme="light"
                            />

                            <FormField
                                name="smokingPolicy"
                                label="Smoking Policy"
                                type="text"
                                placeholder="Smoking, Non-Smoking"
                                validate={required}
                                renderIcon={() => null}
                                theme="light"
                            />

                            <FormField
                                name="price"
                                label="Price"
                                type="number"
                                placeholder="1500"
                                validate={required}
                                renderIcon={() => null}
                                theme="light"
                            />

                        <RoomAmeneties/>
                        <div className={styles.btnDiv}>
                            <Button
                                id={styles.signupBtn}
                                value={"Submit"}
                                type="primary"
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

export default AddRoom;
