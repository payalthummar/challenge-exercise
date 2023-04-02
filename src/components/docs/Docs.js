import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./docs.css";
import installation from "../../assets/install-app.svg";
import { useTheme } from "../../context/ThemeContext";

export default function Docs() {
  const { themeStyles } = useTheme();
  const menuItems = [
    "Welcome",
    "Getting Started",
    "Development",
    "Styles and Assets",
    "Building your App",
    "Testing",
    "Back-End Integration",
    "Deployment",
    " Advanced Usage",
    "Support",
  ];

  return (
    <>
      <section style={{ background: themeStyles.bg, color: themeStyles.text }}>
        <div className="sidebar-menu">
          <ul className="list-item">
            {menuItems.map((item) => (
              <>
                <li>
                  <Link className="menu-link">{item} </Link>
                </li>
              </>
            ))}
          </ul>
        </div>
        <div class="vl"></div>
        <div className="documentation">
          <h1>Getting Started</h1>
          <p>
            Create React App is an officially supported way to create
            single-page React applications. It offers a modern build setup with
            no configuration.
          </p>
          <h2>Quick Start</h2>
          <div className="guide">
            <p>npx create-react-app my-app</p>
            <p>cd my-app</p>
            <p>npm start</p>
          </div>
          <p>
            If you've previously installed create-react-app globally via npm
            install -g create-react-app, we recommend you uninstall the package
            using npm uninstall -g create-react-app or yarn global remove
            create-react-app to ensure that npx always uses the latest version.
          </p>
          <p>
            <i>
              (npx comes with npm 5.2+ and higher, see instructions for older
              npm versions)
            </i>
          </p>
          <p>
            Then open
            <a href="#" style={{ color: "#09d3ac" }}>
              http://localhost:3000/
            </a>
            to see your app.
          </p>
          <p>
            When you’re ready to deploy to production, create a minified bundle
            with npm run build.
          </p>
          <img src={installation} alt="installation" className="installation" />
        </div>
        <div class="vl"></div>
        <div className="right-sidebar-menu">
          <ul className="sidebar-list">
            <li>Quick start</li>
            <ul className="sub-list">
              <li>
                <span>Get Started Immediately</span>
              </li>
            </ul>
          </ul>
          <ul className="sidebar-list">
            <li>Creating an App</li>
            <ul className="sub-list">
              <li>npx</li>
              <li>npm</li>
              <li>Yarn</li>
              <li>Selecting a template</li>
              <li>Selecting a package manager</li>
            </ul>
            <li>Output</li>
            <li>Scripts</li>
          </ul>
        </div>
      </section>
    </>
  );
}
