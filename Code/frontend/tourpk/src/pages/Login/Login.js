import React, { useState } from "react";
import styles from "../SignupTourist/SignupTourist.module.css";
import { Form as FormFinal } from 'react-final-form'
import FormField from '../../components/FormField/FormField'
import FormButton from '../../components/FormButton/FormButton';
import IconEmail from '../../components/IconEmail/IconEmail';
import IconPassword from '../../components/IconPassword/IconPassword';
import IconGoogle from '../../components/IconGoogle/IconGoogle';
import { validateEmail, validatePassword } from '../../validations'

const Login = () => {
    const onSubmit = (values, form) => {
        console.log('Form submitted with values:', values);
        form.reset(); // Reset the form's state after submission
    };

    return (
        <div className={styles.formContainer}>
            <h1>Login Account</h1>
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
                                <h1 className={styles.whiteText}>Welcome back!</h1>
                                <FormField name="L_email" type="email" placeholder="abc@email.com" validate={validateEmail} theme="dark" renderIcon={() => <IconEmail />} labelClass="noLabel" />
                                <FormField name="L_password" type="text" placeholder="Your Password" validate={validatePassword} theme="dark" renderIcon={() => <IconPassword />} labelClass="noLabel" />
                                <a href="" className={styles.forget}>Forgot Password</a>
                                <FormButton type="submit" disabled={false} text="Sign Up" renderIcon={() => null} labelClass="noLabel" />
                                <div className={styles.text}>OR</div>
                                <FormButton type="submit" disabled={submitting} text="Login with Google" renderIcon={() => <IconGoogle />} />
                                <div className={styles.text}>Don't have an account? <a href="/SignupTourist" className={styles.whiteText}>Signup</a></div>
                            </form>
                        )}
                    </FormFinal>
                </div>
            </div>
        </div>
    );
}

export default Login;
