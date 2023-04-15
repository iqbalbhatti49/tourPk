import React from 'react'
import { types } from '../../utils/FakeData'
import styles from './UserTypeDropdown.module.css'

export default function Dropdown() {

  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(types);
  return (
    <div className={styles.dropdown}>
      <select value={value} onChange={handleChange}>
        <option disabled default>Select</option>
        {types.map((option) => (
          <option value={option.id} key={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}
