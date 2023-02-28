import React, { useState } from 'react';
import styles from './ServiceSection.module.css'
import FormField from '../../components/FormField/FormField'

export default function ServiceSection(props) {
    const {index, validate } = props;   

    return (
        <div className={styles.sectionContainer}>
          <h3>Service {index + 1}</h3>
            <div >
                <FormField name={`serviceTitle${index}`} label="Title" type="text" placeholder="Select service to add in this package" validate={validate} theme="light" renderIcon={() => null} />
            </div>
            <div >
                <FormField name={`serviceDescription${index}`} label="Description" type="text" placeholder="Description of service added in this package" validate={validate} theme="light" renderIcon={() => null} />
            </div>
        </div>
    )
}
