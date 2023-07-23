import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegNurseContext } from "../../../../admincomponents/RegNurse";

const NurseReview = () => {
  const { UserType, firstname, lastname, email, Gender, number, DOB, Nurse_Degree, areaOfSpecialization, nurse_License_number, YearsOfExp, employStat, Days_per_week, Hours_per_day, Schedule } = useContext(RegNurseContext);
  const history = useNavigate()
  
  const handleSubmit = () => {

    const nurse = { UserType, firstname, lastname, email, Gender, number, DOB, Nurse_Degree, areaOfSpecialization, nurse_License_number, YearsOfExp, employStat, Days_per_week, Hours_per_day, Schedule }

    console.log(nurse);

    fetch("https://hospital-management-backend.onrender.com/nurse/register", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nurse)
    }).then(() => {
      console.log('Nurse added');
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
                <Link to="../AddNurse"><span>1 </span> Basic information</Link>
              </p>
              <img src={seperator} alt="" className="seperator" />
            </div>
            <div className="blurBasic">
              <p>
                <Link to="../nurseEnterDetails"><span>2 </span>Enter Details</Link>
              </p>
              <img src={seperator} alt="" className="seperator" />
            </div>
            <div className="blurBasic">
              <p>
                <Link to="../nurseServices"><span>3 </span> Select Services</Link>
              </p>
              <img src={seperator} alt="" className="seperator" />
            </div>
          </header>
          <div className="basicInfo">
            <div className="nav__direction">
              <button className="btnBack" onClick={() => history(-1)}>
                Back
              </button>
              <Link to="../nurseSuccessAdd">
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

export default NurseReview;
