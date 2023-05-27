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
        <div className={wrapperClass} >
          {renderIcon() != null && <div className={styles.fieldIcon} id={styles.tooltip}>{renderIcon()}
            {meta.error && meta.touched && <span id={styles.tooltiptext} >{meta.error}</span>}
          </div>}
          <label className={labelClassName} id={styles.tooltip}>{label}
            {meta.error && meta.touched && <span id={styles.tooltiptext} className={styles.error}>{meta.error}</span>}
          </label>
          <input className={classes} id={`${meta.error && meta.touched ? styles.error : ''}`} {...input} placeholder={placeholder} type={type} />
        </div>
      )}
    </Field>
  );
};
export default FormField;
