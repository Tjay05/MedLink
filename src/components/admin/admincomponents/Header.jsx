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

const Header = () => {
  const location  = useLocation()
  const isStaffRoute =
    !location.pathname.includes("/adminhome/AddDoctor") &&  !location.pathname.includes("/adminhome/docEnterDetails") && !location.pathname.includes("/adminhome/docServices") && !location.pathname.includes("/adminhome/docReview") && !location.pathname.includes("/adminhome/docSuccessAdd")  &&
    //the pharmacist part
    !location.pathname.includes("/adminhome/Addpharmacist") &&  !location.pathname.includes("/adminhome/pharmEnterDetails") && !location.pathname.includes("/adminhome/pharmServices") && !location.pathname.includes("/adminhome/pharmReview") && !location.pathname.includes("/adminhome/pharmSuccessAdd")  &&
    //the nurse part
    !location.pathname.includes("/adminhome/AddNurse") &&  !location.pathname.includes("/adminhome/nurseEnterDetails") && !location.pathname.includes("/adminhome/nurseServices") && !location.pathname.includes("/adminhome/nurseReview") && !location.pathname.includes("/adminhome/nurseSuccessAdd")  &&
    //the lab-scientist part
    !location.pathname.includes("/adminhome/AddLabSci") &&  !location.pathname.includes("/adminhome/labEnterDetails") && !location.pathname.includes("/adminhome/labServices") && !location.pathname.includes("/adminhome/labReview") && !location.pathname.includes("/adminhome/labAddSuccess") &&
    //the domestic worker part
    !location.pathname.includes("/adminhome/AddDomWorker") &&  !location.pathname.includes("/adminhome/domEnterDetails") && !location.pathname.includes("/adminhome/domServices") && !location.pathname.includes("/adminhome/domReview") && !location.pathname.includes("/adminhome/domAddSuccess");

  const adminData = localStorage.getItem('admin');
  const admin = JSON.parse(adminData);

  return (
    <>
    <nav className="header">
      <div className="rule">
        <ul className="first-nav">
          <li><a><img src={Logo} alt="" className="logo" /></a></li>
          <li><Link to="/adminhome/">Staff</Link></li>
          <li><Link to="patients">Patients</Link></li>
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
        ) : location.pathname === "/adminhome/Addpharmacist" || location.pathname === "/adminhome/pharmEnterDetails" || location.pathname === "/adminhome/pharmServices" || location.pathname === "/adminhome/pharmReview" || location.pathname === "/adminhome/pharmSuccessAdd" ? (
          <PharmMenu />
        ) : location.pathname === "/adminhome/AddNurse" || location.pathname === "/adminhome/nurseEnterDetails" || location.pathname === "/adminhome/nurseServices" || location.pathname === "/adminhome/nurseReview" || location.pathname === "/adminhome/nurseSuccessAdd" ? (
          <NurseMenu />
        ) : location.pathname === "/adminhome/AddLabSci" || location.pathname === "/adminhome/labEnterDetails" || location.pathname === "/adminhome/labServices" || location.pathname === "/adminhome/labReview" || location.pathname === "/adminhome/labAddSuccess" ? (
          <LabMenu/>
        ) : location.pathname === "/adminhome/AddDomWorker" || location.pathname === "/adminhome/domEnterDetails" || location.pathname === "/adminhome/domServices" || location.pathname === "/adminhome/domReview" || location.pathname === "/adminhome/domAddSuccess" ? (
          <DomMenu />
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
