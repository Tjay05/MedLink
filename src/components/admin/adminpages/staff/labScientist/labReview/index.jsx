import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegLabContext } from "../../../../admincomponents/RegLab";

const LabReview = () => {
  const { UserType, firstname, lastname, email, Gender, number, DOB, lab_Degree, areaOfSpecialization, lab_License, YearsOfExp, employStat, Days_per_week, Hours_per_day, Schedule } = useContext(RegLabContext);
  const history=useNavigate()
  
  const handleSubmit = () => {

    const labScientist = { UserType, firstname, lastname, email, Gender, number, DOB, lab_Degree, areaOfSpecialization, lab_License, YearsOfExp, employStat, Days_per_week, Hours_per_day, Schedule }

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
