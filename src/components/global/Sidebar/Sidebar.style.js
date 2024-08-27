import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.aside`
  background-color: #f8f9fa;
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  transition: left 0.3s ease;
  z-index: 1000;

  @media (max-width: 768px) {
    left: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
`;

export const Logo = styled.img`
  max-width: 150px;
  height: auto;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: none;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0 0 0;
`;

export const NavItem = styled.li`
  margin: 10px 0;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 10px 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const Icon = styled.span`
  margin-right: 10px;
`;
