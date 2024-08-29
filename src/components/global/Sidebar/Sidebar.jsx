import React from 'react';
import { FaHome, FaFileInvoiceDollar, FaChartLine, FaBoxes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import {
  SidebarContainer,
  NavList,
  NavItem,
  NavLink,
  Icon,
  NavText,
  CollapseIcon
} from './Sidebar.style';

const Sidebar = ({ isOpen, toggleSidebar, userRole }) => {
  const location = useLocation();

  return (
    <SidebarContainer $isOpen={isOpen}>
      <CollapseIcon onClick={toggleSidebar}>
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </CollapseIcon>
      <NavList>
        <NavItem>
          <NavLink to="/" $isActive={location.pathname === '/'} title="Home">
            <Icon><FaHome /></Icon>
            <NavText $isOpen={isOpen}>Home</NavText>
          </NavLink>
        </NavItem>
        {userRole !== 'admin' && (
          <>
            <NavItem>
              <NavLink to="/billing" $isActive={location.pathname === '/billing'} title="Billing Details">
                <Icon><FaFileInvoiceDollar /></Icon>
                <NavText $isOpen={isOpen}>Billing Details</NavText>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/marketing" $isActive={location.pathname === '/marketing'} title="Marketing Status">
                <Icon><FaChartLine /></Icon>
                <NavText $isOpen={isOpen}>Marketing Status</NavText>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/products" $isActive={location.pathname === '/products'} title="Products">
                <Icon><FaBoxes /></Icon>
                <NavText $isOpen={isOpen}>Products</NavText>
              </NavLink>
            </NavItem>
          </>
        )}
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;
