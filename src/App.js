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
import { AppContainer, MainContent } from "./App.style";
import Sidebar from "./components/global/Sidebar/Sidebar";

const AppContent = ({ user, setUser, isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();
  const isAuthRoute =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <AppContainer $isAuthRoute={isAuthRoute}>
      {!isAuthRoute && (
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          userRole={user?.isAdmin ? "admin" : "user"} // Pass user role to Sidebar
        />
      )}
      <MainContent $isSidebarOpen={isSidebarOpen} $isAuthRoute={isAuthRoute}>
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
          <Route
            path="/billing"
            element={
              user && !user.isAdmin ? (
                <BillingDetails />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/marketing"
            element={
              user && !user.isAdmin ? (
                <MarketingStatusDashboard />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/products"
            element={
              user && !user.isAdmin ? (
                <Products />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </MainContent>
    </AppContainer>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
