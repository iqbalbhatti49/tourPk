import React, { useState } from 'react';
import styles from './ServiceSection.module.css'
import FormField from '../../components/FormField/FormField'

export default function ServiceSection(props) {
    const {index, validate } = props;   
    
    const [sections, setSections] = useState([1, 2]);
    const addSection = () => {    
         setSections([...sections, sections.length + 1]);
        };

    return (
        <div className={styles.sectionContainer}>
          <h3>Service {index + 1}</h3>
            <div >
                <FormField name="serviceTitle" label="Service Title" type="text" placeholder="Select service to add in this package" validate={validate} theme="light" renderIcon={() => null} />
            </div>
            <div >
                <FormField name="servicedescription" label="Service Description" type="text" placeholder="Description of service added in this package" validate={validate} theme="light" renderIcon={() => null} />
            </div>
        </div>
    )
}
