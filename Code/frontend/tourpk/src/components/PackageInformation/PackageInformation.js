import React from 'react'
import styles from '../PackageInformation/PackageInformation.module.css'
import FormField from '../../components/FormField/FormField'
import Dropdown from '../../components/Dropdown/Dropdown'
import { validateAlpha ,mustBeNumber} from '../../validations'

export default function PackageInformation(props) {
    const {values} = props;
    return (
        <div>
            <h2>Name and Description</h2>
            <div className={styles.flexContainer}>
                <div>
                    <FormField name="PackageName" label="Package Name" type="text" placeholder="Package Name" validate={validateAlpha} theme="light" renderIcon={() => null} />
                </div>
                <div>
                    <FormField name="Price" label="Price" type="number" placeholder="Price of package" validate={mustBeNumber} theme="light" renderIcon={() => null} />
                </div>
            </div>
            <FormField name="Description" label="Description" type="text" placeholder="Additional description of package and why its amazing" validate={validateAlpha}  theme="light" renderIcon={() => null} />
            <FormField name="Validity" label="Validity" placeholder="No of days for this offer lasts eg. 25 days" validate={mustBeNumber} theme="light" renderIcon={() => null} />
            {/* <Dropdown /> */}
        </div>
    )
}