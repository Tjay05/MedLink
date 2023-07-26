import { NavLink, Outlet, useNavigate } from "react-router-dom";

const NurseDetails = ({ nuRse }) => {

  const history = useNavigate();
  const handleNavigate = () => {history(-1)}

  return ( 
    <div className="wrapAddDoc">
    {nuRse.map((Nurse) => (
      <div className="patientDetails" key={Nurse.id} >
        <div className="patientDetails1">
          <img src={Nurse.avatar} alt="" />
          <div className="profile">
            <h3>{`${Nurse.firstname} ${Nurse.lastname}`}</h3>
            <p>{Nurse.id}</p>
            <p>{Nurse.email}</p>
            <p className="light">Added By: {Nurse.addedBy}</p>
          </div>
        </div>
        <button onClick={handleNavigate} className="bckArrow">Back</button>
      </div>)
      )
    }
    <nav className="patients">
      <ul>
        <li>
          <NavLink to="../nursedetails/" >Personal Details</NavLink>
        </li>
      </ul>
    </nav>
    <Outlet/>

    </div>
  )
}
 
export default NurseDetails;