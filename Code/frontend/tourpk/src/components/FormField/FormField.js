import React from 'react';
import classNames from 'classnames/bind';
import { Field } from 'react-final-form';
import styles from './FormField.module.css';
let classWrapper = classNames.bind(styles);

const FormField = (props) => {
  const { name, type, placeholder, validate, theme, renderIcon, handleChange, label, labelClass } = props;
  let classes = classWrapper({ formField: true, iconInput: renderIcon() != null, noIconInput: renderIcon() == null, light: theme == 'light' });
  let labelClassName = classWrapper({ noLabel: labelClass == 'noLabel', showLabel: labelClass != 'noLabel' });

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
               <input className={classes} {...input} placeholder={placeholder} type={type} onChange={e => handleChange(name, e.target.value)} />
               {meta.error && meta.touched && <span className={styles.errors}>{meta.error}</span>}
        </div>
      )}
    </Field>
  );
};
export default FormField;
