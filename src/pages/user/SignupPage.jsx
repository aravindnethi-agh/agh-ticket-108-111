import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { SignupContainer, Form, Input, Button, ErrorMessage } from './SignupPage.style'

const SignupPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // For this example, we'll just log the data
  };

  return (
    <SignupContainer>
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("username", { required: 'Username is required' })}
          placeholder="Username"
        />
        {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
        
        <Input
          {...register("password", { 
            required: 'Password is required', 
            minLength: { value: 8, message: 'Password must be at least 8 characters' } 
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        
        <Input
          {...register("aadhar", { 
            required: 'Aadhar Card Number is required',
            pattern: { 
              value: /^\d{12}$/, 
              message: 'Aadhar Card Number must be 12 digits' 
            }
          })}
          placeholder="Aadhar Card Number"
        />
        {errors.aadhar && <ErrorMessage>{errors.aadhar.message}</ErrorMessage>}
        
        <Input
          {...register("pan", { 
            required: 'PAN Card Number is required',
            pattern: { 
              value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 
              message: 'Invalid PAN Card Number' 
            }
          })}
          placeholder="PAN Card Number"
        />
        {errors.pan && <ErrorMessage>{errors.pan.message}</ErrorMessage>}
        
        <Button type="submit">Sign Up</Button>
      </Form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </SignupContainer>
  );
}

export default SignupPage;