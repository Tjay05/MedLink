import { useState, useEffect } from "react";
import notification from "../../assets/icons/notification-iconsvg.svg"
import { ClipLoader } from "react-spinners";

const DocAlert = () => {
  const doctorData = localStorage.getItem('doctor')
  const doctor = JSON.parse(doctorData);
  const [isLoading, setIsLoading] = useState(false);

  const [alert , setAlert] = useState([])
  useEffect( ()=> {
      setIsLoading(true);
      fetch(`https://hospital-management-backend.onrender.com/doctor/${doctor._id}/appointment`)
      .then((res) => res.json())
      .then((data) => {
        setAlert(data);
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
            </div>

            <div className="loaded">{isLoading && <ClipLoader color="#35693f" className="loadImg" loading={isLoading} size={60} />}</div>
            
            {alert && alert.map((alert) => (
                <div className="notification-preview" key={alert._id}>
                    <img src={notification} alt="" />
                    <p className="notification-message"> </p>
                </div>
                
            ))}
            
        </div>
     );
}
 
export default DocAlert;