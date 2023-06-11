import React, { useState } from "react";
import { Form as FormFinal } from 'react-final-form'
import styles from './AddTravelAgent.module.css'
import { FormField, Button, IconAdd, ServiceSection } from "../../components/index";
import { mustBeNumber, required } from '../../utils/validations';
import { useLocation } from "react-router";
import { itenerary } from "../../utils/Constants/travelAgent";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/Api";
import { useSelector } from "react-redux";

const AddTravelAgent = () => {
    const userId = useSelector(state => state.user.id);
    const navigate = useNavigate();
    const location = useLocation();
    const [sections, setSections] = useState([1]);
    const addSection = (e) => {
        e.preventDefault()
        setSections([...sections, sections.length + 1]);
    };

    const onSubmit = async (values) => {
        let itenerary = "";
        for (let i = 0; i < sections.length; i++) {
            let j = i + 1;
            let day = "Day " + j + ": " + values['day' + j] + "  ";
            itenerary += day;
        }
        values.itenerary = itenerary;
        values.UserId = userId;
        for (let i = 1; i <= sections.length; i++) {
            delete values[`day${i}`];
        }
        const travelAgent = {
            service: location.state,
            travelAgent: values
        };
        console.log(travelAgent);

        const travelAgentObj = await axiosInstance.post("/travelAgent/addTravelAgentPackage", travelAgent);
        const travelAgentAdded = travelAgentObj.data;
        swal("Tour Package Added Successfully", "Success! The new Tour Package entry has been added successfully.", "success");
        navigate(`/travelAgentListing/${travelAgentAdded.serviceObj.name}`, { travelAgentAdded });
    };

    return (
        <div id={styles.travelAgentContainer}>
            <div className={styles.formContainer}>
                <FormFinal
                    onSubmit={onSubmit}
                    subscription={{
                        submitted: true
                    }} >
                    {({ handleSubmit, submitting, values }) => (
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formBody}>
                                <h1>Add Tour Package Details</h1>
                                <div className={styles.basicInfo}>
                                    <FormField name="source" label="Tour Starting Point" type="text" placeholder="eg. Lahore" validate={required} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="destination" label="Destination" type="text" placeholder="eg. Hunza Valley" validate={required} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="daysCount" label="No. of days of tour" type="text" placeholder="eg. 12 days" validate={required} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="packagePrice" label="Base Price (Rs.)" type="text" placeholder="Price without extra services(eg. Rs 5000)" validate={mustBeNumber} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="hotelDetails" label="Hotel details (if any)" type="text" placeholder="3 days in PC Hnza, 2 days in Serena Karachi..." theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="foodDetails" label="Food details (if any)" type="text" placeholder="eg. Lunch included, at same hotel/ xyz travelAgent..." theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="transportDetails" label="Transport details (if any)" type="text" placeholder="eg. Departure from xyz Lahore Airport, back from Gilgit Airport..." theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="exclude" label="What's Excluded from package?" type="text" placeholder="eg. Return air ticket, dinner , Personal Expense..." theme="light" value={values} renderIcon={() => null} />
                                    <div className={styles.itenerary} >
                                        <h3 className={styles.title}>Itenerary (tour plan details per day)</h3>
                                        <a href="#" onClick={addSection} id={styles.addIcon} > <IconAdd /> </a>
                                    </div>
                                    <div className={styles.form}>
                                        {sections.map((section, index) => {
                                            const showRemove = index < 2 ? 0 : 1;
                                            const i = index + 1;
                                            return (
                                                <>
                                                    <FormField name={"day" + i} label={"Day " + i} type="text" validate={required} placeholder={itenerary[index]} theme="light" value={values} renderIcon={() => null} />
                                                </>
                                            );
                                        })}
                                    </div>
                                </div>

                            </div>
                            <Button value="Add TourPackage" type="submit" btnType="submit" />
                        </form>
                    )}
                </FormFinal>
            </div>
            <div className={styles.imageContainer}>
                <img src="https://cdn.pixabay.com/photo/2018/12/15/19/36/fashion-3877510_1280.jpg" alt="" />
            </div>
        </div >
    );
};
export default AddTravelAgent;