import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  DashboardContainer,
  UserList,
  UserItem,
  KnowMoreButton,
  StatusText
} from './UserManagement.style';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/users');
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DashboardContainer>
      <h2>Admin Dashboard</h2>
      <UserList>
        {users.map(user => (
          <UserItem key={user._id}>
            <p>Username: {user.firstname} {user.lastname}</p>
            <p>Email: {user.email}</p>
            <p>Mobile: {user.countryCode} {user.mobileNumber}</p>
            <p>Status: <StatusText status={user.approvalStatus}>{user.approvalStatus}</StatusText></p>
            <Link to={`/admin/user-management/${user._id}`}>
              <KnowMoreButton>Know More</KnowMoreButton>
            </Link>
          </UserItem>
        ))}
      </UserList>
    </DashboardContainer>
  );
}

export default UserManagement;
