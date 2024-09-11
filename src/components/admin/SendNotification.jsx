import React from 'react';
import axios from 'axios';
import { Container,Button } from './SendNotification.style';

const SendNotification = () => {
  const sendNotification = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/paymentManagement/sendNotificationremainder`);
      alert('Notification sent successfully');
    } catch (error) {
      console.error('Error sending notification:', error);
      alert('Failed to send notification');
    }
  };

  return (
    <Container>
      <h1>Send Notification</h1>
      <Button onClick={sendNotification}>Send Reminder Notification</Button>
    </Container>
  );
};

export default SendNotification;