import React from 'react';
import styles from './ShippingMethod.module.css';
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import { IconShipping, IconShipping1 } from '../IconShipping/IconShipping';

export const ShippingMethod = () => {
   return (
      <div className={styles.container}>
         <p className={styles.heading}>Shipping Method</p>
         <RadioGroup
            options={[
               { value: 'option1', price: '$2.90', label: 'USPS With Tracking (4-10 days)', icon: <IconShipping /> },
               { value: 'option2', price: '$9.00', label: 'USPS Without Tracking (9-13 days)', icon: <IconShipping1 /> },
            ]}
            onChange={(value) => console.log(value)}
         />
      </div>
   );
};
