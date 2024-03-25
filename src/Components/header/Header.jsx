import "./header.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillCloudSunFill } from "react-icons/bs";

const style = { marginRight: "10px" };

const Header = () => {
  const [darkTheme, setDarkTheme] = useState("false");
  const handleTheme = () => {
    setDarkTheme(!darkTheme);

    let mainContainer = document.querySelector(".main-container");
    mainContainer.classList.toggle("dark");
  };
  return (
    <>
      <header className="header">
        <h1>Where in the world?</h1>
        {darkTheme ? (
          <div className="theme-light hidden" onClick={handleTheme}>
            <BsFillMoonFill style={style} />
            <p>Dark Theme</p>
          </div>
        ) : (
          <div className="theme-dark" onClick={handleTheme}>
            <BsFillCloudSunFill style={style} />
            <p>Light Theme</p>
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
};

export default Header;
