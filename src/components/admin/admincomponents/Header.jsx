import Logo from "../../../assets/icons/logo.svg";
import blocks from "../../../assets/icons/blocks.svg"
import chart from "../../../assets/icons/chart.svg"
import chat from "../../../assets/icons/chat.svg"
import { Link, Outlet } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header">
      <div className="rule">
        <ul className="first-nav">
          <li><a><img src={Logo} alt="" className="logo" /></a></li>
          <li><Link to="staff">Staff</Link></li>
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
  );
};

export default Header;
