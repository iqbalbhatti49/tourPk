import React from 'react';
import classNames from 'classnames/bind';
import { Field } from 'react-final-form';
import styles from './FormField.module.css';
let classWrapper = classNames.bind(styles);

const FormField = (props) => {
  const { name, type, placeholder, validate, theme, renderIcon, label, labelClass, defaultValue } = props;
  let classes = classWrapper({ formField: type !== 'checkbox', iconInput: renderIcon() !== null, noIconInput: renderIcon() === null, light: theme === 'light' });
  let labelClassName = classWrapper({ noLabel: labelClass === 'noLabel', showLabel: labelClass !== 'noLabel' });
  labelClassName = type === 'checkbox' ? classWrapper({ checkBoxLabel: true }) : labelClassName;
  let wrapperClass = classWrapper({ field: type !== 'checkbox', checkBoxField: type === 'checkbox' });

  const handleCheckboxChange = (event, input) => {
    input.onChange(event.target.checked);
  };

  return (
    <Field
      name={name}
      validate={validate}
      initialValue={defaultValue}
      subscription={{
        value: true,
        active: true,
        error: true,
        touched: true
      }}
    >
      {({ input, meta }) => (
        <div className={wrapperClass}>
          {type === 'checkbox' ? (
            <label className={labelClassName} id={styles.checkBoxText}>
              <input className={styles.checkboxInput}  {...input} type="checkbox" checked={input.value} onChange={(event) => handleCheckboxChange(event, input)} value="rfgvbh" />
              <span className={styles.checkboxCustom}></span>
              {label}
              {meta.error && meta.touched && <span id={styles.tooltiptext} className={styles.error}>{meta.error}</span>}
            </label>
          ) : (
            <>
              {renderIcon() !== null && (
                <div className={styles.fieldIcon} id={styles.tooltip}>
                  {renderIcon()}
                  {meta.error && meta.touched && <span id={styles.tooltiptext}>{meta.error}</span>}
                </div>
              )}
              <label className={labelClassName} id={styles.tooltip}>
                {label}
                {meta.error && meta.touched && <span id={styles.tooltiptext} className={styles.error}>{meta.error}</span>}
              </label>
              <input className={classes} id={`${meta.error && meta.touched ? styles.error : ''}`} {...input} placeholder={placeholder} type={type} />
            </>
          )}
        </div>
      )}
    </Field>
  );
};

export default FormField;
