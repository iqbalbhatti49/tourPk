import React from 'react';
import classNames from 'classnames/bind';
import { Field } from 'react-final-form';
import styles from './FormField.module.css';
let classWrapper = classNames.bind(styles);

const FormField = (props) => {
  const { name, type, placeholder, validate, theme, renderIcon, label, labelClass } = props;
  let classes = classWrapper({ formField: type != 'checkbox', iconInput: renderIcon() != null, noIconInput: renderIcon() == null, light: theme == 'light' });
  let labelClassName = classWrapper({ noLabel: labelClass == 'noLabel', showLabel: labelClass != 'noLabel' });
  labelClassName = type == 'checkbox' ? classWrapper({ checkBoxLabel: true }) : labelClassName;
  let wrapperClass = classWrapper({ field: type != 'checkbox', checkBoxField: type == 'checkbox' });
  return (
    <Field
      name={name}
      validate={validate}
      //re-render the component whenever: field becomes active, field has been touched, field's error state or field value changes
      subscription={{
        value: true,
        active: true,
        error: true,
        touched: true
      }}
    >
      {({ input, meta }) => (
        <div className={wrapperClass}>
          {renderIcon() != null && <div className={styles.fieldIcon}>{renderIcon()}</div>}
          <label className={labelClassName}>{label}</label>
          <input className={classes} {...input} placeholder={placeholder} type={type} />
          {meta.error && meta.touched && <span className={props.theme === 'dark' ? styles.error : styles.errorRed}>{meta.error}</span>}
        </div>
      )}
    </Field>
  );
};
export default FormField;
