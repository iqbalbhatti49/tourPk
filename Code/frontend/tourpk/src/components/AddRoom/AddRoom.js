import React from "react";
import styles from "./AddRoom.module.css";
import { Form as FormFinal } from "react-final-form";
import { FormField, Button } from "../../components/index";
import RoomAmeneties from "../RoomAmeneties/RoomAmeneties"
import { mustBeNumber, required, validateAlpha } from "../../utils/validations";
import { roomAmenitiess } from "../../utils/Constants/RoomAmenetiesOptions";
import axiosInstance from "../../utils/Api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AddRoom = (props) => {
    const navigate = useNavigate();

    const userId = useSelector(state => state.user.id); // Id of currently logged in user
    const { service, hotelAmenities } = props.hotelData.hotelData;
    const imagesArray = service.images;
    delete service.images;
    const hotel = {
        UserId: userId,
        amenities: hotelAmenities
    }

    const preProcess = (values) => {
        // convert selected checkbox values to comma-separated string
        const roomAmenities = roomAmenitiess
            .filter(option => values[option.name])
            .map(option => option.label)
            .join(", ");
        for (const index in roomAmenitiess) {
            const { name } = roomAmenitiess[index];
            if (values.hasOwnProperty(name)) {
                delete values[name];
            }
        }
        const roomData = {
            ...values, roomAmenities
        }
        return roomData;
    };

    const onSubmit = async (values) => {
        values.availableRoomsCount = values.roomsCount;
        const roomData = preProcess(values);

        const hotelRoom = {
            service: service,
            hotel: hotel,
            images: imagesArray,
            room: roomData
        }

        console.log(hotelRoom)
        const roomId = await axiosInstance.post("/hotel/addHotel", hotelRoom);
        console.log("--> Back on F.end --> ", roomId.data);
        swal("Hotel and Room Added Successfully", "Success! The new Hotel entry has been added successfully.", "success");
        navigate(`/hotelListing/${roomId.data}`);
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
                                        validate={validateAlpha}
                                        renderIcon={() => null}
                                        theme="light"
                                    />
                                    <FormField
                                        name="roomsCount"
                                        label="Rooms Count with similar characteristics"
                                        type="number"
                                        placeholder="30"
                                        validate={mustBeNumber}
                                        renderIcon={() => null}
                                        theme="light"
                                    />

                                    <FormField
                                        name="capacity"
                                        label="Occupancy"
                                        type="number"
                                        placeholder="2 persons"
                                        validate={mustBeNumber}
                                        renderIcon={() => null}
                                        theme="light"
                                    />

                                    <FormField
                                        name="bedConfiguration"
                                        label="Bed Configuration"
                                        type="text"
                                        placeholder="King, Queen, Twin"
                                        validate={validateAlpha}
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
                                        name="description"
                                        label="Room description"
                                        type="text"
                                        placeholder="Amazing ventilation with 3 windows, coffee table area..."
                                        validate={required}
                                        renderIcon={() => null}
                                        theme="light"
                                    />

                                    <FormField
                                        name="smoking"
                                        label="Smoking Policy"
                                        type="text"
                                        placeholder="Smoking, Non-Smoking"
                                        validate={validateAlpha}
                                        renderIcon={() => null}
                                        theme="light"
                                    />

                                    <FormField
                                        name="rentPerNight"
                                        label="Rent per Night (Rs.)"
                                        type="number"
                                        placeholder="Rs. 2000"
                                        validate={mustBeNumber}
                                        renderIcon={() => null}
                                        theme="light"
                                    />

                                    <RoomAmeneties values={values} />
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
