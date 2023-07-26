const DomWORk = ({ domWk }) => {
  return ( 
    <>
      <div className="prevAppInfo">
        <p>Field</p>
        <p>Gender</p>
        <p>Telephone</p>
        <p>Education</p>
        <p>Date of Birth</p>
        <p>Status</p>
      </div>
      { domWk.map((dom) => (
        <div className="allAppointments" key={dom.id} >
          <p>{dom.areaOfSpecialization}</p>
          <p>{dom.Gender}</p>
          <p>{dom.number}</p>
          <p>{dom.education}</p>
          <p>{dom.DOB}</p>
          <p>{dom.employStat}</p>
        </div>
      )) }
    </>
   );
}
 
export default DomWORk;