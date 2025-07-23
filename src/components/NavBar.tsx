import React from "react";

const navBar = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-between items-center p-4  ">
        <div></div>
        <div>
          <ul className="flex space-x-4 bg-neutral-300 p-4 rounded-4xl border-2 ">
            <li>Home</li>
            <li>Projects</li>
            <li>About me</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default navBar;
