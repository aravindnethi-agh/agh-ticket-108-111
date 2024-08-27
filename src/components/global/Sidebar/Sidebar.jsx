import React from 'react';
import { FaHome, FaFileInvoiceDollar, FaChartLine, FaBoxes, FaTimes } from 'react-icons/fa';
import {
  SidebarContainer,
  LogoContainer,
  Logo,
  CloseButton,
  NavList,
  NavItem,
  NavLink,
  Icon
} from './Sidebar.style';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <LogoContainer>
        <Logo src={process.env.REACT_APP_LOGO_URL} alt="Platform Logo" />
        <CloseButton onClick={toggleSidebar}>
          <FaTimes />
        </CloseButton>
      </LogoContainer>
      <nav>
        <NavList>
          <NavItem>
            <NavLink to="/" onClick={toggleSidebar}>
              <Icon><FaHome /></Icon> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/billing" onClick={toggleSidebar}>
              <Icon><FaFileInvoiceDollar /></Icon> Billing Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/marketing" onClick={toggleSidebar}>
              <Icon><FaChartLine /></Icon> Marketing Status
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/products" onClick={toggleSidebar}>
              <Icon><FaBoxes /></Icon> Products
            </NavLink>
          </NavItem>
        </NavList>
      </nav>
    </SidebarContainer>
  );
};

export default Sidebar;