import { useState, useEffect } from "react";
import notification from "../../assets/icons/notification-iconsvg.svg"

const DocNotifications = () => {
    const doctorData = localStorage.getItem('doctor')
    const doctor = JSON.parse(doctorData);

    const [doCtor , setDoCtor] = useState([])
    useEffect( ()=> {
        fetch(`https://hospital-management-backend.onrender.com/doctor/${doctor._id}/appointment`)
        .then((res) => res.json())
        .then((data) => {
          setDoCtor(data);
        })
        .catch((error) => {
          console.log(error);
        })
    }, []);
    return ( 
        <div className="doc-notifications">
            <div className="doc-details">
                <h1 id="docName">{`${doctor.firstname} ${doctor.lastname}`}</h1>
                <p id="docId">{doctor.id}</p>
            </div>
            {doCtor.map((doCtor) => (
                <div className="notification-preview">
                <img src={notification} alt="" />
                <p className="notification-message">{doCtor}</p>
            </div>
            ))}
            
        </div>
     );
}
 
export default DocNotifications;