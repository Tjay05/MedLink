import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const DocAppointment = () => {
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
        <div className="appointment__wrapper">
            <h1>
                You have <span id="noOfPatients">{doCtor.length}</span> patient waiting, Dr <span id="docName">{doctor.firstname}</span>!!!
            </h1>
            <div className="patient-head">
                <p>Patient Name</p>
                <p>ID</p>
                <p>Gender</p>
            </div>

            <div className="loaded">{isLoading && <ClipLoader color="#35693f" className="loadImg" loading={isLoading} size={60} />}</div>

            {doCtor && doCtor.map((doCtor) => (
            <div className="await-table" key={doCtor._id}>
                <div className="awaiting-patients">
                    <p id="patientName">{`${doCtor.firstname} ${doCtor.lastname}`}</p>
                    <p id="patientId">{doCtor.id}</p>
                    <p id="gender">{doCtor.Gender}</p>
                </div>
                <Link to="/dochome/details">
                    <svg 
                        width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 2H16V16C16 16.5304 15.7893 17.0391 15.4142 17.4142C15.0391 17.7893 14.5304 18 14 18H6M9 13L12 10M12 10L9 7M12 10H2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Begin Appointment
                </Link>
            </div>
            ))}
        </div>
     );
}
 
export default DocAppointment;