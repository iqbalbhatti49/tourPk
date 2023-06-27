import React, { useState } from "react";
import styles from "../Signup/Signup.module.css";
import {
    IconEmail, IconPassword, FormField, Button, login, FinalForm,
    validateEmail, useDispatch, useNavigate, Link, required
} from "../../components/index";

const Login = () => {
    const [errormsg, setErrormsg] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (values, form) => {
        try {
            const user = await dispatch(login(values));
            if (!user.payload) {
                throw new Error(user.error.message);
            }
            else {
                if (user.payload.user.role === "tourist") {
                    navigate("/paymentInformation", { state: { from: '/login' } });
                } else {
                    navigate("/serviceProvider");
                }
            }
        } catch (error) {
            if (error.message === "401") {
                setErrormsg("Invalid email or password");
            } else {
                setErrormsg(error.message);
            }
        }
    };


    return (
        <div className={styles.formContainer}>
            <h1 className={styles.heading}>Login Account</h1>
            <div className={styles.tableContainer}>
                <div className={styles.formImage}>
                    <img src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600&h=500" alt="" />
                </div>
                <div className={styles.form}>
                    <FinalForm
                        onSubmit={onSubmit}
                        subscription={{
                            submitted: true
                        }} >
                        {({ handleSubmit, submitting, values }) => (
                            <form onSubmit={handleSubmit}>
                                <h1 className={styles.whiteText}>Welcome back!</h1>
                                <FormField name="email" type="email" placeholder="abc@email.com" validate={validateEmail} theme="dark" renderIcon={() => <IconEmail />} labelClass="noLabel" />
                                <FormField name="password" type="password" placeholder="Your Password" validate={required} theme="dark" renderIcon={() => <IconPassword />} labelClass="noLabel" />
                                <Link className={styles.forget} to="/forgetPassword">Forgot Password</Link>
                                <div className={styles.signupBtn}>
                                    <Button className={styles.signupBtn} value={"Sign In"} type="secondary" width={300} btnType="submit" font={" 600 20px Arial, '' "} />
                                </div>
                                {errormsg && <div className={styles.error}>{errormsg}</div>}
                                <div className={styles.text}>Don't have an account? <a href="/SignupAsTourist" className={styles.whiteText}>Signup</a></div>
                            </form >
                        )}
                    </FinalForm >
                </div >
            </div >
        </div >
    );
}

export default Login;
