import { useState, useEffect } from "react";

import logoutbtn from "../../assets/icons/logout.svg"

const DocProfile = () => {
    const doctorData = localStorage.getItem('doctor')
    const doctor = JSON.parse(doctorData);
    // console.log(doctor._id);
    const [doCtor , setDoCtor] = useState([])
      useEffect( ()=> {
        fetch(`https://hospital-management-backend.onrender.com/doctor/all`)
        .then((res) => res.json())
        .then((data) => {
          setDoCtor(data);
          console.log(doCtor);
        })
        .catch((error) => {
          console.log(error);
        })
    }, []);
    return ( 
        <>
            <div className="profileHead">
                <h3>Profile</h3>
                <button>
                    <img src={logoutbtn} alt="" />
                    <p>Logout</p>
                </button>
            </div>
            <>
                <div className="profInitials">{doctor.firstname[0]}</div>
                <div className="profDetails">
                    <p>Profile Name : {`${doctor.firstname} ${doctor.lastname}`}</p>
                    <p>ID: {doctor.id}</p>
                    {/* <p>Medical License Number</p> */}
                    <p>Area of Specialization: {doCtor.medicalDegree}</p>
                    <p></p>
                    <p></p>
                </div>
            </>
        </>
     );
}
 
export default DocProfile;