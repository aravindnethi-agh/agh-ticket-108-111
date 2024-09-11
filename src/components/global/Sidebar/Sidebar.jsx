import React, { useState, useEffect } from 'react';
import { 
  FaHome, FaChartLine, FaChevronLeft, FaChevronRight, FaUser, FaShoppingCart, 
  FaDollarSign, FaUndo, FaBullhorn, FaBell, FaCogs, FaHeadset, FaClipboardList, 
  FaSignOutAlt,FaPercentage // Import logout icon
} from 'react-icons/fa';
import { TbReportMoney,TbPigMoney } from "react-icons/tb";
import { MdNotificationsActive } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import {
  SidebarContainer,
  NavList,
  NavItem,
  NavLink,
  Icon,
  NavText,
  CollapseIcon,
  SidebarWrapper
} from './Sidebar.style';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true); // Handle sidebar open/close state
  const [userRole, setUserRole] = useState(null);

  // Hide sidebar on certain routes
  const hideSidebarRoutes = ['/login', '/signup', '/adminlogin'];
  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  useEffect(() => {
    // Check cookie values explicitly
    const adminToken = Cookies.get('admin-token');
    const agentToken = Cookies.get('agent-token');
    
    if (adminToken) {
      setUserRole('Admin');
    } else if (agentToken) {
      setUserRole('Agent');
    } else {
      setUserRole(null);
    }
  }, []);

  // Define links for Admin and Agent
  const adminLinks = [
    { to: "/admin/dashboard", icon: <FaChartLine />, text: "Dashboard" },
    { to: "/admin/user-management", icon: <FaUser />, text: "User Management" },
    { to: "/admin/product-management", icon: <FaShoppingCart />, text: "Product Management" },
    { to: "/admin/percentage-management", icon: <FaPercentage />, text: "Percentage Management" },
    { to: "/admin/payment-management", icon: <FaDollarSign />, text: "Payment Management" },
    { to: "/admin/refund-management", icon: <FaUndo />, text: "Refund Management" },
    { to: "/admin/campaign-management", icon: <FaBullhorn />, text: "Campaign Management" },
    { to: "/admin/reporting-analytics", icon: <FaClipboardList />, text: "Reporting and Analytics" },
    { to: "/admin/notifications", icon: <FaBell />, text: "Notifications" },
    { to: "/admin/settings", icon: <FaCogs />, text: "Settings" },
    { to: "/admin/support-feedback", icon: <FaHeadset />, text: "Support and Feedback" },
    { to: "/admin/get-notification", icon : <MdNotificationsActive/>, text: "Get Notification"},
    { to: "/admin/send-notification", icon: <MdNotificationsActive/>,  text: "Send Notification"},
  ];

  const agentLinks = [
    { to: "/user", icon: <FaHome />, text: "Dashboard" },
    { to: "/billing", icon: <FaDollarSign />, text: "Billing" },
    { to: "/marketing", icon: <FaBullhorn />, text: "Marketing" },
    { to: "/products", icon: <FaShoppingCart />, text: "Products" },
    { to: "/user/notifications", icon: <FaBell />, text: "Notifications" },
    { to: "/user/settings", icon: <FaCogs />, text: "Settings" },
    { to: "/user/support", icon: <FaHeadset />, text: "Support" },
    { to: '/user/status-of-pendingpayement', icon: <TbReportMoney/> , text: "Pending Payment"},
    { to: "/user/earnings", icon: <TbPigMoney/>, text: "Earnings"},
  ];

  const links = userRole === "Admin" ? adminLinks : agentLinks;

  // Logout functionality
  const handleLogout = () => {
    if (userRole === "Admin") {
      Cookies.remove('admin-token');
      navigate('/adminlogin');
    } else if (userRole === "Agent") {
      Cookies.remove('agent-token');
      navigate('/login');
    }
    
  };

  // If no user role, or if on routes where the sidebar should be hidden, don't render it
  if (!userRole || shouldHideSidebar) {
    return null;
  }

  return (
    <SidebarContainer $isOpen={isOpen}>
      <SidebarWrapper>
        <CollapseIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </CollapseIcon>
        <NavList>
          {links.map((link) => (
            <NavItem key={link.to}>
              <NavLink 
                to={link.to} 
                $isActive={location.pathname === link.to} 
                title={link.text}
              >
                <Icon>{link.icon}</Icon>
                <NavText $isOpen={isOpen}>{link.text}</NavText>
              </NavLink>
            </NavItem>
          ))}
          {/* Logout Button */}
          <NavItem>
            <NavLink as="div" onClick={handleLogout} title="Logout">
              <Icon><FaSignOutAlt /></Icon>
              <NavText $isOpen={isOpen}>Logout</NavText>
            </NavLink>
          </NavItem>
        </NavList>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
