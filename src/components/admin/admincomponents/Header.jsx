import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

import Logo from "../../../assets/icons/logo.svg";
import blocks from "../../../assets/icons/blocks.svg"
import chart from "../../../assets/icons/chart.svg"
import chat from "../../../assets/icons/chat.svg"

import DocMenu from "../adminpages/staff/doctor/docBasicInfo/DocMenu";
import PharmMenu from "../adminpages/staff/pharmarcist/pharmBasicInfo/PharmMenu";
import NurseMenu from "../adminpages/staff/nurses/nurseBasicInfo/NurseMenu";
import LabMenu from "../adminpages/staff/labScientist/labBasicInfo/LabMenu";
import DomMenu from "../adminpages/staff/domesticWorkers/domWorkBasicInfo/DomMenu";
import MiniNav from "../adminpages/patients/MiniNav";

const Header = () => {
  const location  = useLocation()
  const isStaffRoute =
    !location.pathname.includes("/adminhome/AddDoctor")  &&
    //the pharmacist part
    !location.pathname.includes("/adminhome/Addpharmacist") &&
    //the nurse part
    !location.pathname.includes("/adminhome/AddNurse") &&
    //the lab-scientist part
    !location.pathname.includes("/adminhome/AddLabSci") &&
    //the domestic worker part
    !location.pathname.includes("/adminhome/AddDomWorker") &&
    // Patients
    !location.pathname.includes("/adminhome/patients");

  const adminData = localStorage.getItem('admin');
  const admin = JSON.parse(adminData);

  return (
    <>
    <nav className="header">
      <div className="rule">
        <ul className="first-nav">
          <li><a><img src={Logo} alt="" className="logo" /></a></li>
          <li><NavLink to="/adminhome/">Staff</NavLink></li>
          <li><NavLink to="patients">Patients</NavLink></li>
          <li><a>Appointments</a></li>
          <li><a>Payroll</a></li>
          <li><a>NHIS Scheme</a></li>
        </ul>
        <ul className="second-nav">
          <li><a><img src={blocks} /></a></li>
          <li><a><img src={chart} /></a></li>
          <li><a><img src={chat} /></a></li>
          <li>
            <a>
              <div className="profile">
                <p id="adminName">{`${admin.firstname} ${admin.lastname}`}</p>
                <span>Admin</span>
              </div>
              <p className="initials">{admin.firstname[0]}</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <header>
      <div className="rule">
        {isStaffRoute ? (
          <aside>
            <ul className="menu">
              <NavLink to="./">
                <li>Doctor</li>
              </NavLink>
              <NavLink to="pharmacist">
                <li>Pharmacists</li>
              </NavLink>
              <NavLink to="nurse">
                <li>Nurses</li>
              </NavLink>
              <NavLink to="labScientist">
                <li>Lab Scientists</li>
              </NavLink>
              <NavLink to="domesticWorkers">
                <li>Domestic Workers</li>
              </NavLink>
            </ul>
          </aside>
        ) : location.pathname.includes("/adminhome/Addpharmacist") ? (
          <PharmMenu />
        ) : location.pathname.includes("/adminhome/AddNurse") ? (
          <NurseMenu />
        ) : location.pathname.includes("/adminhome/AddLabSci") ? (
          <LabMenu/>
        ) : location.pathname.includes("/adminhome/AddDomWorker") ? (
          <DomMenu />
        ) : location.pathname.includes("/adminhome/patients") ? (
          <MiniNav/>
        ) : (
          <DocMenu />
        )}
      </div>
    </header>

    <main className="context rule">
        <Outlet/>
    </main>
    </>
  );
};

export default Header;
