import { useState, useEffect } from "react"; 
import logoutbtn from "../../assets/icons/logout.svg";
import { useNavigate } from "react-router-dom";
import { TbCameraPlus } from 'react-icons/tb';
import whiteAvatar from "../../assets/icons/Avatar1.svg"
import { GrClose } from "react-icons/gr";

const DocProfile = () => {
    const history = useNavigate();
    const [isClosed, setIsClosed] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const [pic, setPic] = useState(null);
    
    const doctorData = localStorage.getItem('doctor')
    const doctor = JSON.parse(doctorData);
    const handleFileChange = (event) => setAvatar(event.target.files[0]); 

    useEffect( () => {
        setIsLoading(true);
        fetch(`https://hospital-management-backend.onrender.com/doctor/${doctor._id}/get-image`)
          .then((res) => res.json())
          .then((data) => {
            setPic(data);
            setIsLoading(false);
            console.log(pic);
          })
          .catch((error) => {
            console.log(error);
            setIsLoading(false)
          });
      }, []);

    const handleExit = () => setIsClosed(true);  

    const handleUpload = async() => {
        setIsUploading(true);
        try {
            console.log(avatar);
            const formData = new FormData();
            formData.append('image', avatar )
            const response = await fetch(`https://hospital-management-backend.onrender.com/doctor/${doctor._id}/upload-picture`, {
                method: 'POST',
                body: formData,
            })
            const data = await response.json();
            if(response.ok){
                console.log(data);
                setIsUploading(false);
                setIsClosed(true);
                setPic(URL.createObjectURL(avatar));
            }else{
                console.log('Image upload failed',data);
                setIsUploading(false);
            }
        } catch(err){
            console.log('Error uploading image:', err);
            setIsUploading(false);
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
            } else {
                setIsPending(false)
            }
        } catch(err) {
            console.log(err);
        } 
    }

    return ( 
        <div className="profileWrap">
            {avatar && !isClosed && (
                      <div className='av__upload'>
                        <div className="sideNav">
                        <div className="closeIcon"><GrClose onClick={handleExit} className='closeIcon__icon ' /></div>
                            <div className="sideNavProf">
                                <img src={URL.createObjectURL(avatar)} alt="Selected" />
                                {!isUploading && <button onClick={handleUpload} >Update</button>}
                                {isUploading && <button>Updating Display pic...</button>}
                            </div>
                        </div>
                      </div>
                    )}
            <div className="profilePic">
                <img className="PiC" src={pic === null ? whiteAvatar : pic } alt='Profile picture' />
                <div className="ndPic">
                    <input
                        onChange={handleFileChange}  
                        type="file" 
                        accept="image/png,/image/jpeg,/image/jpg" 
                        id="upload" 
                    />
                    <label htmlFor="upload">{ <TbCameraPlus className="cam" />}</label> 
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