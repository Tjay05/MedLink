import avatar from "../../../../assets/icons/fairAvatar.svg"
import arrow from "../../../../assets/icons/arrow.svg"
import { useNavigate } from "react-router-dom"

const PatientList = () => {
	
	const history = useNavigate()
	const handleNxtPage = () => history('patientdetails');

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

			<div className="all__patients">
				<div className="pic-profile">
					<img src={avatar} alt="" />
					<p>Tosin Poppins</p>
				</div>
				<p>87234991OA</p>
				<p>poppins@font.com</p>
				<p>00-call-rexxie</p>
				<div className="date-Added">
					<div className="date">
						<p>12/07/2020</p>
						<p className="light">11:24 AM</p>
					</div>
					<img onClick={handleNxtPage} src={arrow} alt="arrow" />
				</div>
			</div>
		</div>
	);
}
 
export default PatientList;