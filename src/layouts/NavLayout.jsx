import { NavLink, Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Logo from "../assets/icons/logo.svg"
import blocks from "../assets/icons/blocks.svg"
import charts from "../assets/icons/chart.svg"
import chat from "../assets/icons/chat.svg"

import Homelayout from "./Home-layout";
import Appointmentlayout from "./Appointment-layout";
import Notificationlayout from "./Notification-layout";
import AlertLayout from "./AlertLayout"; 

const NavLayout = () => {
  const [notifications , setNotifications] = useState([])
  const location = useLocation()
  const isDocRoute = 
    !location.pathname.includes("/dochome/appointment") && 
    !location.pathname.includes("/dochome/details") && 
    !location.pathname.includes("/dochome/notifications") && 
    !location.pathname.includes("/dochome/alert"); 
  
  const doctorData = localStorage.getItem('doctor')
  const doctor = JSON.parse(doctorData);

  useEffect( ()=> {
    fetch(`https://hospital-management-backend.onrender.com/doctor/${doctor._id}/appointment`)
      .then((res) => res.json())
      .then((data) => {
        setNotifications(data);
      })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <>
      <>
        <nav className="header">
          <div className="rule">
            <ul className="first-nav">
              <li><a><img src={Logo}/></a></li>
              <li>
                <NavLink to="./">Home</NavLink>
              </li>
              <li>
                <NavLink to="appointment">Appointments</NavLink>
              </li>
              <li>
                <NavLink to="notifications">Notifications<span className="num">{notifications.length}</span></NavLink>
              </li>
              <li>
                <NavLink to="alert">Alert</NavLink>
              </li>
              </ul>
              <ul className="second-nav">
              <li><a><img src={blocks} /></a></li>
              <li><a><img src={charts} /></a></li>
              <li><a><img src={chat} /></a></li>
              <li>
                <Link to="docProfile">
                  <div className="profile">
                    <p id="docName">{`${doctor.firstname} ${doctor.lastname}`}</p>
                    <span>Doctor</span>
                  </div>
                  <p className="initials">{doctor.firstname[0]}</p>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <header>
          <div className="rule">
            {
              isDocRoute ? (
                <Homelayout/>
              ) : location.pathname.includes("/docHome/appointment") /*|| location.pathname.includes("/docHome/details")*/ ? (
                <Appointmentlayout/>
              ) : location.pathname.includes("docHome/notifications") ? (
                <Notificationlayout/>
              ) : (
                <AlertLayout/>
              )
            }
          </div>
        </header>
      </>

      <main className="context rule">
        <Outlet/>
      </main>
    </>
  )
};

export default NavLayout;