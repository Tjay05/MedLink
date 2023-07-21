import { NavLink, Outlet, Link } from "react-router-dom";
import Logo from "../assets/icons/logo.svg"
import blocks from "../assets/icons/blocks.svg"
import charts from "../assets/icons/chart.svg"
import chat from "../assets/icons/chat.svg"

import Homelayout from "./Home-layout";
import Appointmentlayout from "./Appointment-layout";
import Notificationlayout from "./Notification-layout";

import { useLocation } from "react-router-dom";

export default function NavLayout() {
    const location = useLocation();
    const isDocRoute = !location.pathname.includes("/dochome/") && !location.pathname.includes("/dochome/appointment") && !location.pathname.includes("/dochome/details") && !location.pathname.includes("/dochome/notifications") ; 


    const doctorData = localStorage.getItem('doctor')
    const doctor = JSON.parse(doctorData);
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
                                <NavLink to="notifications">Notifications</NavLink>
                            </li>
                            <li><a>Messages</a></li>
                        </ul>
                        <ul className="second-nav">
                            <li><a><img src={blocks} /></a></li>
                            <li><a><img src={charts} /></a></li>
                            <li><a><img src={chat} /></a></li>
                            <li>
                                <a>
                                    <div className="profile">
                                        <p id="docName">{`${doctor.firstname} ${doctor.lastname}`}</p>
                                        <span>Doctor</span>
                                    </div>
                                    <Link to="docProfile"><p className="initials">{doctor.firstname[0]}</p></Link>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <header>
                    <div className="rule">
                        {
                            isDocRoute ? (<Homelayout/>): location.pathname === "/docHome/appointment" || location.pathname === "/docHome/details" ? (<Appointmentlayout/>) : location.pathname === "/docHome/notification" ? (<Notificationlayout/>) : (<Homelayout/>)
                        }
                    </div>
                </header>
            </>

            <main className="context rule">
                <Outlet/>
            </main>
        </>
    )
}