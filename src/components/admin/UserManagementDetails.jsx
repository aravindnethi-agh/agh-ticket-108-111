import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import {
  UserDetailsContainer,
  ApproveButton,
  RejectButton,
  PopupOverlay,
  PopupContent,
  PopupButtons,
  TextArea,
  BackButton,
  StatusText,
  DocumentContainer,
} from './UserManagamentDetails.style';

const UserManagementDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showApprovePopup, setShowApprovePopup] = useState(false);
  const [showRejectPopup, setShowRejectPopup] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/agents/${id}`);
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
    fetchUserDetails();
  }, [id]);

  const handleApprove = () => {
    setShowApprovePopup(true);
  };

  const handleReject = () => {
    setShowRejectPopup(true);
  };

  const confirmApprove = async () => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/auth/agents/${user._id}/approved`);
      setUser((prevUser) => ({ ...prevUser, status: 'approved' }));
    } catch (error) {
      console.error('Error approving user:', error);
    }
    setShowApprovePopup(false);
  };

  const confirmReject = async () => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/auth/agents/${user._id}/declined`, { reason:rejectionReason });
      setUser((prevUser) => ({ ...prevUser, status: 'rejected' }));
    } catch (error) {
      console.error('Error rejecting user:', error);
    }
    setShowRejectPopup(false);
    setRejectionReason('');
  };

  const handleBack = () => {
    navigate('/admin/user-management');
  };

  if (!user) return <div>Loading...</div>;

  const renderDocument = () => {
    const { type, url } = user.document;
    if (type.startsWith('image/')) {
      return <img src={url} alt="User Document" style={{ maxWidth: '100%', maxHeight: '400px' }} />;
    } else if (type === 'application/pdf' || type === 'application/msword' || type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      return (
        <iframe
          src={url}
          title="User Document"
          style={{ width: '100%', height: '500px' }}
          frameBorder="0"
        />
      );
    } else {
      return <p>Unsupported document type.</p>;
    }
  };

  return (
    <UserDetailsContainer>
      <BackButton onClick={handleBack}>
        <FaArrowLeft /> Back
      </BackButton>
      <h2>User Details</h2>
      <p>Username: {user.firstname} {user.lastname}</p>
      <p>Document Type: {user.document.type}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.mobileNumber}</p>
      <p>Occupation: {user.occupation}</p>
      <p>Status: <StatusText status={user.agentApprovalStatus}>{user.agentApprovalStatus}</StatusText></p>

      <DocumentContainer>
        <h3>Uploaded Document:</h3>
        {renderDocument()}
      </DocumentContainer>

      {user.agentApprovalStatus === 'Pending' && (
        <>
          <ApproveButton onClick={handleApprove}>Approve</ApproveButton>
          <RejectButton onClick={handleReject}>Decline</RejectButton>
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
};

export default UserManagementDetails;
