import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegNurseContext } from "../../../../admincomponents/RegNurse";

const NurseEnterDetails = () => {
  const { Nurse_Degree, setDegree, areaOfSpecialization, setSpecialization, nurse_License_number, setLicenseNumber, YearsOfExp, setYearsOfExperience, employStat, setEmploymentStatus } = useContext(RegNurseContext);
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
              <span>4 </span> Wages and Salary
            </p>
            <img src={seperator} alt="" className="seperator" />
          </div>
        </header>

        <div className="basicInfo">
          <h2>Enter Details</h2>
          <div className="twoForms">
            <form action="">
              <label htmlFor="Degree">
                <p className="pInput"> Nursing Degree(s) </p>
              </label>

              <div className="editinput">
                <input
                  type="text"
                  id="Degree"
                  className="editInput"
                  value={Nurse_Degree}
                  onChange={(e) => setDegree(e.target.value)}
                  placeholder="Nursing degree"
                />
              </div>

              <label htmlFor="areaOfSpecialization">
                <p className="pInput">Area of Specialization</p>
              </label>
              <input
                type="text"
                id="areaOfSpecialization"
                className="editInput"
                value={areaOfSpecialization}
                onChange={(e) => setSpecialization(e.target.value)}
                placeholder="Your Area of Specialization"
              />
              <label htmlFor="License">
                <p className="pInput"> Nursing License Number</p>
              </label>
              <input
                type="text"
                id="License"
                className="editInput"
                value={nurse_License_number}
                onChange={(e) => setLicenseNumber(e.target.value)}
                placeholder="Your License Number"
              />
            </form>
            <form action="">
              <label htmlFor="text2">
                <p className="pInput"> Years of experience</p>
              </label>
              <input
                type="text"
                id="text2"
                className="editInput"
                value={YearsOfExp}
                onChange={(e) => setYearsOfExperience(e.target.value)}
                placeholder="Years of Experience"
              />
              <label htmlFor="employStat">
                <p className="pInput">Current Employment Status</p>
              </label>
              <div className="editinput">
                <input
                  type="text"
                  id="employStat"
                  className="editInput"
                  value={employStat}
                  onChange={(e) => setEmploymentStatus(e.target.value)}
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
