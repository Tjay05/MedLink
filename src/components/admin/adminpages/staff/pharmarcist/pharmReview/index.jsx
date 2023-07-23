import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegPharmacistContext } from "../../../../admincomponents/RegPharmacist";

const PharmReview = () => {
  const { UserType, firstname, lastname, email, Gender, number, DOB, Pharm_Degree, area_Of_Specialization, Pharm_License, Years_Of_Exp, employ_Stat, Days_per_week, Hours_per_day, Schedule } =useContext(RegPharmacistContext);

  const history = useNavigate()
  
  const handleSubmit = () => {

    const pharmacist = { UserType, firstname, lastname, email, Gender, number, DOB, Pharm_Degree, area_Of_Specialization, Pharm_License, Years_Of_Exp, employ_Stat, Days_per_week, Hours_per_day, Schedule }

    console.log(pharmacist);

    fetch("https://hospital-management-backend.onrender.com/pharmacist/register", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pharmacist)
    }).then(() => {
      console.log('Pharmacist added');
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
