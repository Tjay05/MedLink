import searchIcon from '../../assets/icons/search-icon.svg'
import Calendar from 'react-calendar';
import { useState ,useEffect } from "react";


const DocDashboard = () => {
    const doctorData = localStorage.getItem('doctor')
    const doctor = JSON.parse(doctorData);
    // console.log(doctor._id);
    const [doCtor , setDoCtor] = useState([])
      useEffect( ()=> {
        fetch(`https://hospital-management-backend.onrender.com/doctor/${doctor._id}/appointment`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
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
                    <input class="search__input" type="text" placeholder="Search apoointment, patient etc" />     
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
                    <a className="appointments" href="">
                        <svg
                            width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector" d="M44.7561 5.97992H42.1577V3.38156C42.1577 1.82255 41.1184 0.783203 39.5593 0.783203C38.0003 0.783203 36.961 1.82255 36.961 3.38156V5.97992H16.1741V3.38156C16.1741 1.82255 15.1348 0.783203 13.5758 0.783203C12.0168 0.783203 10.9774 1.82255 10.9774 3.38156V5.97992H8.37906C3.96185 5.97992 0.583984 9.35778 0.583984 13.775V16.3733H52.5511V13.775C52.5511 9.35778 49.1733 5.97992 44.7561 5.97992ZM0.583984 44.9553C0.583984 49.3725 3.96185 52.7503 8.37906 52.7503H44.7561C49.1733 52.7503 52.5511 49.3725 52.5511 44.9553V21.5701H0.583984V44.9553ZM39.5593 26.7668C41.1184 26.7668 42.1577 27.8061 42.1577 29.3651C42.1577 30.9241 41.1184 31.9635 39.5593 31.9635C38.0003 31.9635 36.961 30.9241 36.961 29.3651C36.961 27.8061 38.0003 26.7668 39.5593 26.7668ZM39.5593 37.1602C41.1184 37.1602 42.1577 38.1995 42.1577 39.7586C42.1577 41.3176 41.1184 42.3569 39.5593 42.3569C38.0003 42.3569 36.961 41.3176 36.961 39.7586C36.961 38.1995 38.0003 37.1602 39.5593 37.1602ZM26.5676 26.7668C28.1266 26.7668 29.1659 27.8061 29.1659 29.3651C29.1659 30.9241 28.1266 31.9635 26.5676 31.9635C25.0085 31.9635 23.9692 30.9241 23.9692 29.3651C23.9692 27.8061 25.0085 26.7668 26.5676 26.7668ZM26.5676 37.1602C28.1266 37.1602 29.1659 38.1995 29.1659 39.7586C29.1659 41.3176 28.1266 42.3569 26.5676 42.3569C25.0085 42.3569 23.9692 41.3176 23.9692 39.7586C23.9692 38.1995 25.0085 37.1602 26.5676 37.1602ZM13.5758 26.7668C15.1348 26.7668 16.1741 27.8061 16.1741 29.3651C16.1741 30.9241 15.1348 31.9635 13.5758 31.9635C12.0168 31.9635 10.9774 30.9241 10.9774 29.3651C10.9774 27.8061 12.0168 26.7668 13.5758 26.7668ZM13.5758 37.1602C15.1348 37.1602 16.1741 38.1995 16.1741 39.7586C16.1741 41.3176 15.1348 42.3569 13.5758 42.3569C12.0168 42.3569 10.9774 41.3176 10.9774 39.7586C10.9774 38.1995 12.0168 37.1602 13.5758 37.1602Z" fill="white"/>
                        </svg>
                        <div className="appoint-details">
                            <h3>{doCtor.length}</h3>
                            <p>Appointment Today</p>
                        </div>
                    </a>
                    <div className="patients">
                        <svg 
                            width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M15.1658 12.4779C15.1658 9.41515 16.3825 6.47781 18.5482 4.31209C20.7139 2.14637 23.6513 0.929688 26.714 0.929688C29.7768 0.929688 32.7142 2.14637 34.8799 4.31209C37.0456 6.47781 38.2623 9.41515 38.2623 12.4779C38.2623 15.5407 37.0456 18.4781 34.8799 20.6438C32.7142 22.8095 29.7768 24.0262 26.714 24.0262C23.6513 24.0262 20.7139 22.8095 18.5482 20.6438C16.3825 18.4781 15.1658 15.5407 15.1658 12.4779ZM15.1658 29.8003C11.3373 29.8003 7.66562 31.3212 4.95848 34.0283C2.25133 36.7355 0.730469 40.4072 0.730469 44.2356C0.730469 46.5327 1.64298 48.7357 3.26727 50.36C4.89156 51.9843 7.09457 52.8968 9.39166 52.8968H44.0364C46.3335 52.8968 48.5365 51.9843 50.1608 50.36C51.7851 48.7357 52.6976 46.5327 52.6976 44.2356C52.6976 40.4072 51.1768 36.7355 48.4696 34.0283C45.7625 31.3212 42.0908 29.8003 38.2623 29.8003H15.1658Z" fill="white"/>
                        </svg>
                        <div className="person-details">
                            <h3>0</h3>
                            <p>In-patients</p>
                        </div>
                    </div>
                    <div className="review">
                        <svg 
                            width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector" d="M47.7138 0.779297H6.14007C3.28188 0.779297 0.943359 3.11782 0.943359 5.97601V52.7464L11.3368 42.353H47.7138C50.572 42.353 52.9105 40.0145 52.9105 37.1563V5.97601C52.9105 3.11782 50.572 0.779297 47.7138 0.779297ZM11.3368 31.9596V25.5416L29.2135 7.66494C29.7332 7.14527 30.5386 7.14527 31.0583 7.66494L35.6574 12.264C36.1771 12.7837 36.1771 13.5892 35.6574 14.1089L17.7547 31.9596H11.3368ZM39.9187 31.9596H23.0294L28.2261 26.7629H39.9187C41.3478 26.7629 42.5171 27.9321 42.5171 29.3612C42.5171 30.7903 41.3478 31.9596 39.9187 31.9596Z" fill="white"/>
                        </svg>
                        <div className="review-deatils">
                            <h3>0</h3>
                            <p>Patient Review</p>
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
                    <div className="awaiting-patients">
                        <p id="patientName">Tosin Poppins</p>
                        <p id="patientId">87364523TP</p>
                        <p id="bookingDate">01/01/2023</p>
                    </div>
                </section>
            </div>
            <div className="line"></div>
            <Calendar />
        </div>
     );
}
 
export default DocDashboard;