import React from "react";
import "../styles/Header.css";
import { BsFillCloudSunFill, BsFillCloudMoonFill } from "react-icons/bs";

export default function Header({ theme, setTheme }) {
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <header>
      <div className="logo">
        <h3>Task Management</h3>
      </div>
      <div className="theme-container">
        <span className="theme-text">{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
        <span className="icon" onClick={toggleTheme}>
          {theme === "light" ? <BsFillCloudSunFill /> : <BsFillCloudMoonFill />}
        </span>
      </div>
    </header>
  );
}
