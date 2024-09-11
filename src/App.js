import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Cookies from "js-cookie";
import LoginPage from "./pages/user/LoginPage";
import SignupPage from "./pages/user/SignupPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminDashboard from "./components/admin/AdminDashboard";
import UserManagement from "./components/admin/UserManagement";
import UserManagementDetails from "./components/admin/UserManagementDetails";
import UserDashboard from "./components/user/UserDashboard";
import BillingDetails from "./components/user/BillingDetails";
import MarketingStatusDashboard from "./components/user/MarketingStatusDashboard";
import Products from "./components/user/Products";
import PaymentManagement from "./components/admin/PaymentManagement";
import PercentageManagement from "./components/admin/PercentageManagement";
import ProductManagement from "./components/admin/ProductManagement";
import { AdminLayout, UserLayout } from "./Layouts";
import GetNotifications from "./components/admin/GetNotifications";
import SendNotification from "./components/admin/SendNotification";
import TotalPayment from "./components/user/TotalPayment";
import PendingPaymentStatus from "./components/user/PendingPaymentStatus";

// Global authentication check
const AuthWrapper = ({ children }) => {
  const location = useLocation();
  const adminToken = Cookies.get("admin-token");
  const agentToken = Cookies.get("agent-token");

  // Public routes that don't require authentication
  const publicRoutes = ["/login", "/signup", "/adminlogin"];

  if (!adminToken && !agentToken && !publicRoutes.includes(location.pathname)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Protected Route for Admin
const AdminProtectedRoute = ({ element: Component }) => {
  const token = Cookies.get("admin-token");
  if (!token) {
    return <Navigate to="/adminlogin" />;
  }
  return <Component />;
};

// Protected Route for Agent/User
const AgentProtectedRoute = ({ element: Component }) => {
  const token = Cookies.get("agent-token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <Component />;
};

const App = () => {
  return (
    <Router>
      <AuthWrapper>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/adminlogin" element={<AdminLoginPage />} />

          {/* Admin protected routes with Sidebar */}
          <Route element={<AdminLayout />}>
            <Route
              path="/admin/dashboard"
              element={<AdminProtectedRoute element={AdminDashboard} />}
            />
            <Route
              path="/admin/user-management"
              element={<AdminProtectedRoute element={UserManagement} />}
            />
            <Route
              path="/admin/user-management/:id"
              element={<AdminProtectedRoute element={UserManagementDetails} />}
            />
            <Route
              path="/admin/product-management"
              element={<AdminProtectedRoute element={ProductManagement} />}
            />
            <Route
              path="/admin/payment-management"
              element={<AdminProtectedRoute element={PaymentManagement} />}
            />
            <Route
              path="/admin/percentage-management"
              element={<AdminProtectedRoute element={PercentageManagement} />}
            />
            <Route
              path="/admin/get-notification"
              element={<AdminProtectedRoute element={GetNotifications}/>}
            />
            <Route 
              path="/admin/send-notification"
              element={<AdminProtectedRoute element={SendNotification}/>}
            />

          </Route>

          {/* Agent/User protected routes with Sidebar */}
          <Route element={<UserLayout />}>
            <Route
              path="/user"
              element={<AgentProtectedRoute element={UserDashboard} />}
            />
            <Route
              path="/billing"
              element={<AgentProtectedRoute element={BillingDetails} />}
            />
            <Route
              path="/marketing"
              element={
                <AgentProtectedRoute element={MarketingStatusDashboard} />
              }
            />
            <Route
              path="/products"
              element={<AgentProtectedRoute element={Products} />}
            />
            <Route 
              path="/user/status-of-pendingpayement"
              element={<AgentProtectedRoute element={PendingPaymentStatus}/>}
            />
            <Route 
              path="/user/earnings"
              element={<AgentProtectedRoute element={TotalPayment}/>}
            />
              
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthWrapper>
    </Router>
  );
};

export default App;
