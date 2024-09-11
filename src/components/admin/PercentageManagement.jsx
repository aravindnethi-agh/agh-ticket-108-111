import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {
  Container,
  FormWrapper,
  Input,
  Button,
  ErrorMessage,
  SuccessMessage,
} from './PercentageManagement.style';

const PercentageManagement = () => {
  const [occupation, setOccupation] = useState('');
  const [values, setValues] = useState({ student: '', professional: '', others: '' });
  const [productId, setProductId] = useState('');
  const [individualUserId, setIndividualUserId] = useState('');
  const [percentage, setPercentage] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleUpdateOccupations = async () => {
    setError('');
    setMessage('');
    const token = Cookies.get('admin-token');
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/affiliates/updatePercentageforoccupations`,
        { occupation, values },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setMessage(response.data.message);
      }
    } catch (err) {
      setError('Failed to update percentage for occupations.');
    }
  };

  const handleUpdateProduct = async () => {
    setError('');
    setMessage('');
    const token = Cookies.get('admin-token');
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/affiliates/updatePercentageforProducts`,
        { productId, percentage },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setMessage(response.data.message);
      }
    } catch (err) {
      setError('Failed to update percentage for product.');
    }
  };

  const handleUpdateIndividual = async () => {
    setError('');
    setMessage('');
    const token = Cookies.get('admin-token');
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/affiliates/updatePercentageforIndividual`,
        { UserID: individualUserId, percentage },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setMessage(response.data.message);
      }
    } catch (err) {
      setError('Failed to update percentage for individual user.');
    }
  };

  return (
    <Container>
      <h1>Percentage Management</h1>
      <FormWrapper>
        <h2>Update Occupation Percentages</h2>
        <Input
          type="text"
          placeholder="Occupation (Student/Professional/Other)"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Student Percentage"
          value={values.student}
          onChange={(e) => setValues({ ...values, student: e.target.value })}
        />
        <Input
          type="number"
          placeholder="Professional Percentage"
          value={values.professional}
          onChange={(e) =>
            setValues({ ...values, professional: e.target.value })
          }
        />
        <Input
          type="number"
          placeholder="Others Percentage"
          value={values.others}
          onChange={(e) => setValues({ ...values, others: e.target.value })}
        />
        <Button onClick={handleUpdateOccupations}>Update Occupations</Button>

        <h2>Update Product Percentage</h2>
        <Input
          type="text"
          placeholder="Product ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Percentage"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
        />
        <Button onClick={handleUpdateProduct}>Update Product</Button>

        <h2>Update Individual User Percentage</h2>
        <Input
          type="text"
          placeholder="User ID"
          value={individualUserId}
          onChange={(e) => setIndividualUserId(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Percentage"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
        />
        <Button onClick={handleUpdateIndividual}>Update Individual</Button>

        {message && <SuccessMessage>{message}</SuccessMessage>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FormWrapper>
    </Container>
  );
};

export default PercentageManagement;
