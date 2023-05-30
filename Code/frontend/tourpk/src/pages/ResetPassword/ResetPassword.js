import React from 'react'
import { useDispatch } from 'react-redux';
import styles from './ResetPassword.module.css'
import { Button, FormField } from '../../components'
import { Form as FormFinal } from 'react-final-form'
import { validateEquality, validatePassword } from '../../utils/validations';
import { resetPassword } from '../../app/features/user/userSlice';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
            <FormFinal onSubmit={onSubmit} subscription={{ submitted: true }} >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <FormField name="Password1" label="Password" type="text" placeholder="New Password" validate={validatePassword} theme="light" renderIcon={() => null} />
                        <FormField name="Password2" label="Confirm Password" type="text" placeholder="Reset Password" validate={(value, values) => validateEquality(values.Password1, value)} theme="light" renderIcon={() => null} />
                        <div className={styles.addButtonContainer}>
                            <Button value="Reset Password" type="submit" btnType="submit" />
                        </div>
                    </form>
                )}
            </FormFinal>
        </div>
    )
}
