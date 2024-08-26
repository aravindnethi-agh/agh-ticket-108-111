import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  DashboardContainer,
  UserList,
  UserItem,
  KnowMoreButton
} from './AdminDashboard.style';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Mock data
    setUsers([
      { id: 1, username: 'user1', aadhar: '123456789012', pan: 'ABCDE1234F', status: 'pending' },
      { id: 2, username: 'user2', aadhar: '234567890123', pan: 'FGHIJ5678K', status: 'pending' },
      { id: 3, username: 'user3', aadhar: '345678901234', pan: 'LMNOP9012Q', status: 'pending' },
    ]);
  }, []);

  return (
    <DashboardContainer>
      <h2>Admin Dashboard</h2>
      <UserList>
        {users.map(user => (
          <UserItem key={user.id}>
            <p>Username: {user.username}</p>
            <p>Aadhar: {user.aadhar}</p>
            <p>PAN: {user.pan}</p>
            <p>Status: {user.status}</p>
            <Link to={`/admin/user/${user.id}`}>
              <KnowMoreButton>Know More</KnowMoreButton>
            </Link>
          </UserItem>
        ))}
      </UserList>
    </DashboardContainer>
  );
}

export default AdminDashboard;