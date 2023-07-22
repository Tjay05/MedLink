import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";

const PharmEnterDetails = ({ pharmDegree, setPharmDegree, pharmSpecialization, setPharmSpecialization, pharmLicenseNumber, setPharmLicenseNumber, pharmYearsOfExperience, setPharmYearsOfExperience, pharmEmploymentStatus, setPharmEmploymentStatus }) => {
  const history = useNavigate();
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
                <p className="pInput"> Pharm. Degree(s)</p>
              </label>

              <div className="editinput">
                <input
                  type="text"
                  id=""
                  className="editInput"
                  value={pharmDegree}
                  onChange={(e) => setPharmDegree(e.target.value)}
                  placeholder="Medical degree(s)"
                />
              </div>

              <label htmlFor="">
                <p className="pInput">Area of Specialization</p>
              </label>
              <input
                type="text"
                id=""
                className="editInput"
                value={pharmSpecialization}
                onChange={(e) => setPharmSpecialization(e.target.value)}
                placeholder="Your Area of specialization"
              />
              <label htmlFor="">
                <p className="pInput"> Pharmacist License Number</p>
              </label>
              <input
                type="text"
                id=""
                className="editInput"
                value={pharmLicenseNumber}
                onChange={(e) => setPharmLicenseNumber(e.target.value)}
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
                value={pharmYearsOfExperience}
                onChange={(e) => setPharmYearsOfExperience(e.target.value)}
                placeholder="Years of experience"
              />
              <label htmlFor="">
                <p className="pInput">Current Employment Status</p>
              </label>
              <div className="editinput">
                <input
                  type="text"
                  id=""
                  className="editInput"
                  value={pharmEmploymentStatus}
                  onChange={(e) => setPharmEmploymentStatus(e.target.value)}
                  placeholder="Employment status"
                />
              </div>
            </form>
          </div>
          <div className="nav__direction">
            <button className="btnBack" onClick={() => history(-1)}>
              Back
            </button>
            <Link to="../pharmServices">
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

export default PharmEnterDetails;
