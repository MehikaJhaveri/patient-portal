import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./layout.css";

const Layout = () => {
  return (
    <div className="app-layout">
      {/* Top blue band */}
      <div className="top-band"></div>
      
      <div className="layout-content">
        <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;