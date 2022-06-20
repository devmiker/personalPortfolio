import { FaCode } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <div className="nav-menu">
      <nav className="nav">
        {(toggleMenu || screenWidth > 910) && (
          <ul className="nav-ul">
            <li className="nav-ul-li">
              <a href="#my-services">&#60;Services /&#62;</a>
            </li>
            <li className="nav-ul-li">
              <a href="#aboutme">&#60;About Me /&#62;</a>
            </li>
            <li className="nav-ul-li">
              <a href="#projects">&#60;Projects /&#62;</a>
            </li>
            <li className="nav-ul-li">
              <a href="#footer">&#60;Social Media /&#62;</a>
            </li>
          </ul>
        )}
        <span onClick={toggleNav} className="nav-logo">
          <FaCode size="1.4em" alt="Source Code Icon" />
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
