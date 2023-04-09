import { React, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import styles from './PhoneNumber.module.css'

export default function PhoneNumber() {
    const [phone, setPhone] = useState('');
    return (
        <div className={styles.phoneContainer}>
            <PhoneInput className={styles.phoneField} name="phoneNumber" country={'us'} value={phone} label="Contact No" onChange={phone => setPhone(phone)} />
        </div>
    )
}
