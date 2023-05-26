import React, { useState } from 'react'
import styles from './ForgetPassword.module.css'
import { Button, FormField } from '../../components'
import { useDispatch } from "react-redux";
import { Form as FormFinal } from 'react-final-form'
import { validateEmail } from '../../utils/validations';
import { forgotPassword } from '../../app/features/user/userSlice';

export default function ForgetPassword() {
    const dispatch = useDispatch();
    const [message, setMessage] = useState(null);
    const onSubmit = async (values) => {
        const result = await dispatch(forgotPassword(values));
        console.log(result);
        setMessage(result.payload);
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Forget Password</h2>
            <div className={styles.title}>Please enter your email address</div>
            <FormFinal onSubmit={onSubmit} subscription={{ submitted: true }} >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <FormField name="forgetEmail" label="Email Address" type="text" placeholder="Registered Email Address to forget password" validate={validateEmail} theme="light" renderIcon={() => null} />
                        <div className={styles.addButtonContainer}>
                            <Button value="Reset Password" type="submit" btnType="submit" />
                        </div>
                    </form>
                )}
            </FormFinal>
            <div className={styles.msg}> {message} </div>
        </div>
    )
};