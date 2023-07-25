const DocDetails = ({ pers }) => {
  return ( 
    <div className="wrapAddDoc">
      {pers.map((doctor) => (
        <div className="profileBio">
          <div className="doc_Profile">
            <img src={doctor.avatar} alt="" />
          </div>
          <div className="docBio">
            <h2><span className="light">Full Name:</span> {`${doctor.firstname} ${doctor.lastname}`}</h2>
            <p><span className="light">Doctor's ID:</span> {doctor.id}</p>
            <p><span className="light">Doctor's Field:</span> {doctor.areaOfSpecialization}</p>
            <p><span className="light">Doctor's Email Address:</span> {doctor.email}</p>
            <p><span className="light">Doctor's Number:</span> {doctor.number}</p>
            <p><span className="light">Medical License Number:</span> {doctor.med_License_number}</p>
            <p><span className="light">Status:</span> {doctor.Status}</p>
            <p><span className="light">Doctor's Date of Birth:</span> {doctor.DOB}</p>
            <p><span className="light">Medical Degree:</span> {doctor.medicalDegree}</p>
          </div>
        </div>
      ))}
    </div>
   );
}
 
export default DocDetails;