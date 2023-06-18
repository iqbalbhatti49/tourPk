import React from 'react';
import styles from './DiscountCodes.module.css';
import FormField from '../FormField/FormField';
import { Form as FinalForm } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { OnChange } from 'react-final-form-listeners'
import {
   updateDiscountCode
} from '../../app/features/checkout/checkoutSlice'

export const DiscountCodes = () => {
   const valueCode = useSelector((state) => state.pricing.planCode);

   return (
      <div className={styles.container} >
         <p className={styles.heading}>Discount Code</p>
         <div className={styles.form}>
            {valueCode}
         </div>
      </div>
   );
};
