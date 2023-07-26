const PharmDets = ( {pharM}) => {
  return ( 
    <>
      <div className="prevAppInfo">
        <p>Doc's Field</p>
        <p>License Number</p>
        <p>Telephone</p>
        <p>Pharmaceutical Degree</p>
        <p>Doc's DOB</p>
        <p>Status</p>
      </div>  
      { pharM.map((pharm) => (
        <div className="allAppointments" key={pharm.id}>
          <p>{pharm.area_Of_Specialization}</p>
          <p>{pharm.Pharm_License}</p>
          <p>{pharm.number}</p>
          <p>{pharm.Pharm_Degree}</p>
          <p>{pharm.DOB}</p>
          <p>{pharm.employ_Stat}</p>
        </div>
      )) }  
    </>
   );
}
 
export default PharmDets;