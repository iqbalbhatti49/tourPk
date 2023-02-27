import React, { useState } from "react";
import styles from "./Login.module.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
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
       // TODO: manage redux -> dispatch redux...
      };
    
    return (<>
        <NavBar />
        <div className={styles.formContainer}></div>
        <div className={styles.tableContainer}>
            <div className={styles.formImage}> </div>
            <div className={styles.form}>
                <FormFinal
                    onSubmit={onSubmit}
                    subscription={{
                        submitted: true
                    }} >
                    {({ handleSubmit, submitting, values }) => (
                        <form onSubmit={handleSubmit}>
                            <h1 className={styles.loginTitle}>Welcome back!</h1>
                            <FormField name="Email" type="email" placeholder="abc@email.com" validate={validateEmail} theme="dark"  renderIcon={() => <IconEmail />} labelClass="noLabel" />
                            <FormField name="Password" type="text" placeholder="Your Password" validate={validatePassword} theme="dark"  renderIcon={() => <IconPassword />} labelClass="noLabel" />
                            <a href="" className={styles.forget}>Forgot Password</a>
                            <FormButton type="submit" disabled={false} text="Sign Up" renderIcon={() => null} labelClass="noLabel" />
                            <div className={styles.text}>OR</div>
                            <FormButton type="submit" disabled={submitting} text="Login with Google" renderIcon={() => <IconGoogle />} />
                            <div className={styles.text}>Don't have an account? <a href="/login" className={styles.white}>Login</a></div>
                        </form>
                    )}
                </FormFinal>
            </div>
        </div>
        <Footer />
    </>
    );
}

export default Login;
