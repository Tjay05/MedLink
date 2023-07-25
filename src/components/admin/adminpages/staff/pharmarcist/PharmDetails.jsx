const PharmDetails = ({ pharM }) => {
  return ( 
    <div className="wrapAddDoc">
      {pharM.map((pharmacist) => (
        <div className="profileBio">
          <div className="doc_Profile">
            <img src={pharmacist.avatar} alt="" />
          </div>
          <div className="docBio">
            <h2><span className="light">Full Name:</span> {`${pharmacist.firstname} ${pharmacist.lastname}`}</h2>
            <p><span className="light">Pharmacist's ID:</span> {pharmacist.id}</p>
            <p><span className="light">Pharmacist's Area of Specialization:</span> {pharmacist.area_Of_Specialization}</p>
            <p><span className="light">Pharmacist's Email Address:</span> {pharmacist.email}</p>
            <p><span className="light">Pharmacist's Number:</span> {pharmacist.number}</p>
            <p><span className="light">Pharmacist License Number:</span> {pharmacist.med_License_number}</p>
            <p><span className="light">Status:</span> {pharmacist.Status}</p>
            <p><span className="light">Pharmacist's Date of Birth:</span> {pharmacist.DOB}</p>
            <p><span className="light">Pharmacist Degree:</span> {pharmacist.medicalDegree}</p>
          </div>
        </div>
      ))}
    </div>
   );
}
 
export default PharmDetails;