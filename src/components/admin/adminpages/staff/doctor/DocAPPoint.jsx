const DocAPPoint = ({ pers }) => {
  return ( 
    <>
      <div id="allApp" className="prevAppInfo">
        <p>Name of Patient</p>
        <p>Date/Time</p>
        <p>Patient's ID</p>
      </div>
      {pers.map((doc) => 
        (
          doc.appointments.map((appoint, index) => (
          <div className="allAppointments" key={appoint.id} >
            <p>{`${appoint.firstname} ${appoint.lastname}`}</p>
            <div className="date">
              <p>{appoint.date}</p>
              <p className="light">{appoint.time}</p>
            </div>
            <p>{appoint.id}</p>
          </div>
          ))
        )
      )}
    </>
   );
}
 
export default DocAPPoint;