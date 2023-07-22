import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link,useNavigate } from "react-router-dom";

const LabEnterDetails = ({ labDegree, setLabDegree, labSpecialization, setLabSpecialization, labLicenseNumber, setLabLicenseNumber, labYearsOfExperience, setLabYearsOfExperience, labEmploymentStatus, setLabEmploymentStatus }) => {
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
                  <p className="pInput"> Lab Science Degree(s) </p>
                </label>

                <div className="editinput">
                  <input
                    type="text"
                    id=""
                    className="editInput"
                    value={labDegree}
                    onChange={(e) => setLabDegree(e.target.value)}
                    placeholder="Lab Science Degree"
                  />
                </div>

                <label htmlFor="">
                  <p className="pInput">Area of Specialization</p>
                </label>
                <input
                  type="text"
                  id=""
                  className="editInput"
                  value={labSpecialization}
                  onChange={(e) => setLabSpecialization(e.target.value)}
                  placeholder="Your Area of Specialization"
                />
                <label htmlFor="">
                  <p className="pInput"> Lab Scientist License Number</p>
                </label>
                <input
                  type="text"
                  id=""
                  className="editInput"
                  value={labLicenseNumber}
                  onChange={(e) => setLabLicenseNumber(e.target.value)}
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
                  value={labYearsOfExperience}
                  onChange={(e) => setLabYearsOfExperience(e.target.value)}
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
                    value={labEmploymentStatus}
                    onChange={(e) => setLabEmploymentStatus(e.target.value)}
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
