import { NavLink, Outlet } from "react-router-dom";

export default function NavLayout() {
    return (
        <>
            <>
                <nav className="header">
                    <div className="rule">
                        <ul className="first-nav">
                            <li><a>
                                    <svg
                                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.8" d="M12 0V24" stroke="#F4FFF3" stroke-width="8" stroke-miterlimit="10"/>
                                        <path opacity="0.6" d="M0 12H24" stroke="#F4FFF3" stroke-width="8" stroke-miterlimit="10"/>
                                    </svg>
                                </a>
                            </li>
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
                            <li><a>
                                    <svg
                                        width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Layout-4-blocks">
                                        <rect id="Rectangle 7" x="4.83398" y="5.33301" width="8.45833" height="8.45833" rx="1.5" fill="white"/>
                                        <path id="Combined Shape" opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M15.709 6.83301C15.709 6.00458 16.3806 5.33301 17.209 5.33301H22.6673C23.4957 5.33301 24.1673 6.00458 24.1673 6.83301V12.2913C24.1673 13.1198 23.4957 13.7913 22.6673 13.7913H17.209C16.3806 13.7913 15.709 13.1198 15.709 12.2913V6.83301ZM4.83398 17.708C4.83398 16.8796 5.50556 16.208 6.33398 16.208H11.7923C12.6207 16.208 13.2923 16.8796 13.2923 17.708V23.1663C13.2923 23.9948 12.6207 24.6663 11.7923 24.6663H6.33399C5.50556 24.6663 4.83398 23.9948 4.83398 23.1663V17.708ZM17.209 16.208C16.3806 16.208 15.709 16.8796 15.709 17.708V23.1663C15.709 23.9948 16.3806 24.6663 17.209 24.6663H22.6673C23.4957 24.6663 24.1673 23.9948 24.1673 23.1663V17.708C24.1673 16.8796 23.4957 16.208 22.6673 16.208H17.209Z" fill="white"/>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li><a>
                                    <svg
                                        width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Equalizer">
                                        <rect id="Rectangle 62 Copy" opacity="0.3" x="15.709" y="4.96118" width="3.625" height="18.0779" rx="1.8125" fill="white"/>
                                        <rect id="Rectangle 62 Copy 2" x="9.66602" y="10.6106" width="3.625" height="12.4286" rx="1.8125" fill="white"/>
                                        <rect id="Rectangle 62 Copy 4" x="21.75" y="12.8701" width="3.625" height="10.1688" rx="1.8125" fill="white"/>
                                        <rect id="Rectangle 62 Copy 3" x="3.625" y="15.1299" width="3.625" height="7.90909" rx="1.8125" fill="white"/>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li><a>
                                    <svg
                                        width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group-chat">
                                        <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M23.1448 17.8074C23.4672 18.0977 23.981 17.8676 23.9792 17.4338L23.9618 13.0362V5.93092C23.9618 4.62288 22.7836 3.5625 21.3302 3.5625H9.04955C7.59617 3.5625 6.41797 4.62288 6.41797 5.93092V9.1875H13.6661C15.3229 9.1875 16.6661 10.5306 16.6661 12.1875V15.4046H20.4749L23.1448 17.8074Z" fill="white"/>
                                        <path id="Combined Shape_2" opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2.06836 17.625V12.9375C2.06836 11.902 3.0011 11.0625 4.15169 11.0625H12.485C13.6356 11.0625 14.5684 11.902 14.5684 12.9375V17.625C14.5684 18.6605 13.6356 19.5 12.485 19.5H4.27225L2.92193 20.6632C2.59784 20.9424 2.0956 20.7121 2.0956 20.2844V17.929C2.07768 17.83 2.06836 17.7285 2.06836 17.625ZM6.25 14.3438C6.25 14.0849 6.45987 13.875 6.71875 13.875H12.0312C12.2901 13.875 12.5 14.0849 12.5 14.3438C12.5 14.6026 12.2901 14.8125 12.0312 14.8125H6.71875C6.45987 14.8125 6.25 14.6026 6.25 14.3438ZM9.84375 15.75C9.58487 15.75 9.375 15.9599 9.375 16.2187C9.375 16.4776 9.58487 16.6875 9.84375 16.6875H12.0313C12.2901 16.6875 12.5 16.4776 12.5 16.2187C12.5 15.9599 12.2901 15.75 12.0313 15.75H9.84375Z" fill="white"/>
                                        </g>
                                    </svg>
                                </a>
                            </li>
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
                <Outlet  />
            </main>
        </>
    )
}