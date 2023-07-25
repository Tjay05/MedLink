import avatar from "../../../../assets/icons/fairAvatar.svg"
import { NavLink, Outlet } from "react-router-dom";

const PatDetails = () => {
  return ( 
    <div className="wrapPatients">
      <div className="patientDetails">
        <img src={avatar} alt="" />
        <div className="profile">
          <h3>Tosin Poppins</h3>
          <p>87234991OA</p>
        </div>
      </div>
      <nav className="patients">
        <ul>
          <li>
            <NavLink to="../patientdetails">Previous Appointments</NavLink>
          </li>
          <li>
            <NavLink to="prevDiagnosis" >Previous Diagnosis</NavLink>
          </li>
          <li>
            <NavLink to="prevPrescribtion" >Previous Prescription</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
   );
}
 
export default PatDetails;