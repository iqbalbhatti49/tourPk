import React from 'react';
import { Field } from 'react-final-form';
import { types } from '../../utils/FakeData';
import styles from './UserTypeDropdown.module.css';

export default function UserTypeDropdown() {
  return (
    <div className={styles.dropdown}>
      <Field name="TouristOrServiceProvider">
        {({ input }) => (
          <select value={input.value} onChange={input.onChange}>
            <option disabled default>Please choose an option</option>
            {types.map((option) => (
              <option value={option.name} key={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        )}
      </Field>
    </div>
  );
}
