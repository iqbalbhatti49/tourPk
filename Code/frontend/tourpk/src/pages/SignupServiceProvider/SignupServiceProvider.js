import React, { useState } from 'react';
import FormButton  from '../../components/FormButton/FormButton';
import FormField from '../../components/FormField/FormField';
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
      <FormField name="name" label="Name" type="text" required />
      <FormField name="email" label="Email" type="email" required />
      <FormField name="password" label="Password" type="password" required />
      <FormField name="storename" label="Store Name" type="text" required />
      <FormButton isSubmitting={isSubmitting} serverError={serverError} />
    </Form>
  );
}

export default SignupServiceProvider;
