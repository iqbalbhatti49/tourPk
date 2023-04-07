import React from "react";
import { Form as FormFinal } from "react-final-form";
import styles from "./HelpAndSupport.module.css";
import { Button, NavBar, Footer, FormField, FAQDropdown, UserTypeDropdown, UploadMediaButton } from "../../components/index";

const HelpAndSupport = () => {
  const required = (value) => (value ? undefined : "Required"); // ****** move
  const onSubmit = (values, form) => {
    console.log("Form submitted with values:", values);
    form.reset();
  };

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Do You Have Questions?</h1>
          <p className={styles.subHeading}>We have answers (well, most of the times!)</p>
          <p className={styles.description}>
            Below you'll find answers to the most common questions you may have about tourpk.
            Also, please feel free to check out our social media pages. If you can't find the
            answers to the questions you are looking for, please contact us through the form
            provided below!
          </p>
        </div>

        <div className={styles.faqs}>
          <h2>Frequently Asked Questions</h2>
          <FAQDropdown
            question="1. Lorem ipsum dolor sit amet, consectetur?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat."
          />
          <FAQDropdown
            question="2. Lorem ipsum dolor sit amet, consectetur?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat."
          />
          <FAQDropdown
            question="3. Lorem ipsum dolor sit amet, consectetur?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <FAQDropdown
            question="4. Lorem ipsum dolor sit amet, consectetur?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat."
          />
          <FAQDropdown
            question="5. Lorem ipsum dolor sit amet, consectetur?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat."
          />
        </div>

      </div>



      <div className={styles.formContainer}></div>
      <div className={styles.tableContainer}>
        <h2>If you still have any questions, contact us by filling the form below:</h2>
        <div className={styles.quesForm}>
          <FormFinal
            onSubmit={onSubmit}
            subscription={{
              submitted: true,
            }}
          >
            {({ handleSubmit, submitting, values }) => (
              <form onSubmit={handleSubmit}>
                <h3>Are you a tourist or service provider?</h3>
                <UserTypeDropdown
                  name="TouristOrServiceProvider"
                  label="Tourist or Service Provider"
                  options={[
                    { value: "Tourist", label: "Tourist" },
                    { value: "Service Provider", label: "Service Provider" },
                  ]}
                  validate={required}
                  theme="light"
                  value={values}
                  renderIcon={() => null}
                />


                <div className={styles.formFields}>
                  <FormField
                    name="generalField"
                    label="Username"
                    type="text"
                    placeholder="Enter your username"
                    validate={required}
                    theme="light"
                    value={values}
                    renderIcon={() => null}
                  />
                  <FormField
                    name="generalField"
                    label="Email"
                    type="email"
                    placeholder="abc@email.com"
                    validate={required}
                    theme="light"
                    value={values}
                    renderIcon={() => null}
                  />
                  <FormField
                    name="generalField"
                    label="Question Title"
                    type="text"
                    placeholder="Enter your question title"
                    validate={required}
                    theme="light"
                    value={values}
                    renderIcon={() => null}
                  />
                  <FormField
                    name="generalField"
                    label="Question Description"
                    type="paragraph"
                    placeholder="Describe your question"
                    validate={required}
                    theme="light"
                    value={values}
                    renderIcon={() => null}
                  />
                </div>
                <UploadMediaButton />
                <Button value="Submit" />
              </form>
            )}
          </FormFinal>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default HelpAndSupport;
