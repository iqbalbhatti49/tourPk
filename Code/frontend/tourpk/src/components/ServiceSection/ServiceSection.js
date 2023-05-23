import React, { useState } from 'react';
import styles from './ServiceSection.module.css'
import FormField from '../../components/FormField/FormField'
import { IconRemove } from '../../components/index'

export default function ServiceSection(props) {
    const { index, validate, sections, setSections, showRemove } = props;
    const removeSection = (e) => {
        e.preventDefault();
        setSections(sections.slice(0, -1));
    };

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.headingContainer}>
                <h3>Service {index + 1}</h3>
                {showRemove == 1 && sections.length == index + 1 ? <a href="#" onClick={removeSection}> <IconRemove /> </a> : null}
            </div>
            <div >
                <FormField name={`serviceTitle${index}`} label="Title" type="text" placeholder="Select service to add in this package" validate={validate} theme="light" renderIcon={() => null} />
            </div>
            <div >
                <FormField name={`serviceDescription${index}`} label="Description" type="text" placeholder="Description of service added in this package" validate={validate} theme="light" renderIcon={() => null} />
            </div>
        </div>
    )
}
