import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container,NotificationList,NotificationItem } from "./GetNotifications.style"

const GetNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/paymentManagement/getNotifications`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setNotifications(response.data.data || []);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        setNotifications([
          { notificationMessage: 'New course added: React Native Fundamentals' },
          { notificationMessage: 'Payment received for JavaScript Advanced course' },
        ]);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Notifications</h1>
      <NotificationList>
        {notifications.map((notification, index) => (
          <NotificationItem key={index}>{notification.notificationMessage}</NotificationItem>
        ))}
      </NotificationList>
    </Container>
  );
};

export default GetNotifications;