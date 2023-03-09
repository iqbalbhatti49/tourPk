import React, { useState } from 'react';
import styles from "./RadioGroup.module.css";
import classNames from 'classnames/bind';
let classWrapper = classNames.bind(styles);

const RadioGroup = ({ options, onChange, inline }) => {
   const [selectedValue, setSelectedValue] = useState('');
   const handleOptionChange = (value) => {
      setSelectedValue(value);
      onChange(value);
   };
   let wrapperClass = classWrapper({ radioGroup: inline != true, inline: inline });

   return (
      <div className={wrapperClass}>
         {options.map((option) => (
            <label key={option.value}>
               <input
                  type="radio"
                  name="radio-group"
                  value={option.value}
                  checked={selectedValue === option.value}
                  onChange={() => handleOptionChange(option.value)}
                  className={styles.radio}
               />
               <div className={styles.tag}>
                  <div className={styles.tagContent}>
                     <p className={styles.price}>{option.price}</p>
                     <p>{option.label}</p>
                  </div>
                  {option.icon}
               </div>
            </label>
         ))}
      </div>
   );
};

export default RadioGroup;




