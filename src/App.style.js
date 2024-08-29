// App.style.js
import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  height: 100vh;
  overflow: hidden;
  ${({ $isAuthRoute }) =>
    $isAuthRoute &&
    `
    justify-content: center;
    align-items: center;
  `}
`;

export const MainContent = styled.main`
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
  transition: margin-left 0.3s ease;

  ${({ $isAuthRoute, $isSidebarOpen }) =>
    !$isAuthRoute &&
    `
    margin-left: ${$isSidebarOpen ? "240px" : "64px"};
  `}

  ${({ $isAuthRoute }) =>
    $isAuthRoute &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-left: 0;
    
  `}
`;
