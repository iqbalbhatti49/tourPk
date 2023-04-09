import React from 'react'
import { flags } from '../../utils/FakeData'
import styles from './YesNoDropdown.module.css'

export default function Dropdown() {

  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(flags);
  return (
    <div className={styles.dropdown}>
      <select value={value} onChange={handleChange}>
        <option disabled default>Select</option>
        {flags.map((option) => (
          <option value={option.id} key={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}
