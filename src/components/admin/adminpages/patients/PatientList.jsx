import arrow from "../../../../assets/icons/arrow.svg"
import { useNavigate } from "react-router-dom"
import { useEffect, useState} from "react"
import { ClipLoader } from "react-spinners";

const PatientList = ({ patientDetails, setPatientDetails }) => {
	const [patient, setPatient] = useState([]);
	
	const history = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
	
	// Fetch
	useEffect( () => {
		setIsLoading(true);
		fetch("https://hospital-management-backend.onrender.com/patient/all")
		.then((res) => res.json())
		.then((data) => {
			setPatient(data);
      setIsLoading(false);
		})
		.catch((error) => {
			console.log(error);
			setIsLoading(false);
		});
	}, [])

	const handleNxtPage = (patient_Id) => {
		const adminData = localStorage.getItem('admin');
		const admin = JSON.parse(adminData);
		fetch(`https://hospital-management-backend.onrender.com/patient/particularPatient/${patient_Id}/${admin._id}`)
		.then((res) => res.json())
		.then((data) => {
			setPatientDetails(data);
			history('patientdetails')
		})
		.catch((err) => {
			console.log(err);
		})
	}

  useEffect(() => {
    setPatientDetails(patientDetails);
  }, [patientDetails]);
	
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

			<div className="loaded">{isLoading && <ClipLoader color="#35693f" className="loadImg" loading={isLoading} size={60} />}</div>

			{patient && patient.map((patient) => (<div className="all__patients" key={patient.id} >
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
					<img onClick={() => handleNxtPage(patient._id)} src={arrow} alt="arrow" />
				</div>
			</div>))}
		</div>
	);
}
 
export default PatientList;