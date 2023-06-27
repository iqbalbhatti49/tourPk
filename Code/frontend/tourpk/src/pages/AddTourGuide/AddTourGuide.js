import styles from "./AddTourGuide.module.css";
import {
  useState, Dropdown, required, useNavigate, FormField,
  React, Button, useSelector, FinalForm, useLocation, axiosInstance, swal
}
  from "../../components/index";

const AddTourGuide = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const isEditMode = searchParams.get('edit') === '1';
  let values, tourGuide, obj;
  let updateInitialValue;
  if (isEditMode) {
    ({ values, obj } = location.state);
    updateInitialValue = obj;
    tourGuide = obj;
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
  const [gender, setGender] = useState("Male");

  const handleChange = (selectedOption) => {
    setGender(selectedOption);
  };
  const onSubmit = async (value) => {
    value.UserId = userId;
    value.gender = gender;
    const servic = isEditMode ? values : location.state.values;
    if (isEditMode)
      servic.serviceId = tourGuide.id;
    const tourGuideData = {
      service: servic,
      tourGuide: value
    };

    let tourGuideObj;
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
            <FinalForm onSubmit={onSubmit}>
              {({ handleSubmit, values }) => (
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                  <h2 className={styles.subHeading}>Guiding Information</h2>
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
                  <Dropdown
                    name="gender"
                    label="Gender"
                    optionsValues={[
                      {
                        "id": 1,
                        "name": "Female",
                      },
                      {
                        "id": 2,
                        "name": "Male",
                      }
                    ]}
                    validate={required}
                    theme="light"
                    value={gender}
                    placeholder="Choose Gender"
                    renderIcon={() => null}
                    onChange={(selectedOption) => handleChange(selectedOption)}
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
                  <h2 className={styles.subHeading}>Pricing Information</h2>
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
            </FinalForm>
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
