import React, { useState } from 'react';
import styles from './ChooseButton.module.css';


const ChooseButton = ({ text}) => {

  return (
    <button className={styles.buttonSize}>
      {text}
    </button>
    
  );
};

export default ChooseButton;