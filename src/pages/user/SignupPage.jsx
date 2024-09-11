import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FormContainer, FormLabel, Input, FileInput, ErrorMessage, SubmitButton, ConfirmationMessage, RequestOtpButton } from './SignupPage.style';

const SignupPage = () => {
  const { register, handleSubmit, reset, formState: { errors },getValues } = useForm();
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpRequested, setOtpRequested] = useState(false);

  const requestOtp = async (email) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/sendotp`, { email });
      if (response.status === 200) {
        setOtpRequested(true);
        setConfirmationMessage('OTP has been sent to your email.');
      } else {
        setConfirmationMessage('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error requesting OTP:', error);
      setConfirmationMessage('An error occurred while requesting OTP. Please try again.');
    }
  };

  const onSubmit = async (data) => {
    if (!otpRequested) {
      setConfirmationMessage('Please request an OTP first.');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('firstname', data.firstName);
      formData.append('lastname', data.lastName);
      formData.append('email', data.email);
      formData.append('countryCode', data.countryCode);
      formData.append('mobile', data.mobileNumber);
      formData.append('occupation', data.occupation);
      formData.append('otp', data.otp);
      formData.append('document', data.document[0]);

      const response = await axios.post(`${process.env.REACT_APP_API_URL}/agent/signup`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        setConfirmationMessage('User details have been shared successfully. Please wait for more details.');
        reset(); // Reset form fields
        setOtpRequested(false);
      } else {
        setConfirmationMessage('Failed to register user. Please try again.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setConfirmationMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>
          First Name:
          <Input type="text" {...register('firstName', { required: 'First name is required' })} />
          {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
        </FormLabel>
        <FormLabel>
          Last Name:
          <Input type="text" {...register('lastName', { required: 'Last name is required' })} />
          {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
        </FormLabel>
        <FormLabel>
          Email:
          <Input type="email" {...register('email', { 
            required: 'Email is required', 
            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } 
          })} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormLabel>
        
        <FormLabel>
          Country Code:
          <Input type="text" {...register('countryCode', { required: 'Country code is required' })} />
          {errors.countryCode && <ErrorMessage>{errors.countryCode.message}</ErrorMessage>}
        </FormLabel>
        <FormLabel>
          Mobile Number:
          <Input type="text" {...register('mobileNumber', { required: 'Mobile number is required' })} />
          {errors.mobileNumber && <ErrorMessage>{errors.mobileNumber.message}</ErrorMessage>}
        </FormLabel>
        <FormLabel>
          Occupation:
          <Input type="text" {...register('occupation', { required: 'Occupation is required' })} />
          {errors.occupation && <ErrorMessage>{errors.occupation.message}</ErrorMessage>}
        </FormLabel>
        <FormLabel>
          OTP:
          <Input type="text" {...register('otp', { required: 'OTP is required' })} />
          {errors.otp && <ErrorMessage>{errors.otp.message}</ErrorMessage>}
        </FormLabel>
        <FormLabel>
          Document:
          <FileInput type="file" {...register('document', { required: 'Document is required' })} />
          {errors.document && <ErrorMessage>{errors.document.message}</ErrorMessage>}
        </FormLabel>
        <RequestOtpButton type="button" onClick={() => requestOtp(getValues().email)}>
          Request OTP
        </RequestOtpButton>
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Sign Up'}
        </SubmitButton>
      </form>
      {confirmationMessage && <ConfirmationMessage>{confirmationMessage}</ConfirmationMessage>}
    </FormContainer>
  );
};

export default SignupPage;
