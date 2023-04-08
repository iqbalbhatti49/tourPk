import React, { useRef } from "react";
import styles from "./SignupTourist.module.css";
import { Form as FormFinal } from 'react-final-form'
import { FormField, FormButton, IconEmail, IconPassword, IconGoogle, IconPerson } from "../../components/index";
import { validateAlpha, validateEmail, validatePassword, validateEquality, validatePhone } from '../../validations';

const SignupTourist = (props) => {

    const onSubmit = (values, form) => {
        console.log('Form submitted with values:', values);
        form.reset(); // Reset the form's state after submission
    };
    return (
        <div className={styles.formContainer}>
            {
                props.userType == "seller"
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
                                <FormField name="FullName" label="Full Name" type="text" placeholder="Your Full Name" validate={validateAlpha} theme="dark" renderIcon={() => <IconPerson />} labelClass="noLabel" />
                                <FormField name="Email" label="Email" type="email" placeholder="abc@email.com" validate={validateEmail} theme="dark" renderIcon={() => <IconEmail />} labelClass="noLabel" />
                                {
                                    props.userType == "seller" ?
                                        <FormField name="BusinessTitle" label="Business Title" type="text" placeholder="Your BusinessTitle" validate={validateAlpha} theme="dark" renderIcon={() => <IconPerson />} labelClass="noLabel" /> : null
                                }
                                <FormField name="PhoneNumber" type="text" placeholder="Your Phone Number" validate={validatePhone} theme="dark" renderIcon={() => <IconPerson />} labelClass="noLabel" />
                                <FormField name="Password" type="text" placeholder="Your Password" validate={validatePassword} theme="dark" renderIcon={() => <IconPassword />} labelClass="noLabel" />
                                <FormField name="confirmPassword" type="text" placeholder="Confirm Password" validate={(value, values) => validateEquality(values.Password, value)} theme="dark" renderIcon={() => <IconPassword />} labelClass="noLabel" />
                                <FormButton type="submit" disabled={false} text="Sign Up" renderIcon={() => null} />
                                <div className={styles.text}>OR</div>
                                <FormButton type="submit" disabled={submitting} text="Signup with Google" renderIcon={() => <IconGoogle />} />
                                <div className={styles.text}>Already have an account? <a href="" className={styles.whiteText}>Login</a></div>
                                {
                                    props.userType == "tourist" ?
                                        <div className={styles.text}>Are you a Service Seller? <a href="/signupAsSeller" className={styles.whiteText}>Signup as Seller</a></div>
                                        : <div className={styles.text}>Are you a Tourist? <a href="/signupAsTourist" className={styles.whiteText}>Signup as Tourist</a></div>
                                }
                            </form>
                        )}
                    </FormFinal>
                </div>
            </div>
        </div>
    );
}
export default SignupTourist;

//When a validation function is passed to a form field, final-form library automatically passes two arguments to that function: the current field value and entire form values object
