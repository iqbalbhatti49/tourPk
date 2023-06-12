import React from "react";
import styles from "./AddTourGuide.module.css";
import { Form as FormFinal } from "react-final-form";
import { FormField, Button, Dropdown } from "../../components/index";
import { useLocation } from "react-router";
import { mustBeNumber, required } from "../../utils/validations";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/Api";
import { useSelector } from "react-redux";
import 'url-search-params-polyfill';

const AddTourGuide = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const isEditMode = searchParams.get('edit') === '1';
  console.log(isEditMode);
  let values, tourGuide;
  let updateInitialValue;
  if (isEditMode) {
    ({ values, tourGuide } = location.state);
    updateInitialValue = tourGuide;
    console.log("hi")
  }

  console.log(location.state);

  const addInitialValue =
  {
    "id": "",
    "experience": "",
    "gender": "",
    "primaryAreas": "",
    "otherAreas": "",
    "language": "",
    "perDayRate": "",
    "ServiceId": "",
    "UserId": ""
  }

  const initialValue = isEditMode ? updateInitialValue : addInitialValue;

  const userId = useSelector(state => state.user.id);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  const onSubmit = async (values) => {
    values.UserId = userId;
    const servic = isEditMode ? location.state.tourGuide : location.state;
    const tourGuideData = {
      service: servic,
      tourGuide: values
    };

    const tourGuideObj = await axiosInstance.post("/tourguide/addtourguide", tourGuideData);
    const tourGuideAdded = tourGuideObj.data;
    swal("Tour Guide Service Added Successfully", "Success! The new Tour Guide Listing has been added successfully.", "success");
    // navigate(`/tourGuideListing/${tourGuideAdded.serviceObj.name}`, { tourGuideAdded });
    navigate(`/tourGuideListing/${tourGuideAdded}`, { state: tourGuideAdded });
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
                    defaultValue={initialValue.experience}
                    renderIcon={() => null}
                  />
                  <FormField
                    name="gender"
                    label="Gender"
                    type="text"
                    placeholder="Enter your gender"
                    validate={required}
                    theme="light"
                    defaultValue={initialValue.gender}
                    renderIcon={() => null}
                  />
                  <FormField
                    name="primaryAreas"
                    label="Primary Guiding Area"
                    type="text"
                    placeholder="Enter your primary guiding area"
                    validate={required}
                    theme="light"
                    defaultValue={initialValue.primaryAreas}
                    renderIcon={() => null}
                  />
                  <FormField
                    name="otherAreas"
                    label="Other Areas"
                    type="text"
                    placeholder="Enter other guiding areas"
                    theme="light"
                    defaultValue={initialValue.otherAreas}
                    renderIcon={() => null}
                  />
                  <FormField
                    name="language"
                    label="Languages"
                    type="text"
                    placeholder="Enter languages you speak"
                    validate={required}
                    theme="light"
                    defaultValue={initialValue.language}
                    renderIcon={() => null}
                  />
                  <h2>Pricing Information</h2>
                  <FormField
                    name="perDayRate"
                    label="Price Per Day (Rs.)"
                    type="number"
                    placeholder="$5"
                    validate={mustBeNumber}
                    theme="light"
                    defaultValue={initialValue.perDayRate}
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
