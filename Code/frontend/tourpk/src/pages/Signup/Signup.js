import styles from "./Signup.module.css";
import {
    FormField, IconEmail, IconPassword, IconPerson, updateUser, Button, useDispatch,
    useNavigate, axiosInstance, validateAlpha, validateEmail, validatePassword, validateEquality,
    validatePhone, FinalForm, React, useState
}
    from "../../components/index";

const Signup = (props) => {
    const [errormsg, setErrormsg] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (values, form) => {
        dispatch(updateUser(values));
        try {
            let res;
            if (props.userType === "seller")
                res = await axiosInstance.post("auth/signupAsSeller", values);
            else
                res = await axiosInstance.post("auth/signupAsTourist", values);
            form.reset(); 
            Object.keys(values).forEach(key => {
                form.change(key, undefined);
                form.resetFieldState(key);
            });
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
                    ? <h1 className={styles.heading}>Sign Up As Seller</h1>
                    : <h1 className={styles.heading}>Sign Up as Tourist</h1>
            }
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
                                <h1 className={styles.whiteText} id={styles.signupTitle}>Sign Up</h1>
                                <FormField name="name" type="text" placeholder="Your Full Name" validate={validateAlpha} theme="dark" renderIcon={() => <IconPerson />} labelClass="noLabel" />
                                <FormField name="email" type="email" placeholder="abc@email.com" validate={validateEmail} theme="dark" renderIcon={() => <IconEmail />} labelClass="noLabel" />
                                {
                                    props.userType == "seller" ?
                                        <FormField name="businessTitle" type="text" placeholder="Your BusinessTitle" validate={validateAlpha} theme="dark" renderIcon={() => <IconPerson />} labelClass="noLabel" /> : null
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
                    </FinalForm >
                </div >
            </div >
        </div >
    );
}
export default Signup;
