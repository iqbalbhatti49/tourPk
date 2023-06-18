import React from 'react'
import { roles } from '../../utils/FakeData'
import styles from './RolesDropdown.module.css'

export default function Dropdown() {

  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.dropdown}>
      <select value={value} onChange={handleChange}>
        <option disabled default>Select</option>
        {roles.map((option) => (
          <option value={option.id} key={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}
