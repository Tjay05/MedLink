const PrevApp = () => {
  return ( 
    <>
      <div className="prevAppInfo">
        <p>Date/Time</p>
        <p>Name of Doctor</p>
        <p>Doctor's ID</p>
      </div>
      <div className="allAppointments">
        <div className="date">
          <p>12/07/2020</p>
          <p className="light">11:24 AM</p>
        </div>
        <div className="doc__NaMe">
          <p>Brooklyn Simmons</p>
          <p className="light">Dermatologists</p>
        </div>
        <p>98653222</p>
      </div>
    </>
   );
}
 
export default PrevApp;