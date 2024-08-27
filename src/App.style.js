import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const MainContent = styled.main`
  flex-grow: 1;
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? "250px" : "0")};
  transition: margin-left 0.3s ease;
  padding: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const MenuIcon = styled(FaBars)`
  display: block;
  font-size: 24px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1001;
  padding: 6px;
  @media (max-width: 768px) {
    display: block;
  }
`;
