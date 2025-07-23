import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div
        className="container mx-auto px-4
      "
      >
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default RootLayout;
