import React from 'react'
import serviceCategories from '../../serviceCategories'

export default function Dropdown() {

 const [value, setValue] = React.useState('');
 const handleChange = (event) => {
   setValue(event.target.value);
 };

 return (
   <div>
       <select value={value} onChange={handleChange}>
         <option disabled default>Select</option>
         {serviceCategories.map((option) => (
           <option value={option} key={option}>{option}</option>
         ))}
       </select>
   </div>
 );
}
