import styles from './ForgetPassword.module.css'
import {
    Button, FormField, forgotPassword, React, useState,
    FinalForm, validateEmail, useDispatch,
} from '../../components'

export default function ForgetPassword() {
    const dispatch = useDispatch();
    const [message, setMessage] = useState(null);
    const onSubmit = async (values) => {
        const result = await dispatch(forgotPassword(values));
        setMessage(result.payload);
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <FinalForm onSubmit={onSubmit} subscription={{ submitted: true }} >
                    {({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <h1 className={styles.heading}>Forget Password</h1>
                            <div className={styles.title}>Please enter your email address</div>
                            <FormField name="forgetEmail" label="Email Address" type="text" placeholder="Registered Email Address to forget password" validate={validateEmail} theme="light" renderIcon={() => null} />
                            <Button value="Reset Password" type="submit" btnType="submit" />
                        </form>
                    )}
                </FinalForm>
                <div className={styles.msg}> {message} </div>
            </div>
        </div>
    )
};