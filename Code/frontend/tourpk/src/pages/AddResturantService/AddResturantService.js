import React, { useState } from 'react';
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import { Form as FormFinal } from 'react-final-form'
import FormField from '../../components/FormField/FormField'
import styles from './AddResturantService.module.css'
import Dropdown from '../../components/Dropdown/Dropdown'
import Button from '../../components/Button/Button';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import IconEmail from '../../components/IconEmail/IconEmail';
import IconPerson from '../../components/IconPerson/IconPerson';
import PhoneNumber from "../../components/PhoneNumber/PhoneNumber";

export default function AddResturant() {
    const required = value => (value ? undefined : 'Required') // ****** move
    const optionalField = value => (value ? 'undefined' : '') // ****** move ******************
    const showResult = values => {
        window.alert("submitted");
    }
    const [formData, setFormData] = useState({});
    const handleFormData = (fieldName, value) => {
        setFormData((prevData) => ({ [fieldName]: value, ...prevData }));
    };
    
    const [sections, setSections] = useState([1, 2]);
    const addSection = () => {    
         setSections([...sections, sections.length + 1]);
        };
    return (
      <>
        <NavBar />
        <div className={styles.container}>
          <div>
            <img src="../static/images/packagehead.png" alt="packages" />
          </div>
          <h1>Add Restaurant</h1>
          <div className={styles.formBorder}>
            <div className={styles.formContainer}>
              <FormFinal
                onSubmit={showResult}
                subscription={{ submitted: true }}
              >
                {({ handleSubmit, submitting, values }) => (
                  <form onSubmit={handleSubmit}>
                    <h2>Name and Description</h2>
                    <div className={styles.flexContainer}>
                      <div>
                        <label htmlFor="name" className={styles.label}>
                          Name
                        </label>
                        <FormField
                          name="PackageName"
                          type="text"
                          placeholder="Enter Restaurant Name"
                          validate={required}
                          theme="light"
                          handleChange={handleFormData}
                          renderIcon={() => null}
                        />
                      </div>
                    </div>
                    <label htmlFor="desc" className={styles.label}>
                      Description
                    </label>
                    <FormField
                      name="Description"
                      type="text"
                      placeholder="Enter additional description of restaurant and why it is amazing"
                      theme="light"
                      handleChange={handleFormData}
                      renderIcon={() => null}
                    />
                    {/* <Dropdown /> */}
                    <br />
                    <h2>Contact Information</h2>
                    <label htmlFor="desc" className={styles.label}>
                      Email
                    </label>
                    <FormField
                      name="Email"
                      type="email"
                      placeholder="abc@gmail.com"
                      validate={required}
                      theme="light"
                      handleChange={handleFormData}
                      renderIcon={() => null}
                    />
                    <label htmlFor="desc" className={styles.label}>
                      Contact No.
                    </label>
                    <PhoneNumber handleChange={setFormData} />
                    <label htmlFor="desc" className={styles.label}>
                      Website URL
                    </label>
                    <FormField
                      name="WebsiteURL"
                      type="text"
                      placeholder="Enter website URL"
                      validate={required}
                      theme="light"
                      handleChange={handleFormData}
                      renderIcon={() => null}
                    />
                    <br />
                    <h2>Address</h2>
                    <label htmlFor="desc" className={styles.label}>
                      City
                    </label>
                    <FormField
                      name="Email"
                      type="email"
                      placeholder="Enter city"
                      validate={required}
                      theme="light"
                      handleChange={handleFormData}
                      renderIcon={() => null}
                    />
                    <label htmlFor="desc" className={styles.label}>
                      State/Province
                    </label>
                    <FormField
                      name="Email"
                      type="email"
                      placeholder="Enter state/province"
                      validate={required}
                      theme="light"
                      handleChange={handleFormData}
                      renderIcon={() => null}
                    />
                    <label htmlFor="desc" className={styles.label}>
                      Country
                    </label>
                    <FormField
                      name="WebsiteURL"
                      type="text"
                      placeholder="Enter country"
                      validate={required}
                      theme="light"
                      handleChange={handleFormData}
                      renderIcon={() => null}
                    />
                    <label htmlFor="desc" className={styles.label}>
                      Street Address
                    </label>
                    <FormField
                      name="WebsiteURL"
                      type="text"
                      placeholder="Enter street address"
                      validate={required}
                      theme="light"
                      handleChange={handleFormData}
                      renderIcon={() => null}
                    />
                    <label htmlFor="desc" className={styles.label}>
                      Postal Code
                    </label>
                    <FormField
                      name="WebsiteURL"
                      type="text"
                      placeholder="Enter postal code"
                      validate={required}
                      theme="light"
                      handleChange={handleFormData}
                      renderIcon={() => null}
                    />
                    
                    <Button value="Upload File" type="secondary" onClick={() => this.refs.fileInput.click()}/>
                      {/* Upload File
                    </button> */}
                    <div className={styles.flexContainer}>
                      <div className={styles.addButtonContainer}>
                        <Button value="Add Restaurant" type="primary" />
                      </div>
                    </div>
                  </form>
                )}
              </FormFinal>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}