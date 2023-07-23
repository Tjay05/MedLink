import separator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegdocContext } from "../../../../admincomponents/RegDoc";

const DocReview = () => {
  const {UserType, firstname, lastname, email, Gender, number, DOB, medicalDegree, areaOfSpecialization, med_License_number, YearsOfExp, employStat, Days_per_week, Hours_per_day, Schedule} = useContext(RegdocContext)
  const history = useNavigate();
  
  const handleSubmit = () => {

    const doctor = { UserType, firstname, lastname, email, Gender, number, DOB, medicalDegree, areaOfSpecialization, med_License_number, YearsOfExp, employStat, Days_per_week, Hours_per_day, Schedule }

    console.log(doctor);

    fetch("https://hospital-management-backend.onrender.com/doctor/register", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doctor)
    }).then(() => {
      console.log('Doctor added');
    })
  }

  return (
    <>
      <div className="wrapBasicInfo">
        <div className="secondWrap1">
          <div className="reviewAndSubmit">
            <h2>Review and Submit</h2>
          </div>
          <header className="headBasicInfo1">
            <div className="blurBasic">
              <p>
                <Link to="../AddDoctor" ><span>1 </span> Basic information</Link>
              </p>
              <img src={separator} alt="" className="seperator" />
            </div>
            <div className="blurBasic">
              <p>
                <Link to="../docEnterDetails" ><span>2 </span>Enter Details</Link>
              </p>
              <img src={separator} alt="" className="seperator" />
            </div>
            <div className="blurBasic">
              <p>
                <Link to="../docServices" ><span>3 </span> Select Services</Link>
              </p>
              <img src={separator} alt="" className="seperator" />
            </div>
          </header>
          <div className="basicInfo">
            <div className="nav__direction">
              <button className="btnBack" onClick={() => history(-1)}>
                Back
              </button>
              <Link to="../docSuccessAdd">
                <button onClick={handleSubmit} className="btnNextStep">
                  Next step
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocReview;
