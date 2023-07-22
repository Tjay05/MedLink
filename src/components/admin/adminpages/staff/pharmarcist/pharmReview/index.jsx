import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";

const PharmReview = ({ pharmUserType, pharmFirstname, pharmLastname, pharmEmail, pharmGender, pharmNumber, pharmDOB, pharmDegree, pharmSpecialization, pharmLicenseNumber, pharmYearsOfExperience, pharmEmploymentStatus, pharmDaysWeek, pharmHourDay, pharmSchedule }) => {
  const history = useNavigate()
  
  const handleSubmit = () => {

    const pharmacist = { pharmUserType, pharmFirstname, pharmLastname, pharmEmail, pharmGender, pharmNumber, pharmDOB, pharmDegree, pharmSpecialization, pharmLicenseNumber, pharmYearsOfExperience, pharmEmploymentStatus, pharmDaysWeek, pharmHourDay, pharmSchedule }

    console.log(pharmacist);
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
                <Link to="../AddPharmacist"><span>1 </span> Basic information</Link>
              </p>
              <img src={seperator} alt="" className="seperator" />
            </div>
            <div className="blurBasic">
              <p>
                <Link to="../pharmEnterDetails"><span>2 </span>Enter Details</Link>
              </p>
              <img src={seperator} alt="" className="seperator" />
            </div>
            <div className="blurBasic">
              <p>
                <Link to="../pharmServices"><span>3 </span> Select Services</Link>
              </p>
              <img src={seperator} alt="" className="seperator" />
            </div>
          </header>
          <div className="basicInfo">
            <div className="nav__direction">
              <button className="btnBack" onClick={() => history(-1)}>
                Back
              </button>
              <Link to="../pharmSuccessAdd">
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

export default PharmReview;
