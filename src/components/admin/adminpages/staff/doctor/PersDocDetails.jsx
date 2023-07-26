const PersDocDetails = ( {pers} ) => {
  return ( 
    <>
      <div className="prevAppInfo">
        <p>Field</p>
        <p>License Number</p>
        <p>Telephone</p>
        <p>Degree</p>
        <p>Date of Birth</p>
        <p>Status</p>
      </div>
      { pers.map((doctor) => 
        (
          <div className="allAppointments" key={doctor.id} >
            <p>{doctor.areaOfSpecialization}</p>
            <p>{doctor.med_License_number}</p>
            <p>{doctor.number}</p>
            <p>{doctor.medicalDegree}</p>
            <p>{doctor.DOB}</p>
            <p>{doctor.employStat}</p>
          </div>
        )
      )}
    </>
   );
}
 
export default PersDocDetails;