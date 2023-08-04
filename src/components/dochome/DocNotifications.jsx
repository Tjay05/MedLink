import { useState, useEffect } from "react";
import notification from "../../assets/icons/notification-iconsvg.svg"
import { ClipLoader } from "react-spinners";

const DocNotifications = () => {
    const doctorData = localStorage.getItem('doctor')
    const doctor = JSON.parse(doctorData);
    const [isLoading, setIsLoading] = useState(false);

    const [doCtor , setDoCtor] = useState([])
    useEffect( ()=> {
        setIsLoading(true);
        fetch(`https://hospital-management-backend.onrender.com/doctor/${doctor._id}/appointment`)
        .then((res) => res.json())
        .then((data) => {
          setDoCtor(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        })
    }, []);
    return ( 
        <div className="doc-notifications">
            <div className="doc-details">
                <h1 id="docName">{`${doctor.firstname} ${doctor.lastname}`}</h1>
                <p id="docId">{doctor.id}</p>
            </div>

            <div className="loaded">{isLoading && <ClipLoader color="#35693f" className="loadImg" loading={isLoading} size={60} />}</div>
            
            {doCtor && doCtor.map((doCtor) => (
                <div className="notification-preview" key={doCtor._id}>
                    <img src={notification} alt="" />
                    <p className="notification-message">You have a new appointment with {`${doCtor.firstname} ${doCtor.lastname}(${doCtor.id})`} scheduled for {doCtor.time}</p>
                </div>
                
            ))}
            
        </div>
     );
}
 
export default DocNotifications;