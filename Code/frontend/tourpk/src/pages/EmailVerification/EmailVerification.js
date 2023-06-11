import React, { useState } from 'react';
import { Form as FinalForm } from 'react-final-form';
import axiosInstance from '../../utils/Api';
import { FormField, Button } from '../../components';
import styles from './EmailVerification.module.css';
import { updateEmailVerification } from "../../app/features/user/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function EmailVerification() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [otpCode, setOtpCode] = useState('');
  const [verificationStarted, setVerificationStarted] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state
  const userId = useSelector((state) => state.user.id)

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpCodeChange = (e) => {
    setOtpCode(e.target.value);
  };

  const handleVerificationSubmit = async (values) => {
    try {
      setIsLoading(true); // Show loading symbol
      const response = await axiosInstance.post('/verifyEmail/start-verification', {
        email: values.email,
      });
      swal({
          title: 'Verification Started!',
          text: response.data.message,
          icon: 'info',
          buttons: {
            confirm: true,
          },
      })
      setVerificationStarted(true);
      setEmail(values.email)
      setVerificationStatus(response.status); // Set the status code in state
      setIsLoading(false); // Hide loading symbol
    } catch (error) {
      console.error('Error initiating verification:', error);
        swal({
          title: 'Verification Failed!',
          text: 'Failed to initiate verification',
          icon: 'warning',
          buttons: {
            confirm: true,
          },
      })
      setVerificationStatus(error.response.status); // Set the status code in state
      setIsLoading(false); // Hide loading 
    }
  };

  const handleOtpSubmit = async (values) => {
    try {
      setIsLoading(true); // Show loading symbol
      const response = await axiosInstance.post('/verifyEmail/check-verification', {
        email: values.email,
        verificationCode: values.otpCode,
      });

      if (response.data.success) {
        swal({
            title: 'Code Verified!',
            text: 'Your Email is successfully verified.',
            icon: 'success',
            buttons: {
              confirm: true,
            },
        })
        setVerificationStatus(response.status); // Set the status code in state
        dispatch(updateEmailVerification({userId,email}));
        navigate("/serviceProvider")
      } else {
        swal({
            title: 'Not Verified!',
            text: 'Verification code is invalid or expired.',
            icon: 'error',
            buttons: {
              confirm: true,
            },
        })
        setVerificationStatus(response.status); // Set the status code in state
      }
      setIsLoading(false); // Hide loading symbol
    } catch (error) {
      swal({
          title: 'Not Verified!',
          text: 'Failed to check verification code.',
          icon: 'error',
          buttons: {
            confirm: true,
          },
      })
      setVerificationStatus(error.response.status); // Set the status code in state
      setIsLoading(false); // Hide loading symbol
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <FinalForm
          onSubmit={verificationStarted ? handleOtpSubmit : handleVerificationSubmit}
          render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
              {!verificationStarted ? (
                <div>
                  <h1 className={styles.heading}>Add Email</h1>
                  <FormField
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleEmailChange}
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
      </div>
    </div>
  );
}

export default EmailVerification;
