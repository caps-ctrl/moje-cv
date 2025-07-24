import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <NavBar></NavBar>
      <div
        className="container mx-auto px-4
      "
      >
        <Outlet></Outlet>
      </div>
      <footer className="text-center p-4 bg-gray-200 mt-4 dark:bg-gray-800">
        <p>&copy; {new Date().getFullYear()} Marcel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RootLayout;
