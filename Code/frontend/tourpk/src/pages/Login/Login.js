import React, { useState } from "react";
import styles from "../Signup/Signup.module.css";
import { NavBar, FormButton, Footer, IconGoogle, IconEmail, IconPassword, FormField } from "../../components/index";
import { Form as FormFinal } from 'react-final-form'
import { validateEmail, validatePassword } from '../../validations'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const [errormsg, setErrormsg] = useState(null);
    const navigate = useNavigate();

    const onSubmit = async (values, form) => {
        console.log('Form submitted with values:', values);
        form.reset(); // Reset the form's state after submission
        try {
            res = await axios.post("/auth/login", values);
            console.log("aaaaaaaaaaaa fe");
            navigate("/");
        }
        catch (error) {
            setErrormsg(error.message);
        }
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
                                <FormField name="Email" type="email" placeholder="abc@email.com" validate={validateEmail} theme="dark" renderIcon={() => <IconEmail />} labelClass="noLabel" />
                                <FormField name="Password" type="text" placeholder="Your Password" validate={validatePassword} theme="dark" renderIcon={() => <IconPassword />} labelClass="noLabel" />
                                <a href="" className={styles.forget}>Forgot Password</a>
                                <FormButton type="submit" disabled={false} text="Sign Up" renderIcon={() => null} labelClass="noLabel" />
                                {errormsg && <div className={styles.error}>{errormsg}</div>}
                                <div className={styles.text}>OR</div>
                                <FormButton type="submit" disabled={submitting} text="Login with Google" renderIcon={() => <IconGoogle />} />
                                <div className={styles.text}>Don't have an account? <a href="/Signup" className={styles.whiteText}>Signup</a></div>
                            </form >
                        )}
                    </FormFinal >
                </div >
            </div >
        </div >
    );
}

export default Login;
