import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.aside`
  background-color: #ffffff;
  width: ${({ $isOpen }) => ($isOpen ? "240px" : "64px")};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: width 0.3s ease;
  z-index: 1000;
  overflow-x: visible;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 60px 0 0 0;
  transition: margin 0.3s ease;
`;

export const NavItem = styled.li`
  margin: 8px 0;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333333;
  padding: 12px 16px;
  // transition: background-color 0.3s ease, padding 0.3s ease;
  background-color: ${({ $isActive }) =>
    $isActive
      ? "#ffcccb"
      : "transparent"}; /* Light red background for active link */

  &:hover {
    background-color: #ffe4e1; /* Slightly darker red on hover */
  }
`;

export const Icon = styled.span`
  font-size: 20px;
  min-width: 32px;
  color: #ff0000;
  transition: font-size 0.3s ease;
`;

export const NavText = styled.span`
  margin-left: 16px;
  white-space: nowrap;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

export const CollapseIcon = styled.button`
  position: absolute;
  right: -20px;
  top: 20px;
  background-color: #ffffff;
  color: #000;
  border: 1px solid white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

  &:hover {
    background-color: red;
    color: #ffffff;
    border: 1px solid red;
  }
`;
