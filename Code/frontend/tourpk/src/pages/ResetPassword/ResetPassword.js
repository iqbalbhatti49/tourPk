import styles from './ResetPassword.module.css'
import {
    Button, FormField, useParams, useNavigate, FinalForm, useDispatch,
    React, validateEquality, validatePassword, resetPassword
} from '../../components'

export default function ResetPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id, token } = useParams();

    const onSubmit = async (values) => {
        const result = { id: id, token: token, password: values.Password1 };
        await dispatch(resetPassword(result));
        navigate(`/login`);
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Set New Password</div>
            <FinalForm onSubmit={onSubmit} subscription={{ submitted: true }} >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <FormField name="Password1" label="Password" type="password" placeholder="New Password" validate={validatePassword} theme="light" renderIcon={() => null} />
                        <FormField name="Password2" label="Confirm Password" type="password" placeholder="Reset Password" validate={(value, values) => validateEquality(values.Password1, value)} theme="light" renderIcon={() => null} />
                        <div className={styles.addButtonContainer}>
                            <Button value="Reset Password" type="submit" btnType="submit" />
                        </div>
                    </form>
                )}
            </FinalForm>
        </div>
    )
}
