import { useState, useEffect } from "react";
import camera from "../../assets/icons/camera.svg"
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
        <div className="profileWrap">
            <div className="profilePic">
                <img className="PiC" src={doctor.avatar}/>
                <div className="ndPic">
                    <img src={camera} alt="" /> 
                </div>
            </div>
            <div className="profileHead">
                <h2>Profile</h2>
            </div>
            <div className="profDetails">
                <p><span id="light">Profile Name: </span> {`${doctor.firstname} ${doctor.lastname}`}</p>
                <p><span id="light">ID:</span> {doctor.id}</p>
                <p><span id="light">Medical License Number:</span> {doctor.med_License_number} </p>
                <p><span id="light">Area of Specialization:</span> {doctor.areaOfSpecialization}</p>
                <p><span id="light">Email:</span> {doctor.email} </p>
                <button> <img src={logoutbtn} alt="" />Logout</button>
            </div>
        </div>
     );
}
 
export default DocProfile;