import { DashboardContainer, WelcomeMessage,  } from './UserDashboard.style';

const UserDashboard = ({ user }) => {
 

  return (
    <DashboardContainer>
      
        <WelcomeMessage>Welcome, {user.username}!</WelcomeMessage>
        <h2>User Dashboard</h2>
        {/* Add more user-specific content here */}
    
    </DashboardContainer>
  );
}

export default UserDashboard;