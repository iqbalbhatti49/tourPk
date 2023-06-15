import React, { useState } from "react";
import { Form as FormFinal } from 'react-final-form'
import styles from "./Search.module.css";
import { FormField, Button } from "../../components/index";
import { required } from '../../utils/validations';
import Dropdown from "../../components/Dropdown/Dropdown";
const Search = () => {
       
        const searchParams = new URLSearchParams(location.search);
        const isEditMode = searchParams.get('edit') === '1';
        
        console.log(isEditMode);
    
        let data, serviceType;
        let updateInitialValue;
        const [service, setService] = useState(serviceType ? serviceType : "");
        if (location.state) {
            ({ data, serviceType } = location.state);
            updateInitialValue = data.Service;
            console.log(data);
        }
    
        console.log(serviceType);
        console.log(data);
    
        const handleChange = (selectedOption) => {
            setService(selectedOption);
        };
        
    
    
        const onSubmit = async (values, event) => {
            
            console.log(values);
    
    
        };

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1 className={styles.subHeading}>Search services on tourPk</h1>
        </div>
    <div className={styles.flex}>
        
            <FormFinal
                onSubmit={onSubmit}>
                {({ handleSubmit, values }) => (
                    <form onSubmit={handleSubmit} className={styles.serviceType}>
                        <div className={styles.searchInfo}>
                            <FormField
                                    name="key"
                                    label="Keyword"
                                    type="text"
                                    placeholder="Enter search keywords"
                                    validate={required}
                                    theme="light"
                                    value={values}
                                    onChange={handleChange}
                                    renderIcon={() => null}
                            />     
                            <Dropdown
                                name="serviceType"
                                label="Service Type"
                                optionsValues={[
                                    {
                                        "id": 1,
                                        "name": "Hotel",
                                    },
                                    {
                                        "id": 2,
                                        "name": "Restaurant",
                                    },
                                    {
                                        "id": 3,
                                        "name": "Tour Guide",
                                    },
                                    {
                                        "id": 4,
                                        "name": "Travel Agent",
                                    }
                                ]}
                                validate={required}
                                theme="light"
                                value={service}
                                placeholder="Choose Service Type"
                                renderIcon={() => null}
                                onChange={(selectedOption) => handleChange(selectedOption)}
                            />
                        </div>
                         <Button value="Serach Now" type="submit" btnType="submit" /> 
                    </form>
                )}
            </FormFinal>
    </div>
    </div>

  
    //   <ul>
    //     {searchResults.map((result) => (
    //       <li key={result.id}>
    //         <h3>{result.title}</h3>
    //         <img src={result.cover} />
    //         <p>{result.authors}</p>
    //       </li>
    //     ))}
    //   </ul>

  );
};

export default Search;
