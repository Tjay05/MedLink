const LabBIo = ({labScientist}) => {
  return ( 
    <>
      <div className="prevAppInfo">
        <p>Lab Scientist's Field</p>
        <p>License Number</p>
        <p>Telephone</p>
        <p>Lab Scientist's Degree</p>
        <p>Lab Scientist's DOB</p>
        <p>Status</p>
      </div>
      { labScientist.map((lab) => (
        <div className="allAppointments" key={lab.id} >
          <p>{lab.areaOfSpecialization}</p>
          <p>{lab.lab_License}</p>
          <p>{lab.number}</p>
          <p>{lab.lab_Degree}</p>
          <p>{lab.DOB}</p>
          <p>{lab.employStat}</p>
        </div>
      )) }
    </>
   );
}
 
export default LabBIo;