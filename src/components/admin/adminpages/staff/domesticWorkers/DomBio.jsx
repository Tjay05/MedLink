import { NavLink, Outlet, useNavigate } from "react-router-dom";

const DomBio = ({ domWk }) => {

  const history = useNavigate();
  const handleNavigate = () => {history('/adminhome/')}

  return ( 
    <div className="wrapAddDoc">
      {domWk.map((domW) => (
        <div className="patientDetails" key={domW.id} >
          <div className="patientDetails1">
            <img src={domW.avatar} alt="" />
            <div className="profile">
              <h3> {`${domW.firstname} ${domW.lastname}`}</h3>
              <p>{domW.id}</p>
              <p>{domW.email}</p>
              <p className="light">Added By: {domW.addedBy} </p>
            </div>
          </div>
          <button onClick={handleNavigate} className="bckArrow">Back</button>
        </div>)
        )
      }
      <nav className="patients">
        <ul>
          <li>
            <NavLink to="../domworkerdetails/" >Personal Details</NavLink>
          </li> 
        </ul>
      </nav>
      <Outlet/>
      
    </div>
 );
}
 
export default DomBio;