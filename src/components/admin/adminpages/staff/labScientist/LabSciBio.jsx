import { NavLink, Outlet, useNavigate } from "react-router-dom";

const LabSciBio = ({ labScientist }) => {

  const history = useNavigate();
  const handleNavigate = () => {history(-1)}

  return ( 
    <div className="wrapAddDoc">
      {labScientist.map((lab) => (
        <div className="patientDetails" key={lab.id} >
          <div className="patientDetails1">
            <img src={lab.avatar} alt="" />
            <div className="profile">
              <h3> {`${lab.firstname} ${lab.lastname}`}</h3>
              <p>{lab.id}</p>
              <p>{lab.email}</p>
              <p className="light">Added By: {lab.addedBy} </p>
            </div>
          </div>
          <button onClick={handleNavigate} className="bckArrow">Back</button>
        </div>)
        )
      }
      <nav className="patients">
        <ul>
          <li>
            <NavLink to="../labdetails/" >Personal Details</NavLink>
          </li> 
        </ul>
      </nav>
      <Outlet/>
      
    </div>
   );
}
 
export default LabSciBio;