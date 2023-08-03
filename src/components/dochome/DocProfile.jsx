import { useState, useEffect } from "react";
import camera from "../../assets/icons/camera.svg"
import logoutbtn from "../../assets/icons/logout.svg"
import {useNavigate} from "react-router-dom"

const DocProfile = () => {
    const doctorData = localStorage.getItem('doctor')
    const doctor = JSON.parse(doctorData);

    const history = useNavigate();
    const [isPending, setIsPending] = useState(false);

    const [avatar, setAvatar] = useState(null)
    const handlePictureUpload = (event) => {
        const file = event.target.files[0];
        setAvatar(file);
      };

    const handleUpload = async() => {
        try {
            const response = await fetch(`https://hospital-management-backend.onrender.com/doctor/${doctor._id}/upload-picture`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                },
                body: JSON.stringify({avatar: avatar})
            })
            const data = await response.json();
            if(response.ok){
                console.log('Upload success')
                history('../docProfile');
                setAvatar(null);
            }
        } catch(err){
            console.log(err);
        }
    }
    

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
                    <input
                        onChange={handlePictureUpload}  
                        type="file" 
                        accept="image/*" 
                        id="upload" 
                    />
                    {avatar && (
                      <div className='av__upload'>
                        <img src={URL.createObjectURL(avatar)} alt="Selected" />
                        <button onClick={handleUpload} >Upload</button>
                      </div>
                    )}
                    <label htmlFor="upload">{!avatar && <img className="cam" src={camera} alt="" />}</label> 
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
                {isPending && <button disabled>Logging Out...</button>}
            </div>
        </div>
     );
}
 
export default DocProfile;