import React, { useState } from 'react';
import { Field } from 'react-final-form';
import styles from './Dropdown.module.css';

export default function Dropdown({ optionsValues, placeholder, name, onChange }) {
  const [val,setVal] = useState(null);
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setVal(selectedValue);
        if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <div className={styles.dropdown}>
      <Field name={name}>
        {({ input }) => (
          <select value={input.value} onChange={handleChange}>
            {!val && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}
            {
              val && 
              <option>
                {val}
              </option>
            }
            {optionsValues.map((option) => (
              <option value={option.name} key={option.id} selected={input.value === option.name}>
                {option.name}
              </option>
            ))}
          </select>
        )}
      </Field>
    </div>
  );
}
