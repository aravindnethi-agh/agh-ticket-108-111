import React from 'react';
import { FaHome, FaChartLine, FaChevronLeft, FaChevronRight, FaUser, FaShoppingCart, FaDollarSign, FaUndo, FaBullhorn, FaBell, FaCogs, FaHeadset, FaClipboardList } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
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

const Sidebar = ({ isOpen, toggleSidebar, userRole }) => {
  const location = useLocation();

  return (
    <SidebarContainer $isOpen={isOpen}>
      <SidebarWrapper>
        <CollapseIcon onClick={toggleSidebar}>
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </CollapseIcon>
        <NavList>
          <NavItem>
            <NavLink to="/login" $isActive={location.pathname === '/'} title="Home">
              <Icon><FaHome /></Icon>
              <NavText $isOpen={isOpen}>Home</NavText>
            </NavLink>
          </NavItem>

          {/* Admin-specific links */}
          {userRole === 'admin' && (
            <>
              <NavItem>
                <NavLink to="/admin/dashboard" $isActive={location.pathname === '/admin/dashboard'} title="Dashboard">
                  <Icon><FaChartLine /></Icon>
                  <NavText $isOpen={isOpen}>Dashboard</NavText>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/admin/user-management" $isActive={location.pathname === '/admin/user-management'} title="User Management">
                  <Icon><FaUser /></Icon>
                  <NavText $isOpen={isOpen}>User Management</NavText>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/product-management" $isActive={location.pathname === '/product-management'} title="Product Management">
                  <Icon><FaShoppingCart /></Icon>
                  <NavText $isOpen={isOpen}>Product Management</NavText>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/payment-management" $isActive={location.pathname === '/payment-management'} title="Payment Management">
                  <Icon><FaDollarSign /></Icon>
                  <NavText $isOpen={isOpen}>Payment Management</NavText>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/refund-management" $isActive={location.pathname === '/refund-management'} title="Refund Management">
                  <Icon><FaUndo /></Icon>
                  <NavText $isOpen={isOpen}>Refund Management</NavText>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/campaign-management" $isActive={location.pathname === '/campaign-management'} title="Campaign Management">
                  <Icon><FaBullhorn /></Icon>
                  <NavText $isOpen={isOpen}>Campaign Management</NavText>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/reporting-analytics" $isActive={location.pathname === '/reporting-analytics'} title="Reporting and Analytics">
                  <Icon><FaClipboardList /></Icon>
                  <NavText $isOpen={isOpen}>Reporting and Analytics</NavText>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/notifications" $isActive={location.pathname === '/notifications'} title="Notifications">
                  <Icon><FaBell /></Icon>
                  <NavText $isOpen={isOpen}>Notifications</NavText>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/settings" $isActive={location.pathname === '/settings'} title="Settings">
                  <Icon><FaCogs /></Icon>
                  <NavText $isOpen={isOpen}>Settings</NavText>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/support-feedback" $isActive={location.pathname === '/support-feedback'} title="Support and Feedback">
                  <Icon><FaHeadset /></Icon>
                  <NavText $isOpen={isOpen}>Support and Feedback</NavText>
                </NavLink>
              </NavItem>
            </>
          )}
        </NavList>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
