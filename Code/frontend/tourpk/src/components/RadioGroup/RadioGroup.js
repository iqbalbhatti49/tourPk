import React, { useState } from 'react';
import styles from "./RadioGroup.module.css";
import classNames from 'classnames/bind';
import {
   useDispatch, useSelector
} from 'react-redux';
import { updatePaymentMethod } from '../../app/features/checkout/checkoutSlice';
let classWrapper = classNames.bind(styles);

const RadioGroup = ({ options, onChange, inline }) => {
   const dispatch = useDispatch();
   const paymentMethod = useSelector((state) => state.checkout.paymentMethod);

   const handleOptionChange = (value) => {
      dispatch(updatePaymentMethod(value));
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
                  checked={paymentMethod === option.value}
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




