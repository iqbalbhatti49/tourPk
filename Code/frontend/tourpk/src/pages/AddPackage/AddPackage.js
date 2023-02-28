import React, { useState } from 'react';
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import { Form as FormFinal } from 'react-final-form'
import FormField from '../../components/FormField/FormField'
import styles from './AddPackage.module.css'
import Dropdown from '../../components/Dropdown/Dropdown'
import Button from '../../components/Button/Button';
import ServiceSection from '../../components/ServiceSection/ServiceSection';

export default function AddPackage() {
    const required = value => (value ? undefined : 'Required') // ****** move
    const optionalField = value => (value ? 'undefined' : '') // ****** move ******************
    const showResult = values => {
        window.alert("submitted");
    }
    const [formData, setFormData] = useState({});
    const handleFormData = (fieldName, value) => {
        setFormData((prevData) => ({ [fieldName]: value, ...prevData }));
    };

    const [sections, setSections] = useState([1, 2]);
    const addSection = () => {
        setSections([...sections, sections.length + 1]);
    };

    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <div>
                    <img src="../static/images/packagehead.png" alt="packages" />
                </div>
                <h1>Add Services Package</h1>
                <h2>Name and Description</h2>
                <div className={styles.formBorder}>
                    <div className={styles.formContainer}>
                        <FormFinal onSubmit={showResult} subscription={{ submitted: true }} >
                            {({ handleSubmit, submitting, values }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className={styles.flexContainer}>
                                        <div>
                                            <label htmlFor="name" className={styles.label}>PackageName</label>
                                            <FormField name="PackageName" type="text" placeholder="Package Name" validate={required} theme="light" handleChange={handleFormData} renderIcon={() => null} />
                                        </div>
                                        <div>
                                            <label htmlFor="price" className={styles.label}>Price</label>
                                            <FormField name="Price" type="number" placeholder="Price of package" validate={required} theme="light" handleChange={handleFormData} renderIcon={() => null} />
                                        </div>
                                    </div>
                                    <label htmlFor="desc" className={styles.label}>Description</label>
                                    <FormField name="Description" type="text" placeholder="Additional description of package and why its amazing" theme="light" handleChange={handleFormData} renderIcon={() => null} />
                                    <label htmlFor="Validity" className={styles.label}>Validity</label>
                                    <FormField name="Validity" type="text" placeholder="No of days for this offer lasts eg. 25 days" validate={required} theme="light" handleChange={handleFormData} renderIcon={() => null} />
                                    {/* <Dropdown /> */}
                                    <br />
                                    <h2>What's included</h2>
                                    <div className={styles.form}>
                                        {sections.map((section, index) => {
                                            const validate = index < 2 ? required : optionalField;
                                            return (
                                                <ServiceSection key={index} index={index} validate={validate} handleFormData={handleFormData} />
                                            );
                                        })}
                                        <div className={styles.addButtonContainer}>
                                            <Button value="Add more" type="primary" />
                                        </div>
                                    </div>
                                </form>
                            )}
                        </FormFinal>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
