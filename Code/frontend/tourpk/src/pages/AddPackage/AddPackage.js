import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import { Form as FormFinal } from 'react-final-form'
import FormField from '../../components/FormField/FormField'
import styles from './AddPackage.module.css'
import Dropdown from '../../components/Dropdown/Dropdown'

export default function AddPackage() {
    const required = value => (value ? undefined : 'Required') // ****** move
    const showResult = values => {
        window.alert("submitted");
    }
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
                                <FormField name="PackageName" type="text" placeholder="Package Name" validate={required}  theme="light" renderIcon={() => null} />
                                <FormField name="Price" type="number" placeholder="Price of package" validate={required}  theme="light" renderIcon={() => null} />
                                <FormField name="Description" type="text" placeholder="Additional description of package and why its amazing"  theme="light" renderIcon={() => null} />
                                <FormField name="Validity" type="text" placeholder="No of days for this offer lasts eg. 25 days" validate={required}  theme="light" renderIcon={() => null} />
                                <Dropdown />
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