import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  ${({ $isAuthRoute }) =>
    $isAuthRoute
      ? `
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9; /* Optional: Add background color to enhance visibility on auth routes */
  `
      : `
    flex-direction: row; /* Ensures main content and sidebar are in a row layout */
  `}
`;

export const MainContent = styled.main`
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
  transition: margin-left 0.3s ease;
  height: 100%; /* Ensures full height for the content */

  ${({ $isAuthRoute, $isSidebarOpen }) =>
    !$isAuthRoute
      ? `
    margin-left: ${$isSidebarOpen ? "240px" : "64px"};
  `
      : `
    margin-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `}
`;
