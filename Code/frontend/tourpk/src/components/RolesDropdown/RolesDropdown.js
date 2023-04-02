import React from 'react'
import {roles} from '../../FakeData'
import styles from './RolesDropdown.module.css'

export default function Dropdown() {

 const [value, setValue] = React.useState('');
 const handleChange = (event) => {
   setValue(event.target.value);
 };
 console.log(roles);
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
