import React, { useState, useCallback } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import { Container, Card, CardTitle, CardContent, ErrorMessage, LoadingSpinner, InputWrapper, Button } from './PaymentManagement.style';

const PaymentManagement = () => {
  const { register, handleSubmit, reset } = useForm(); // UseForm hook for input handling and form reset
  const [commissionDetails, setCommissionDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCommissionDetails = useCallback(async (data) => {
    const { userId, courseId } = data; // Destructure data from the form
    setLoading(true);
    try {
      const token = Cookies.get('admin-token'); // Get token from Cookies

      const response = await axios.get(`${process.env.REACT_APP_API_URL}/affiliates/commission/${userId}/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Use token from Cookies
        },
      });

      if (response.data.success) {
        setCommissionDetails(response.data.message);
        reset(); // Reset the form inputs on success
      } else {
        setError('Failed to fetch commission details.');
      }
    } catch (err) {
      setError('An error occurred while fetching the commission details.');
    } finally {
      setLoading(false);
    }
  }, [reset]);

  const onSubmit = (data) => {
    setError('');
    setCommissionDetails(null);
    fetchCommissionDetails(data); // Pass form data to fetchCommissionDetails
  };

  return (
    <Container>
      <h1>Commission Management</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <input
            type="text"
            placeholder="User ID"
            {...register('userId', { required: true })}
          />
          <input
            type="text"
            placeholder="Course ID"
            {...register('courseId', { required: true })}
          />
          <Button type="submit">Fetch Commission</Button>
        </InputWrapper>
      </form>

      {loading && <LoadingSpinner>Loading...</LoadingSpinner>}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {commissionDetails && (
        <Card>
          <CardTitle>Commission Details</CardTitle>
          <CardContent>
            {commissionDetails}
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default PaymentManagement;
