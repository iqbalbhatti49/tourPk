import React, { useState } from 'react';
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import { Form as FormFinal } from 'react-final-form'
import styles from './AddPackage.module.css'
import Button from '../../components/Button/Button';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import PackageInformation from '../../components/PackageInformation/PackageInformation';
import { validateAlpha ,mustBeNumber} from '../../validations'
import IconAdd from '../../components/IconAdd/IconAdd';

export default function AddPackage() {
    const required = value => (value ? undefined : 'Required') // ****** move
    const optionalField = value => (value ? 'undefined' : '') // ****** move ******************
    const onSubmit = (values, form) => {
        console.log('Form submitted with values:', values);
        form.reset(); // Reset the form's state after submission
       // TODO: manage redux -> dispatch redux...
      };

    const [sections, setSections] = useState([1, 2]);
    const addSection = (e) => {    
        e.preventDefault()
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
                <div className={styles.formBorder}>
                    <div className={styles.formContainer}>
                        <FormFinal
                         onSubmit={onSubmit}
                         subscription={{ submitted: true }}
                          >
                            {({ handleSubmit, submitting, values }) => (
                                <form onSubmit={handleSubmit}>
                                    <PackageInformation values={values}  /> 
                                    <div className={styles.headingContainer}>
                                        <h2 id={styles.heading2}>What's included</h2>
                                        <a href="#" onClick={addSection}>
                                        <IconAdd/>
                                        </a>
                                    </div>

                                    <div className={styles.form}>
                                        {sections.map((section, index) => {
                                            const validate = index < 2 ? required : optionalField;
                                            return (
                                                <ServiceSection key={index} index={index} validate={validate}   />
                                            );
                                        })}
                                        <div className={styles.addButtonContainer}>
                                        <Button value="Add Package" type="primary" />
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
