import React from "react";
// import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import Icons from "../assets/Icons.svg";
import Bga from "../assets/BgStaff.svg";
import M from "../assets/Group 1.svg";
import { Link, Outlet } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <img src={Logo} alt="" className="logo" /> 
        <nav>
          <ul>
                      <Link style={ {textDecoration:"none"}} to="/">
              <li className="staff">Staff</li>
            </Link>
            <Link style={{textDecoration:"none"}} to="patients">
              <li>Patients</li>
            </Link>
            <li>Appiontments</li>
            <li>Payroll</li>
            <li>NHIS Scheme</li>
          </ul>
        </nav>
      </div>

      <div className="right">
        <img src={Icons} alt="" /> 
        <p>
          Marvin Mckinney <br /> <span className="admin">Admin </span>
        </p>

        <img src={M} alt="" className="m" /> 
      </div>
    </header>
  );
};

export default Header;
