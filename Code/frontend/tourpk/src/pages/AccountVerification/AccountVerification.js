import React, { useState } from 'react';
import { Form as FinalForm } from 'react-final-form';
import axiosInstance from '../../utils/Api';
import { FormField, Button } from '../../components';
import styles from './AccountVerification.module.css';

function AccountVerification() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');
  const [verificationStarted, setVerificationStarted] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpCodeChange = (e) => {
    setOtpCode(e.target.value);
  };

  const handleVerificationSubmit = async (values) => {
    try {
      setIsLoading(true); // Show loading symbol
      const response = await axiosInstance.post('/verify/start-verification', {
        phoneNumber: values.phoneNumber,
      });

      setVerificationMessage(response.data.message);
      setVerificationStarted(true);
      setVerificationStatus(response.status); // Set the status code in state
      setIsLoading(false); // Hide loading symbol
    } catch (error) {
      console.error('Error initiating verification:', error);
      setVerificationMessage('Failed to initiate verification');
      setVerificationStatus(error.response.status); // Set the status code in state
      setIsLoading(false); // Hide loading symbol
    }
  };

  const handleOtpSubmit = async (values) => {
    try {
      setIsLoading(true); // Show loading symbol
      const response = await axiosInstance.post('/verify/check-verification', {
        phoneNumber: values.phoneNumber,
        verificationCode: values.otpCode,
      });

      if (response.data.success) {
        setVerificationMessage('Verification code is valid');
        setVerificationStatus(response.status); // Set the status code in state
      } else {
        setVerificationMessage('Verification code is invalid or expired');
        setVerificationStatus(response.status); // Set the status code in state
      }
      setIsLoading(false); // Hide loading symbol
    } catch (error) {
      console.error('Error checking verification code:', error);
      setVerificationMessage('Failed to check verification code');
      setVerificationStatus(error.response.status); // Set the status code in state
      setIsLoading(false); // Hide loading symbol
    }
  };

  const verificationStatusClass = verificationStatus == 200 
    ? styles.success // CSS class for success message
    : styles.error; // CSS class for error message

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <FinalForm
          onSubmit={verificationStarted ? handleOtpSubmit : handleVerificationSubmit}
          render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
              {!verificationStarted ? (
                <div>
                  <h1 className={styles.heading}>Add Phone Number</h1>
                  <FormField
                    name="phoneNumber"
                    label="Phone Number"
                    type="text"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    renderIcon={() => null}
                    labelClass="showLabel"
                    theme="light"
                  />
                </div>
              ) : (
                <div>
                  <h1 className={styles.heading}>OTP Code Verification</h1>
                  <FormField
                    name="otpCode"
                    label="OTP Code"
                    type="text"
                    labelClass="showLabel"
                    theme="light"
                    placeholder="Enter OTP code"
                    value={otpCode}
                    onChange={handleOtpCodeChange}
                    renderIcon={() => null}
                  />
                </div>
              )}
              <Button type="submit" btnType="primary" value="Verify" width={250} disabled={isLoading} /> {/* Disable the button when loading */}
            </form>
          )}
        />
        {isLoading && <p>Loading...</p>} 
        <p className={`${styles.verificationMessage} ${verificationStatusClass}`}>
          {verificationMessage}
        </p>
      </div>
    </div>
  );
}

export default AccountVerification;
