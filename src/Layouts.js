import React from "react";
import Sidebar from "./components/global/Sidebar/Sidebar";
import { Outlet } from "react-router-dom"; // Outlet is used to render child components
import { AppContainer, MainContent } from "./App.style";

const AdminLayout = () => {
  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <Outlet />
      </MainContent>
    </AppContainer>
  );
};

const UserLayout = () => {
  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <Outlet />
      </MainContent>
    </AppContainer>
  );
};

export { AdminLayout, UserLayout };
