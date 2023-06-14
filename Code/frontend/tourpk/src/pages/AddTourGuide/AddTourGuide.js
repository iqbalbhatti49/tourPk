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

const AddTourGuide = () => {
  const location = useLocation();
  const navigate = useNavigate();

  //Update Tour guide logic
  const searchParams = new URLSearchParams(location.search);
  const isEditMode = searchParams.get('edit') === '1';
  console.log(isEditMode);
  console.log(location.state);
  let values, tourGuide, obj;
  let updateInitialValue;
  if (isEditMode) {
    ({ values, obj } = location.state);
    updateInitialValue = obj;
    tourGuide = obj;
    console.log(tourGuide);
    console.log(values);
  }
  const addInitialValue =
  {
    "id": "",
    "experience": "",
    "gender": "",
    "primaryAreas": "",
    "otherAreas": "",
    "language": "",
    "perDayRate": null,
    "ServiceId": "",
    "UserId": ""
  }

  const initialValue = isEditMode ? updateInitialValue : addInitialValue;
  const userId = useSelector(state => state.user.id);

  const onSubmit = async (value) => {
    value.UserId = userId;
    const servic = isEditMode ? values : location.state.values;
    if (isEditMode)
      servic.serviceId = tourGuide.id;
    const tourGuideData = {
      service: servic,
      tourGuide: value
    };

    let tourGuideObj;
    console.log(tourGuideData);
    if (!isEditMode) {
      tourGuideObj = await axiosInstance.post("/tourguide/addtourguide", tourGuideData);
      swal("Tour Guide Service Added Successfully", "Success! The new Tour Guide Listing has been added successfully.", "success");
    }
    else {
      tourGuideObj = await axiosInstance.post("/tourguide/updatetourguide", tourGuideData);
      swal("Tour Guide Service Updated Successfully", "Success! Changes has been updated successfully.", "success");
    }

    const tourGuideAdded = tourGuideObj.data;
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
                    validate={required}
                    theme="light"
                    defaultValue={initialValue.perDayRate}
                    renderIcon={() => null}
                  />
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
