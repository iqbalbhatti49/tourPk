import React from 'react';
import styles from './FormButton.module.css';

const FormButton = (props) => {
  const { type, disabled, text, renderIcon } = props;
  return (
      <div className={renderIcon()? styles.btnContainer: styles.btnContainerSmall}>
      <button className={styles.btn} type={type} disabled={disabled}>
     { renderIcon()!=null && <div className={styles.icon}> {renderIcon()} </div> }
       <div className={renderIcon()? styles.iconBtnName : styles.btnName} >{text}</div> 
      </button>
      </div>
  );
};
export default FormButton;