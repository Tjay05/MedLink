import searchIcon from '../../assets/icons/search-icon.svg'
import apoointment from '../../assets/icons/appointment.svg'
import patient from '../../assets/icons/patient.svg'
import review from '../../assets/icons/review.svg'
import Calendar from 'react-calendar';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const DocDashboard = () => {
    const doctorData = localStorage.getItem('doctor')
    const doctor = JSON.parse(doctorData);
    // console.log(doctor._id);
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
        <div className="dashwrap">
            <div className="doctor-dashboard">
                <form className="search-bar" method="get">
                    <input class="search__input" type="text" placeholder="Search appointment, patient etc" />     
                    <button className="search-icon">
                        <img src={searchIcon} alt="" />    
                    </button>              
                </form>
                <div className="grid-container">
                    <div className="doc-welcome">
                        <div className="chai">
                            <div className="text-wrapper">Welcome, Dr</div>
                            <h1 className="h-1">{`${doctor.firstname} ${doctor.lastname}`}</h1>
                            <div className="welcome-line"></div>
                            <p className="tip" id="healthTip">Another day to save lives. Have a great day at work.</p>
                        </div>
                    </div>
                    <Link className="appointments" to="appointment">
                        <img src={apoointment} alt="" />
                        <div className="appoint-details">
                            <p>Check my Appointments</p>
                        </div>
                    </Link>
                    <div className="patients">
                        <img src={patient} alt="" />
                        <div className="person-details">
                            <h3>{doCtor.length}</h3>
                            <p>In-patients</p>
                        </div>
                    </div>
                    <div className="review">
                        <img src={review} alt="" />
                        <div className="review-deatils">
                            <h3>0</h3>
                            <p>All Patients</p>
                        </div>
                    </div>
                </div>
                <section className="recent-patients">
                    <h2>Recent Patients</h2>
                    <div className="patient-head">
                        <p>Patient Name</p>
                        <p>ID</p>
                        <p>Date</p>
                    </div>
                    {doCtor.map((doCtor) => (
                        <div className="awaiting-patients">
                            <p id="patientName">{`${doCtor.firstname} ${doCtor.lastname}`}</p>
                            <p id="patientId">{doCtor.id}</p>
                            <p id="bookingDate">01/01/2023</p>
                        </div>
                    ))}
                </section>
            </div>
            <div className="line"></div>
            <Calendar />
        </div>
     );
}
 
export default DocDashboard;