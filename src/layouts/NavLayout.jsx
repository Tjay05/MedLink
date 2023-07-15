import { NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/icons/logo.svg"
import blocks from "../assets/icons/blocks.svg"
import charts from "../assets/icons/chart.svg"
import chat from "../assets/icons/chat.svg"

export default function NavLayout() {
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
                                        <p id="docName">Jacob Jones</p>
                                        <span>Doctor</span>
                                    </div>
                                    <p>J</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <header>
                    <div className="rule">
                        <p style={{paddingLeft: "4.65rem"}}>Home</p>
                    </div>
                </header>
            </>

            <main className="context rule">
                <Outlet/>
            </main>
        </>
    )
}