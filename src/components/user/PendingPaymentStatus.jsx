import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container} from './PendingPaymentStatus.style'

const PendingPaymentStatus = () => {
  const [pendingData, setPendingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/paymentManagement/status-of-pendingpayement/:id`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setPendingData(response.data.data || []);
      } catch (error) {
        console.error('Error fetching pending payment status:', error);
        setPendingData([
          { courseName: 'Machine Learning Basics', amount: 200, settlement: 'Pending' },
          { courseName: 'Advanced React', amount: 180, settlement: 'Processing' },
        ]);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Pending Payment Status</h1>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pendingData.map((item, index) => (
            <tr key={index}>
              <td>{item.courseName}</td>
              <td>${item.amount}</td>
              <td>{item.settlement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default PendingPaymentStatus;