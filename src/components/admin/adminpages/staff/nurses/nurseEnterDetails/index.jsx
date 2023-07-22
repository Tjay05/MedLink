import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";

const NurseEnterDetails = ({ nurseDegree, setNurseDegree, nurseSpecialization, setNurseSpecialization, nurseLicenseNumber, setNurseLicenseNumber, nurseYearsOfExperience, setNurseYearsOfExperience, nurseEmploymentStatus, setNurseEmploymentStatus }) => {
  const history = useNavigate()
  return (
    <>
      <div className="wrapBasicInfo">
        <header className="headBasicInfo">
          <div className="blurBasic">
            <p>
              <span>1 </span> Basic information
            </p>
            <img src={seperator} alt="" className="seperator" />
          </div>
          <div>
            <p>
              <span>2 </span>Enter Details
            </p>
            <img src={seperator} alt="" />
          </div>

          <div className="blurBasic">
            <p>
              <span>3 </span> Select Services
            </p>
            <img src={seperator} alt="" className="seperator" />
          </div>
          <div className="blurBasic">
            <p>
              <span>4 </span> Review and Submit
            </p>
            <img src={seperator} alt="" className="seperator" />
          </div>
        </header>

        <div className="basicInfo">
          <h2>Enter Details</h2>
          <div className="twoForms">
            <form action="">
              <label htmlFor="">
                <p className="pInput"> Nursing Degree(s) </p>
              </label>

              <div className="editinput">
                <input
                  type="text"
                  id=""
                  className="editInput"
                  value={nurseDegree}
                  onChange={(e) => setNurseDegree(e.target.value)}
                  placeholder="Nursing degree"
                />
              </div>

              <label htmlFor="">
                <p className="pInput">Area of Specialization</p>
              </label>
              <input
                type="text"
                id=""
                className="editInput"
                value={nurseSpecialization}
                onChange={(e) => setNurseSpecialization(e.target.value)}
                placeholder="Your Area of Specialization"
              />
              <label htmlFor="">
                <p className="pInput"> Nursing License Number</p>
              </label>
              <input
                type="text"
                id=""
                className="editInput"
                value={nurseLicenseNumber}
                onChange={(e) => setNurseLicenseNumber(e.target.value)}
                placeholder="Your License Number"
              />
            </form>
            <form action="">
              <label htmlFor="">
                <p className="pInput"> Years of experience</p>
              </label>
              <input
                type="text"
                id="text2"
                className="editInput"
                value={nurseYearsOfExperience}
                onChange={(e) => setNurseYearsOfExperience(e.target.value)}
                placeholder="Years of Experience"
              />
              <label htmlFor="">
                <p className="pInput">Current Employment Status</p>
              </label>
              <div className="editinput">
                <input
                  type="text"
                  id=""
                  className="editInput"
                  value={nurseEmploymentStatus}
                  onChange={(e) => setNurseEmploymentStatus(e.target.value)}
                  placeholder="Employment Status"
                />
              </div>
            </form>
          </div>
          <div className="nav__direction">
            <button className="btnBack" onClick={() => history(-1)}>
              Back
            </button>
            <Link to="../nurseServices">
              <button className="btnNextStep">
                Next step
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NurseEnterDetails;
