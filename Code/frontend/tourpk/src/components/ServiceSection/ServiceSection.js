import React, { useState } from 'react';
import styles from './ServiceSection.module.css'
import FormField from '../../components/FormField/FormField'

export default function ServiceSection(props) {
    const { key, index, validate, handleFormData } = props;   
    
    const [sections, setSections] = useState([1, 2]);
    const addSection = () => {    
         setSections([...sections, sections.length + 1]);
        };

    return (
        <div className={styles.sectionContainer}>
          <h3>Service {index + 1}</h3>
            <div >
                <label htmlFor="serviceTitle" className={styles.label}>Service Title</label>
                <FormField name="serviceTitle" type="text" placeholder="Select service to add in this package" validate={validate} theme="light" handleChange={handleFormData} renderIcon={() => null} />
            </div>
            <div >
                <label htmlFor="servicedescription" className={styles.label}>Service Description</label>
                <FormField name="servicedescription" type="text" placeholder="Description of service added in this package" validate={validate} theme="light" handleChange={handleFormData} renderIcon={() => null} />
            </div>
        </div>
    )
}
