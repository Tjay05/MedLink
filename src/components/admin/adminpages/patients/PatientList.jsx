import arrow from "../../../../assets/icons/arrow.svg"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"

const PatientList = () => {
	const [patient, setPatient] = useState([]);
	
	const history = useNavigate()
	const handleNxtPage = () => history('patientdetails');

	// Fetch
	useEffect( () => {
		fetch("https://hospital-management-backend.onrender.com/patient/all")
		.then((res) => res.json())
		.then((data) => {
			setPatient(data);
		})
		.catch((error) => {
			console.log(error);
		});
	}, [])

	return ( 
		<div className="wrapPatients">
			<h2>List of Patients</h2>
			<div className="patients__info" >
				<p>Name</p>
				<p>ID</p>
				<p>Email</p>
				<p>Phone Number</p>
				<p>Date Added</p>
			</div>

			{patient.map((patient) => (<div className="all__patients" key={patient.id} >
				<div className="pic-profile">
					<img src={patient.avatar} alt="" />
					<p>{`${patient.firstname} ${patient.lastname}`}</p>
				</div>
				<p>{patient.id}</p>
				<p>{patient.email}</p>
				<p>{patient.number}</p>
				<div className="date-Added">
					<div className="date">
						<p>{patient.dateAdded}</p>
						<p className="light">{patient.timeAdded}</p>
					</div>
					<img onClick={handleNxtPage} src={arrow} alt="arrow" />
				</div>
			</div>))}
		</div>
	);
}
 
export default PatientList;