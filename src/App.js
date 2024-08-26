import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/user/LoginPage";
import SignupPage from "./pages/user/SignupPage";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminUserDetails from "./components/admin/AdminUserDetails";
import UserDashboard from "./components/user/UserDashboard";
import { AppContainer } from "./App.style";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <AppContainer>
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
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
