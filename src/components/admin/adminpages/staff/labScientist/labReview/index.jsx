import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link,useNavigate } from "react-router-dom";

const LabReview = ({ labUserType, labFirstname, labLastname, labEmail, labGender, labNumber, labDOB, labDegree, labSpecialization, labLicenseNumber, labYearsOfExperience, labEmploymentStatus, labDaysWeek, labHourDay, labSchedule }) => {
  const history=useNavigate()
  
  const handleSubmit = () => {

    const labScientist = { labUserType, labFirstname, labLastname, labEmail, labGender, labNumber, labDOB, labDegree, labSpecialization, labLicenseNumber, labYearsOfExperience, labEmploymentStatus, labDaysWeek, labHourDay, labSchedule }

    console.log(labScientist);
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
                <Link to="../AddLabSci" ><span>1 </span> Basic information</Link>
              </p>
              <img src={seperator} alt="" className="seperator" />
            </div>
            <div className="blurBasic">
              <p>
                <Link to="../labEnterDetails" ><span>2 </span>Enter Details</Link>
              </p>
              <img src={seperator} alt="" className="seperator" />
            </div>

            <div className="blurBasic">
              <p>
                <Link to="../labServices" ><span>3 </span> Select Services</Link>
              </p>
              <img src={seperator} alt="" className="seperator" />
            </div>
          </header>
          <div className="basicInfo">
            <div className="nav__direction">
              <button className="btnBack" onClick={()=>history(-1)}>
                <p>Back</p>
              </button>
              <Link to="../labAddSuccess">
                <button onClick={handleSubmit} className="btnNextStep">
                  <p>Next step</p>
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default LabReview;
