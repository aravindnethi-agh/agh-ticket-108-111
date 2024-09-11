import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container} from './TotalPayment.style'

const TotalPayment = () => {
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/paymentManagement/payments/calculateTotalearnings/:id`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setTotalPayment(response.data.totalPrice || 0);
      } catch (error) {
        console.error('Error fetching total payment:', error);
        setTotalPayment(1500);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Total Payment</h1>
      <h2>Total Earnings: ${totalPayment}</h2>
    </Container>
  );
};

export default TotalPayment;