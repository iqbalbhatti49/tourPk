import React, { useState } from "react";
import { Form as FormFinal } from 'react-final-form'
import styles from './AddTravelAgent.module.css'
import { FormField, Button, IconAdd, ServiceSection } from "../../components/index";
import { mustBeNumber, required } from '../../utils/validations';
import { useLocation } from "react-router";
import { itenerary } from "../../utils/Constants/travelAgent";

const AddTravelAgent = () => {

    const location = useLocation();
    const [sections, setSections] = useState([1]);
    const addSection = (e) => {
        e.preventDefault()
        setSections([...sections, sections.length + 1]);
    };

    const onSubmit = (values) => {
        let itenerary = "";
        for (let i = 0; i < sections.length; i++) {
            let j = i + 1;
            let day = "Day " + j + ": " + values['day' + j] + "  ";
            itenerary += day;
        }
        values.itenerary = itenerary;
        for (let i = 1; i <= sections.length; i++) {
            delete values[`day${i}`];
        }
        const travelAgent = {
            service: location.state,
            travelAgent: values
        };
        console.log(travelAgent);
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
                                    <FormField name="duration" label="No. of days of tour" type="text" placeholder="eg. 12 days" validate={required} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="price" label="Base Price (Rs.)" type="text" placeholder="Price without extra services(eg. Rs 5000)" validate={mustBeNumber} theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="extraPrice" label="Additional day Price (if you offer)" type="text" placeholder="Price per day for extra tour (eg. Rs 1000)" theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="hotel" label="Hotel details (if any)" type="text" placeholder="3 days in PC Hnza, 2 days in Serena Karachi..." theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="food" label="Food details (if any)" type="text" placeholder="eg. Lunch included, at same hotel/ xyz travelAgent..." theme="light" value={values} renderIcon={() => null} />
                                    <FormField name="transport" label="Transport details (if any)" type="text" placeholder="eg. Departure from xyz Lahore Airport, back from Gilgit Airport..." theme="light" value={values} renderIcon={() => null} />
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
