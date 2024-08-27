import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/user/LoginPage";
import SignupPage from "./pages/user/SignupPage";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminUserDetails from "./components/admin/AdminUserDetails";
import UserDashboard from "./components/user/UserDashboard";
import BillingDetails from "./components/user/BillingDetails";
import MarketingStatusDashboard from "./components/user/MarketingStatusDashboard";
import Products from "./components/user/Products";
import { AppContainer, MenuIcon, MainContent } from "./App.style";
import Sidebar from "./components/global/Sidebar/Sidebar";

const AppContent = ({ user, setUser, isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();
  const isAuthRoute =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <AppContainer>
      {!isAuthRoute && (
        <>
          <MenuIcon onClick={toggleSidebar} />
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
      )}
      <MainContent isSidebarOpen={isSidebarOpen}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/admin"
            element={
              user && user.isAdmin ? (
                <AdminDashboard user={user} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/admin/user/:id"
            element={
              user && user.isAdmin ? (
                <AdminUserDetails user={user} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/user"
            element={
              user && !user.isAdmin ? (
                <UserDashboard user={user} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/billing" element={<BillingDetails />} />
          <Route path="/marketing" element={<MarketingStatusDashboard />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </MainContent>
    </AppContainer>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <AppContent
        user={user}
        setUser={setUser}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </Router>
  );
};

export default App;
