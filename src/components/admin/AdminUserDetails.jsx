import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import {
  UserDetailsContainer,
  ApproveButton,
  RejectButton,
  PopupOverlay,
  PopupContent,
  PopupButtons,
  TextArea,
  BackButton
} from './AdminUserDetails.style';

const AdminUserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [showApprovePopup, setShowApprovePopup] = useState(false);
    const [showRejectPopup, setShowRejectPopup] = useState(false);
    const [rejectionReason, setRejectionReason] = useState('');
  
    useEffect(() => {
      setUser({
        id,
        username: `user${id}`,
        aadhar: '123456789012',
        pan: 'ABCDE1234F',
        email: `user${id}@gmail.com`,
        phone: '1234567890',
        address: '123 Main St, City, Country',
        status: 'pending'
      });
    }, [id]);
  
    const handleApprove = () => {
      setShowApprovePopup(true);
    };
  
    const handleReject = () => {
      setShowRejectPopup(true);
    };
  
    const confirmApprove = () => {
      // Send approval to backend
      console.log('User approved');
      setUser(prevUser => ({ ...prevUser, status: 'approved' }));
      setShowApprovePopup(false);
    };
  
    const confirmReject = () => {
      // Send rejection to backend with reason
      console.log('User rejected. Reason:', rejectionReason);
      setUser(prevUser => ({ ...prevUser, status: 'rejected' }));
      setShowRejectPopup(false);
      setRejectionReason('');
    };

    const handleBack = () => {
      navigate('/admin'); // Adjust this path as needed
    };
  
    if (!user) return <div>Loading...</div>;
  
    return (
      <UserDetailsContainer>
        <BackButton onClick={handleBack}>
          <FaArrowLeft /> Back
        </BackButton>
        <h2>User Details</h2>
        <p>Username: {user.username}</p>
        <p>Aadhar: {user.aadhar}</p>
        <p>PAN: {user.pan}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Address: {user.address}</p>
        <p>Status: {user.status}</p>
  
        {user.status === 'pending' && (
          <>
            <ApproveButton onClick={handleApprove}>Approve</ApproveButton>
            <RejectButton onClick={handleReject}>Reject</RejectButton>
          </>
        )}
  
        {showApprovePopup && (
          <PopupOverlay>
            <PopupContent>
              <p>Are you sure you want to approve this user?</p>
              <PopupButtons>
                <ApproveButton onClick={confirmApprove}>Yes, Approve</ApproveButton>
                <RejectButton onClick={() => setShowApprovePopup(false)}>Cancel</RejectButton>
              </PopupButtons>
            </PopupContent>
          </PopupOverlay>
        )}
  
        {showRejectPopup && (
          <PopupOverlay>
            <PopupContent>
              <p>Please provide a reason for rejection:</p>
              <TextArea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                placeholder="Enter rejection reason"
              />
              <p>Are you sure you want to reject this user?</p>
              <PopupButtons>
                <RejectButton onClick={confirmReject}>Yes, Reject</RejectButton>
                <ApproveButton onClick={() => setShowRejectPopup(false)}>Cancel</ApproveButton>
              </PopupButtons>
            </PopupContent>
          </PopupOverlay>
        )}
      </UserDetailsContainer>
    );
  }
  
  export default AdminUserDetails;