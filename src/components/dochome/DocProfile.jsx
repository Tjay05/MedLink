import { useState, useEffect } from "react";
import camera from "../../assets/icons/camera.svg"
import logoutbtn from "../../assets/icons/logout.svg"
import {useNavigate} from "react-router-dom"

const DocProfile = () => {
    const doctorData = localStorage.getItem('doctor')
    const doctor = JSON.parse(doctorData);

    const history = useNavigate();
    const [isPending, setIsPending] = useState(false);

    const handleClick = async(doctor_id) => {

        setIsPending(true);
        try {
            const response = await fetch(`https://hospital-management-backend.onrender.com/doctor/${doctor._id}/logout`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                Status:'Offline'
                })
            })  
            const data = await response.json();
            if(response.ok){
                setIsPending(false)
                localStorage.removeItem('doctor');
                history('/');
            }
        } catch(err) {
            console.log(err);
        } 
    }

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
                {!isPending && <button onClick={() =>handleClick(doctor._id)} > <img src={logoutbtn} alt="" />Logout</button>}
                {isPending && <button>Logging Out...</button>}
            </div>
        </div>
     );
}
 
export default DocProfile;