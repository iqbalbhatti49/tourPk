import React from "react";
import styles from "./AddTourGuide.module.css";
import { Form as FormFinal } from "react-final-form";
import { FormField, Button, Dropdown } from "../../components/index";

const AddTourGuide = () => {
  const required = (value) => (value ? undefined : "Required");
  const onSubmit = (values) => {
    console.log("Form submitted with values:", values);
    // Perform any necessary actions with the form values
  };
  const handleInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.heading}>So, You Are A Tour Guide?</h1>
                <p className={styles.subHeading}>Offer your services through TourPK</p>
                <p className={styles.description}>If you can't find the answers to the questions you are looking for, please contact us through the form
            provided below! If you can't find the answers to the questions you are looking for, please contact us through the form
            provided below!</p>
            </div>
            <div className={styles.content}>
                <div className={styles.formFields}>
                    <FormFinal onSubmit={onSubmit}>
                    {({ handleSubmit, values }) => (
                        <form onSubmit={handleSubmit} className={styles.formContainer}>
                        <h2>Guiding Information</h2>
                        <FormField
                            name="experience"
                            label="Experience"
                            type="text"
                            placeholder="Enter your experience"
                            validate={required}
                            theme="light"
                            renderIcon={() => null}
                        />
                        <FormField
                            name="gender"
                            label="Gender"
                            type="text"
                            placeholder="Enter your gender"
                            validate={required}
                            theme="light"
                            renderIcon={() => null}
                        />
                        <FormField
                            name="primaryGuidingArea"
                            label="Primary Guiding Area"
                            type="text"
                            placeholder="Enter your primary guiding area"
                            validate={required}
                            theme="light"
                            renderIcon={() => null}
                        />
                        <FormField
                            name="otherAreas"
                            label="Other Areas"
                            type="text"
                            placeholder="Enter other guiding areas"
                            validate={required}
                            theme="light"
                            renderIcon={() => null}
                        />
                        <FormField
                            name="languages"
                            label="Languages"
                            type="text"
                            placeholder="Enter languages you speak"
                            validate={required}
                            theme="light"
                            renderIcon={() => null}
                        />
                        <div className={styles.uploadMedia}>
                            <label htmlFor="media-upload">Upload Media:&emsp;&emsp;</label>
                            <input
                            id="media-upload"
                            type="file"
                            accept="image/*"
                            className={styles.blogImg}
                            name="file"
                            onChange={handleInputChange}
                            />
                        </div>
                        <h2>Pricing Information</h2>
                        <FormField
                        name="price"
                        label="Price Per Hour"
                        type="text"
                        placeholder="$5"
                        validate={required}
                        theme="light"
                        renderIcon={() => null}
                      />
{/*                       
                      <h2>Account Information</h2>
                      <Dropdown
                        name="accountType"
                        label="Account Type"
                        optionsValues = {[{
                            "id": 1,
                            "name": "JazzCash",
                         },
                         {
                            "id": 2,
                            "name": "EaisaPaisa",
                         },
                         {
                            "id": 2,
                            "name": "SadaPay",
                         },
                         {
                            "id": 2,
                            "name": "NayaPay",
                         }]}
                        validate={required}
                        theme="light"
                        placeholder="Please choose an Account Type"
                        value={values}
                        renderIcon={() => null}
                      />
                          <FormField
                            name="accountHolderName"
                            label="Account Holder Name"
                            type="text"
                            placeholder="Enter the account holder name"
                            validate={required}
                            theme="light"
                            renderIcon={() => null}
                          />
                          <FormField
                            name="accountNumber"
                            label="Account Number"
                            type="text"
                            placeholder="Enter the account number"
                            validate={required}
                            theme="light"
                            renderIcon={() => null}
                          /> */}
                        <div className={styles.btnDiv}>
                        <Button
                            id={styles.signupBtn}
                            value={"Submit"}
                            type="primary"
                            btnType="submit"
                            width={250}
                        />
                        </div>
                        </form>
                    )}
                    </FormFinal>
                </div>
                <div className={styles.imageContainer}>
                    <img src="../static/images/AddTourGuide.png" alt="FAQs" />
                </div>
            </div>
        </div>
    </>
  );
};

export default AddTourGuide;
