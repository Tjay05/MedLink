import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegDomContext } from "../../../../admincomponents/RegDomWorker";

const DomReview = () => {
  const { UserType, firstname, lastname, email, Gender, number, DOB, education, areaOfSpecialization, YearsOfExp, employStat, Days_per_week, Hours_per_day, Schedule } = useContext(RegDomContext);
  const history = useNavigate()
  
  const handleSubmit = () => {

    const domWorker = { UserType, firstname, lastname, email, Gender, number, DOB, education, areaOfSpecialization, YearsOfExp, employStat, Days_per_week, Hours_per_day, Schedule }

    console.log(domWorker);
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
                <Link to="../AddDomWorker"><span>1 </span> Basic information</Link>
              </p>
              <img src={seperator} alt="" className="seperator" />
            </div>
            <div className="blurBasic">
              <p>
                <Link to="../domEnterDetails"><span>2 </span>Enter Details</Link>
              </p>
              <img src={seperator} alt="" className="seperator" />
            </div>
            <div className="blurBasic">
              <p>
                <Link to="../domServices"><span>3 </span> Select Services</Link>
              </p>
              <img src={seperator} alt="" className="seperator" />
            </div>
          </header>
          <div className="basicInfo">
            <div className="nav__direction">
              <button className="btnBack" onClick={()=>history(-1)}>
                Back
              </button>
              <Link to="../domAddSuccess">
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

export default DomReview;
