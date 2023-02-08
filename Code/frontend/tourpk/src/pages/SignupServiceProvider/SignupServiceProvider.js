import React, { useState } from 'react';
import { Form, Field, FormButtons } from './components';
import { validateForm } from './validation';

const SignupServiceProvider = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const handleSubmit = async values => {
    try {
      setIsSubmitting(true);
      setServerError(null);
      // Send the form data to the server for signup
      // If successful, redirect the user to the dashboard
    } catch (error) {
      setServerError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} validate={validateForm}>
      <Field name="name" label="Name" type="text" required />
      <Field name="email" label="Email" type="email" required />
      <Field name="password" label="Password" type="password" required />
      <Field name="storename" label="Store Name" type="text" required />
      <FormButtons isSubmitting={isSubmitting} serverError={serverError} />
    </Form>
  );
}

export default SignupServiceProvider;
