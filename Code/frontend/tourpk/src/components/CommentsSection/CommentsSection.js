import React from 'react';
import styles from './CommentsSection.module.css';
import FormField from '../../components/FormField/FormField'

const CommentsSection = () => {
  const onSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <div className={styles.formFields}>
          <FormField
            name="name"
            type="text"
            placeholder="Your name"
            label="Name"
          />
          <FormField
            name="comment"
            type="text"
            placeholder="Your comment"
            label="Comment"
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentsSection;
