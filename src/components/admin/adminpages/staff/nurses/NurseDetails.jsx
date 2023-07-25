const NurseDetails = ({ nuRse }) => {
  return ( 
    <div className="wrapAddDoc">
    {nuRse.map((Nurse) => (
      <div className="profileBio">
        <div className="doc_Profile">
          <img src={Nurse.avatar} alt="" />
        </div>
        <div className="docBio">
          <h2><span className="light">Full Name:</span> {`${Nurse.firstname} ${Nurse.lastname}`}</h2>
          <p><span className="light">Nurse's ID:</span> {Nurse.id}</p>
          <p><span className="light">Nurse's Area of Specialization:</span> {Nurse.areaOfSpecialization}</p>
          <p><span className="light">Nurse's Email Address:</span> {Nurse.email}</p>
          <p><span className="light">Nurse's Number:</span> {Nurse.number}</p>
          <p><span className="light">Nurse License Number:</span> {Nurse.nurse_License_number}</p>
          <p><span className="light">Status:</span> {Nurse.Status}</p>
          <p><span className="light">Nurse's Date of Birth:</span> {Nurse.DOB}</p>
          <p><span className="light">Nurse Degree:</span> {Nurse.Nurse_Degree}</p>
        </div>
      </div>
    ))}      
    </div>
   );
}
 
export default NurseDetails;