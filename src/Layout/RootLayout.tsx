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
      <footer className="text-center p-4 bg-gray-200 mt-4">
        <p>&copy; {new Date().getFullYear()} Marcel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RootLayout;
