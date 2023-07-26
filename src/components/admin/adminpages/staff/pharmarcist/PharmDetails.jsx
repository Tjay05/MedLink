import { NavLink, Outlet, useNavigate } from "react-router-dom";

const PharmDetails = ({ pharM }) => {

  const history = useNavigate();
  const handleNavigate = () => {history(-1)}

  return ( 
    <div className="wrapAddDoc">
      {pharM.map((pharmacist) => (
        <div className="patientDetails" key={pharmacist.id}>
          <div className="patientDetails1">
            <img src={pharmacist.avatar} alt="" />
            <div className="profile">
              <h3> {`${pharmacist.firstname} ${pharmacist.lastname}`}</h3>
              <p>{pharmacist.id}</p>
              <p>{pharmacist.email}</p>
              <p className="light">Added By: {pharmacist.addedBy} </p>
            </div>
          </div>
          <button onClick={handleNavigate} className="bckArrow">Back</button>
        </div>))}
        <nav className="patients">
          <ul>
            <li>
              <NavLink to="../pharmdetails/" >Personal Details</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet/>
          {/* <div className="docBio">
            <h2><span className="light">Full Name:</span> {`${pharmacist.firstname} ${pharmacist.lastname}`}</h2>
            <p><span className="light">Pharmacist's ID:</span> {pharmacist.id}</p>
            <p><span className="light">Pharmacist's Area of Specialization:</span> {pharmacist.area_Of_Specialization}</p>
            <p><span className="light">Pharmacist's Email Address:</span> {pharmacist.email}</p>
            <p><span className="light">Pharmacist's Number:</span> {pharmacist.number}</p>
            <p><span className="light">Pharmacist License Number:</span> {pharmacist.med_License_number}</p>
            <p><span className="light">Status:</span> {pharmacist.Status}</p>
            <p><span className="light">Pharmacist's Date of Birth:</span> {pharmacist.DOB}</p>
            <p><span className="light">Pharmacist Degree:</span> {pharmacist.medicalDegree}</p>
          </div> */}
        {/* </div> */}
      {/* ))} */}
    </div>
   );
}
 
export default PharmDetails;