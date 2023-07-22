import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";

const NurseReview = ({ nurseUserType, nurseFirstname, nurseLastname, nurseEmail, nurseGender, nurseNumber, nurseDOB, nurseDegree, nurseSpecialization, nurseLicenseNumber, nurseYearsOfExperience, nurseEmploymentStatus, nurseDaysWeek, nurseHourDay, nurseSchedule }) => {
  const history = useNavigate()
  
  const handleSubmit = () => {

    const nurse = { nurseUserType, nurseFirstname, nurseLastname, nurseEmail, nurseGender, nurseNumber, nurseDOB, nurseDegree, nurseSpecialization, nurseLicenseNumber, nurseYearsOfExperience, nurseEmploymentStatus, nurseDaysWeek, nurseHourDay, nurseSchedule }

    console.log(nurse);
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
