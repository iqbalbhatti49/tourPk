import React, { useState } from "react";
import styles from "./SignupTourist.module.css";
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

const SignupTourist = () => {
    const required = value => (value ? undefined : 'Required') // ****** move
    const showResults = values => {
        window.alert("submitted");
    }
    return (<>
        <NavBar />
        <div className={styles.formContainer}></div>
        <div className={styles.tableContainer}>
            <div className={styles.formImage}> </div>
            <div className={styles.form}>
                <FormFinal
                    onSubmit={showResults}
                    subscription={{
                        submitted: true
                    }} >
                    {({ handleSubmit, submitting, values }) => (
                        <form onSubmit={handleSubmit}>
                            <h1 className={styles.white}>Sign Up</h1>
                            <FormField name="FullName" label="Full Name" type="text" placeholder="Your Full Name" validate={required} value={values} renderIcon={() => <IconPerson />} />
                            <FormField name="Email" label="Email" type="email" placeholder="abc@email.com" validate={required} value={values} renderIcon={() => <IconEmail />} />
                            <PhoneNumber />
                            <FormField name="Password" label="Password" type="text" placeholder="Your Password" validate={required} value={values} renderIcon={() => <IconPassword />} />
                            <FormField name="confirmPassword" label="Confirm Password" type="text" placeholder="Confirm Password" validate={required} value={values} renderIcon={() => <IconPassword />} />
                            <FormButton type="submit" disabled={false} text="Sign Up" renderIcon={() => null} />
                            <div className={styles.text}>OR</div>
                            <FormButton type="button" disabled={submitting} text="Signup with Google" renderIcon={() => <IconGoogle />} />
                            <div className={styles.text}>Already have an account? <a href="" className={styles.white}>Login</a></div>
                        </form>
                    )}
                </FormFinal>
            </div>
        </div>
        <Footer />
    </>
    );
}

export default SignupTourist;