import React from 'react';
import styles from './InfoBox.module.css';
import { getIconComponent } from '../../utils/iconSelector.js';

export default function InfoBox(props) {
  const iconComponent = getIconComponent(props.text);
  return (
    <div className={styles.infoBox}>
      <div className={styles.infoIcon}>
        {iconComponent}
      </div>
      <div className={styles.infoContent}>
        <p className={styles.infoText}>{props.text}</p>
      </div>
    </div>
  );
}
