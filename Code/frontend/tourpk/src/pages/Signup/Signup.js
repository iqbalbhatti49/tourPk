import React, { useState } from "react";
import styles from "./Signup.module.css";
import { Form as FormFinal } from 'react-final-form'
import { FormField, IconEmail, IconPassword, IconPerson, updateUser, Button } from "../../components/index";
import { validateAlpha, validateEmail, validatePassword, validateEquality, validatePhone } from '../../utils/validations';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Signup = (props) => {
    const [errormsg, setErrormsg] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (values, form) => {
        console.log('Form submitted with values:', values);
        dispatch(updateUser(values));
        try {
            let res;
            if (props.userType === "seller")
                res = await axios.post("auth/signupAsSeller", values);
            else
                res = await axios.post("auth/signupAsTourist", values);
            form.reset(); // Reset the form's state after submission
            navigate("/Login");
        }
        catch (error) {
            setErrormsg(error.response.data);
        }
    };
    return (
        <div className={styles.formContainer}>
            {
                props.userType === "seller"
                    ? <h1>SignUp As Seller!</h1>
                    : <h1>SignUp for Your Next Tour!</h1>
            }
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
                                <h1 className={styles.whiteText} id={styles.signupTitle}>Sign Up</h1>
                                <FormField name="name" label="Full Name" type="text" placeholder="Your Full Name" validate={validateAlpha} theme="dark" renderIcon={() => <IconPerson />} labelClass="noLabel" />
                                <FormField name="email" label="Email" type="email" placeholder="abc@email.com" validate={validateEmail} theme="dark" renderIcon={() => <IconEmail />} labelClass="noLabel" />
                                {
                                    props.userType == "seller" ?
                                        <FormField name="businessTitle" label="Business Title" type="text" placeholder="Your BusinessTitle" validate={validateAlpha} theme="dark" renderIcon={() => <IconPerson />} labelClass="noLabel" /> : null
                                }
                                <FormField name="phoneNumber" type="text" placeholder="Your Phone Number" validate={validatePhone} theme="dark" renderIcon={() => <IconPerson />} labelClass="noLabel" />
                                <FormField name="password" type="password" placeholder="Your Password" validate={validatePassword} theme="dark" renderIcon={() => <IconPassword />} labelClass="noLabel" />
                                <FormField name="confirmPassword" type="password" placeholder="Confirm Password" validate={(value, values) => validateEquality(values.password, value)} theme="dark" renderIcon={() => <IconPassword />} labelClass="noLabel" />
                                <div className={styles.signupBtn}>
                                    <Button id={styles.signupBtn} value={"Sign Up"} type="secondary" width={300} btnType="submit" font={" 600 20px Arial, '' "} />
                                </div>
                                {errormsg && <div className={styles.error}>{errormsg}</div>}
                                <div className={styles.text}>Already have an account? <a href="" className={styles.whiteText}>Login</a></div>
                                {
                                    props.userType === "tourist" ?
                                        <div className={styles.text}>Are you a Service Seller? <a href="/contract" className={styles.whiteText}>Signup as Seller</a></div>
                                        : <div className={styles.text}>Are you a Tourist? <a href="/signupAsTourist" className={styles.whiteText}>Signup as Tourist</a></div>
                                }
                            </form >
                        )}
                    </FormFinal >
                </div >
            </div >
        </div >
    );
}
export default Signup;

//When a validation function is passed to a form field, final-form library automatically passes two arguments to that function: the current field value and entire form values object
