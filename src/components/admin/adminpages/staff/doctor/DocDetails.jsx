import { NavLink, Outlet, useNavigate } from "react-router-dom";

const DocDetails = ({ pers }) => {

  const history = useNavigate();
  const handleNavigate = () => {history('/adminhome/')}

  return ( 
    <div className="wrapAddDoc">
      {pers.map((doctor) => (
        <div className="patientDetails" key={doctor.id} >
          <div className="patientDetails1">
            <img src={doctor.avatar} alt="" />
            <div className="profile">
              <h3> {`${doctor.firstname} ${doctor.lastname}`}</h3>
              <p>{doctor.id}</p>
              <p>{doctor.email}</p>
              <p className="light">Added By: {doctor.addedBy} </p>
            </div>
          </div>
          <button onClick={handleNavigate} className="bckArrow">Back</button>
        </div>)
        )
      }
      <nav className="patients">
        <ul>
          <li>
            <NavLink to="../docdetails/" >Personal Details</NavLink>
          </li>
          <li>
            <NavLink to="DocAPPointment" >Appointments</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
      
    </div>
   );
}
 
export default DocDetails;