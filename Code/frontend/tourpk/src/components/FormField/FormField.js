import React from 'react';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import classNames from 'classnames/bind';
import { Field } from 'react-final-form';
import styles from './FormField.module.css';
let classWrapper = classNames.bind(styles);

const FormField = (props) => {
  const { name, label, type, placeholder, validate, value, renderIcon } = props;
  let classes = classWrapper({ formField: true, iconInput: renderIcon() != null, noIconInput: renderIcon() == null });
  const [phone, setPhone] = useState('');

  return (
    <Field
      name={name}
      validate={validate}
      subscription={{
        value: true,
        active: true,
        error: true,
        touched: true,
      }}
    >
      {({ input, meta }) => (
        <div className={styles.field}>
          {renderIcon() != null && <div className={styles.fieldIcon}>{renderIcon()}</div>}
               <input className={classes} {...input} placeholder={placeholder} type={type} />
               {meta.error && meta.touched && <span className={styles.errors}>{meta.error}</span>}
        </div>
      )}
    </Field>
  );
};


export default FormField;