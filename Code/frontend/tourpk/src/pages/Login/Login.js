import React, { useState } from "react";
import styles from "../Signup/Signup.module.css";
import { IconEmail, IconPassword, FormField, Button, login } from "../../components/index";
import { Form as FormFinal } from 'react-final-form'
import { validateEmail, validatePassword } from '../../utils/validations'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Login = () => {
    const [errormsg, setErrormsg] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = async (values, form) => {
        try {
            const user = await dispatch(login(values));
            console.log("----> ", user.payload);

            if (user.payload.role == "tourist")
                navigate("/pricing");
            else
                navigate("/serviceProvider");
        } catch (error) {
            setErrormsg(error.response.data);
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
                                <FormField name="email" type="email" placeholder="abc@email.com" validate={validateEmail} theme="dark" renderIcon={() => <IconEmail />} labelClass="noLabel" />
                                <FormField name="password" type="password" placeholder="Your Password" validate={validatePassword} theme="dark" renderIcon={() => <IconPassword />} labelClass="noLabel" />
                                <Link className={styles.forget} to="/forgetPassword">Forgot Password</Link>
                                <div className={styles.signupBtn}>
                                    <Button className={styles.signupBtn} value={"Sign In"} type="secondary" width={300} btnType="submit" font={" 600 20px Arial, '' "} />
                                </div>
                                {errormsg && <div className={styles.error}>{errormsg}</div>}
                                <div className={styles.text}>Don't have an account? <a href="/SignupAsTourist" className={styles.whiteText}>Signup</a></div>
                            </form >
                        )}
                    </FormFinal >
                </div >
            </div >
        </div >
    );
}

export default Login;
