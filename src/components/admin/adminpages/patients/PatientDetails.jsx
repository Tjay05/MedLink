import avatar from "../../../../assets/icons/fairAvatar.svg"
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const PatDetails = ({ patientDetails }) => {
  const history = useNavigate();
  const handleNavigate = () => {history(-1)}

  return ( 
    <div className="wrapPatients">
      <div className="patientDetails">
        <div className="patientDetails1 DND">
          <img className="omoh" src={patientDetails.avatar} alt="" />
          <div className="profile">
            <h3>{`${patientDetails.firstname} ${patientDetails.lastname}`}</h3>
            <p>{patientDetails.id}</p>
          </div>
        </div>
        <button onClick={handleNavigate} className="bckArrow">Back</button>
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