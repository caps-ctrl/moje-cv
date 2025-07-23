import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const navBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <div className="flex justify-between items-center p-4  ">
        <div></div>
        <div>
          <ul
            className="flex space-x-4  p-4 rounded-4xl  "
            style={{ boxShadow: "0 0px 10px rgba(0, 0, 0, 0.2)" }}
          >
            <NavLink to={"/"}>
              {" "}
              <li>Home</li>
            </NavLink>

            <NavLink to={"/Projects"}>
              {" "}
              <li>Projects</li>
            </NavLink>

            <NavLink to={"/AboutMe"}>
              {" "}
              <li>About me</li>
            </NavLink>

            <NavLink to={"/Skills"}>
              {" "}
              <li>Skills</li>
            </NavLink>

            <NavLink to={"/Contact"}>
              {" "}
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default navBar;
