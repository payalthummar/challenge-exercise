import { Link, NavLink } from "react-router-dom";
import "../navbar/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiShareBoxFill } from "react-icons/ri";
import ReactLogo from "../../assets/create-react-app.svg";
import ThemeToggle from "../ThemeToggle";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

export default function Navbar() {
  const { themeStyles } = useTheme();
  const [menu, setMenu] = useState(false);

  return (
    <div className="navbar-container" style={{ background: themeStyles.bg }}>
      <div className="navbar-logo">
        <Link
          to="/"
          className="navbar-link-logo"
          style={{ color: themeStyles.text }}
        >
          <img
            src={ReactLogo}
            alt="Create-React-App"
            style={{ width: "40px" }}
          />
          <b className="navbar-title">Create React App</b>
        </Link>
      </div>
      <div className="navbar-items">
        <div className="toggle">
          <ThemeToggle />
        </div>
        <nav className={menu ? "mobile-menu-link" : "menu-link"}>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ color: themeStyles.text }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            to="/docs"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ color: themeStyles.text }}
          >
            Docs
            <RiShareBoxFill />
          </NavLink>
          <NavLink
            to="/help"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ color: themeStyles.text }}
          >
            Help
            <RiShareBoxFill />
          </NavLink>
        </nav>
        {/* Hamburger Menu */}
        <div className="hamburger-menu">
          <a href="#" onClick={() => setMenu(!menu)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </div>
    </div>
  );
}
