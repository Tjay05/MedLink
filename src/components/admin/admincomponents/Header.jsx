import Logo from "../../../assets/icons/logo.svg";
import blocks from "../../../assets/icons/blocks.svg"
import chart from "../../../assets/icons/chart.svg"
import chat from "../../../assets/icons/chat.svg"
import dots from "../../../assets/icons/Dots.svg"
import { Link, NavLink, Outlet } from "react-router-dom";
import DocMenu from "../adminpages/staff/doctor/docBasicInfo/DocMenu";
import PharmMenu from "../adminpages/staff/pharmarcist/pharmBasicInfo/PharmMenu";
const Header = () => {

  const isStaffRoute =
  // location.pathname.startsWith("/staff" ) &&
  !location.pathname.includes("/adminhome/AddDoctor") &&  !location.pathname.includes("/staff/doctor/docEnterDetails") && !location.pathname.includes("/staff/doctor/docServices") && !location.pathname.includes("/staff/doctor/docReview") && !location.pathname.includes("/staff/doctor/docSuccessAdd")  &&
  //the pharmacist part
   !location.pathname.includes("/staff/pharmarcist/pharmBasicInfo") &&  !location.pathname.includes("/staff/pharmarcist/pharmEnterDetails") && !location.pathname.includes("/staff/pharmarcist/pharmServices") && !location.pathname.includes("/staff/pharmarcist/pharmReview") && !location.pathname.includes("/staff/pharmarcist/pharmSuccessAdd")  &&
   //the nurse part
    !location.pathname.includes("/staff/nurses/nurseBasicInfo") &&  !location.pathname.includes("/staff/nurses/nurseEnterDetails") && !location.pathname.includes("/staff/nurses/nurseServices") && !location.pathname.includes("/staff/nurses/nurseReview") && !location.pathname.includes("/staff/nurses/nurseSuccessAdd")  &&
    //the lab-scientist part
     !location.pathname.includes("/staff/labScientist/labBasicinfo") &&  !location.pathname.includes("/staff/labScientist/labEnterDetails") && !location.pathname.includes("/staff/labScientist/labServices") && !location.pathname.includes("/staff/labScientist/labReview") && !location.pathname.includes("/staff/labScientist/labSuccessAdd") &&
     //the domestic worker part
      !location.pathname.includes("/staff/domesticWorkers/domBasicInfo") &&  !location.pathname.includes("/staff/domesticWorkers/domEnterDetails") && !location.pathname.includes("/staff/domesticWorkers/domServices") && !location.pathname.includes("/staff/domesticWorkers/domReview") && !location.pathname.includes("/staff/domesticWorkers/domSuccessAdd");

  return (
    <>
    <nav className="header">
      <div className="rule">
        <ul className="first-nav">
          <li><a><img src={Logo} alt="" className="logo" /></a></li>
          <li><Link to="/adminhome/">Staff</Link></li>
          <li><Link to="patients">Patients</Link></li>
          <li>Appiontments</li>
          <li>Payroll</li>
          <li>NHIS Scheme</li>
        </ul>
        <ul className="second-nav">
          <li><a><img src={blocks} /></a></li>
          <li><a><img src={chart} /></a></li>
          <li><a><img src={chat} /></a></li>
          <li>
            <a>
              <div className="profile">
                <p id="adminName">Marvin Mckinney</p>
                <span>Admin</span>
              </div>
              <p>M</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <header>
      <div className="rule">
        {isStaffRoute && (
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
        ) 
         
        // <DocMenu />
        }
      </div>
    </header>

    <main className="context rule">
        <Outlet/>
    </main>
    </>
  );
};

export default Header;
