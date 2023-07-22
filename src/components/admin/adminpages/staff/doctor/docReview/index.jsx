import separator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";

const DocReview = ({ docUserType, docFirstname, docLastname, docEmail, docGender, docNumber, docDOB, docMedDegree, docSpecialization, medLicenseNumber, docYearsOfExperience, docEmploymentStatus, docDaysWeek, docHourDay, docSchedule }) => {
  const history = useNavigate();
  
  const handleSubmit = () => {

    const doctor = { docUserType, docFirstname, docLastname, docEmail, docGender, docNumber, docDOB, docMedDegree, docSpecialization, medLicenseNumber, docYearsOfExperience, docEmploymentStatus, docDaysWeek, docHourDay, docSchedule }

    console.log(doctor);
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
