import React from 'react'
import {services} from '../../serviceCategories'

export default function Dropdown() {

 const [value, setValue] = React.useState('');
 const handleChange = (event) => {
   setValue(event.target.value);
 };
 console.log(services);
 return (
   <div>
       <select value={value} onChange={handleChange}>
         <option disabled default>Select</option>
         {services.map((option) => (
           <option value={option.id} key={option.id}>{option.name}</option>
         ))}
       </select>
   </div>
 );
}
