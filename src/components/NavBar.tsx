import { NavLink } from "react-router-dom";
import { useWidth } from "./useWidth";
import ThemeSwitcher from "./ThemeSwitcher";
const NavBar = () => {
  const [width] = useWidth();
  return (
    <div>
      {" "}
      <div className="flex justify-between items-center p-4  ">
        <div className={width < 768 ? "hidden" : ""}>
          {" "}
          <ThemeSwitcher></ThemeSwitcher>
        </div>
        <div>
          <ul
            className="flex space-x-4  p-4 rounded-4xl shadow-[0_0px_10px_rgba(0,0,0,1)] dark:shadow-[0_0px_10px_rgba(0,0,0,1)] bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            // style={{ boxShadow: "0 0px 10px rgba(0, 0, 0, 0.2)", }}
          >
            {" "}
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>{" "}
            <li>
              <NavLink to={"/Projects"}>Projects </NavLink>
            </li>{" "}
            <li>
              <NavLink to={"/AboutMe"}>About me </NavLink>
            </li>{" "}
            <li>
              {" "}
              <NavLink to={"/Skills"}>Skills</NavLink>
            </li>{" "}
            <li>
              <NavLink to={"/Contact"}>Contact </NavLink>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
