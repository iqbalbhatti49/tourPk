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
import { validateAlpha ,validateEmail, validatePassword, validateEquality } from '../../validations'

const SignupTourist = () => {
    const required = value => (value ? undefined : 'Required')
    const onSubmit = (values, form) => {
        console.log('Form submitted with values:', values);
        form.reset(); // Reset the form's state after submission
       // TODO: manage redux -> dispatch redux...
      };
    return (<>
        <NavBar />
        <div className={styles.formContainer}>
        <h1>SignUp For Next Tour!</h1>
        <div className={styles.tableContainer}>
            <div className={styles.formImage}>
            <img src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600&h=500" alt="" />    
            </div>
            <div className={styles.form}>
                <FormFinal
                    onSubmit={onSubmit}
                    subscription={{
                        submitted: true
                    }} >
                    {({ handleSubmit, submitting, values }) => (
                        <form onSubmit={handleSubmit}>
                            <h1 className={styles.white}>Sign Up</h1>
                            <FormField name="FullName" label="Full Name" type="text" placeholder="Your Full Name" validate={validateAlpha} theme="dark"   renderIcon={() => <IconPerson />} labelClass="noLabel" />
                            <FormField name="Email" label="Email" type="email" placeholder="abc@email.com" validate={validateEmail} theme="dark" renderIcon={() => <IconEmail />} labelClass="noLabel" />
                            <PhoneNumber/>
                            <FormField name="Password" type="text" placeholder="Your Password" validate={validatePassword} theme="dark"   renderIcon={() => <IconPassword />} labelClass="noLabel" />
                            <FormField name="confirmPassword" type="text" placeholder="Confirm Password" validate={(value, values) => validateEquality(values.Password, value)} theme="dark"   renderIcon={() => <IconPassword />} labelClass="noLabel" />
                            <FormButton type="submit" disabled={false} text="Sign Up" renderIcon={() => null} />
                            <div className={styles.text}>OR</div>
                            <FormButton type="submit" disabled={submitting} text="Signup with Google" renderIcon={() => <IconGoogle />} />
                            <div className={styles.text}>Already have an account? <a href="" className={styles.white}>Login</a></div>
                        </form>
                    )}
                </FormFinal>
            </div>
        </div>
        </div>
        <Footer />
    </>
    );
}
export default SignupTourist;

//When a validation function is passed to a form field, final-form library automatically passes two arguments to that function: the current field value and entire form values object