import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegLabContext } from "../../../../admincomponents/RegLab";

const LabEnterDetails = () => {
  const { lab_Degree, setDegree, areaOfSpecialization, setSpecialization, lab_License, setLicenseNumber, YearsOfExp, setYearsOfExperience, employStat, setEmploymentStatus } = useContext(RegLabContext);
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
                <label htmlFor="Degree">
                  <p className="pInput"> Lab Science Degree(s) </p>
                </label>

                <div className="editinput">
                  <input
                    type="text"
                    id="Degree"
                    className="editInput"
                    value={lab_Degree}
                    onChange={(e) => setDegree(e.target.value)}
                    placeholder="Lab Science Degree"
                  />
                </div>

                <label htmlFor="specialization">
                  <p className="pInput">Area of Specialization</p>
                </label>
                <input
                  type="text"
                  id="specialization"
                  className="editInput"
                  value={areaOfSpecialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  placeholder="Your Area of Specialization"
                />
                <label htmlFor="License">
                  <p className="pInput"> Lab Scientist License Number</p>
                </label>
                <input
                  type="text"
                  id="License"
                  className="editInput"
                  value={lab_License}
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
                <label htmlFor="status">
                  <p className="pInput">Current Employment Status</p>
                </label>
                <div className="editinput">
                  <input
                    type="text"
                    id="status"
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
              <Link to="../labServices">
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

export default LabEnterDetails;
