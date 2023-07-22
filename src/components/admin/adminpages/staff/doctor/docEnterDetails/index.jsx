import separator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";

const DocEnterDetails = ({ docMedDegree, setDocMedDegree, docSpecialization, setDocSpecialization, medLicenseNumber, setMedLicenseNumber, docYearsOfExperience, setDocYearsOfExperience, docEmploymentStatus, setDocEmploymentStatus }) => {
  const history = useNavigate();
    return (
      <>
        <div className="wrapBasicInfo">
          <header className="headBasicInfo">
            <div className="blurBasic">
              <p>
                <span>1 </span> Basic information
              </p>
              <img src={separator} alt="" className="seperator" />
            </div>
            <div>
              <p>
                <span>2 </span>Enter Details
              </p>
              <img src={separator} alt="" />
            </div>

            <div className="blurBasic">
              <p>
                <span>3 </span> Select Services
              </p>
              <img src={separator} alt="" className="seperator" />
            </div>
            <div className="blurBasic">
              <p>
                <span>4 </span> Review and Submit
              </p>
              <img src={separator} alt="" className="seperator" />
            </div>
          </header>

          <div className="basicInfo">
            <h2>Enter Details</h2>
            <div className="twoForms">
              <form action="">
                <label htmlFor="">
                  <p className="pInput"> Medical Degree(s) </p>
                </label>

                <div className="editinput">
                  <input
                    type="text"
                    id=""
                    className="editInput"
                    value={docMedDegree}
                    onChange={(e) => setDocMedDegree(e.target.value)}
                    placeholder="Medical degree"
                  />
                </div>

                <label htmlFor="">
                  <p className="pInput">Area of Specialization</p>
                </label>
                <input
                  type="text"
                  id=""
                  className="editInput"
                  value={docSpecialization}
                  onChange={(e) => setDocSpecialization(e.target.value)}
                  placeholder="Your Area of specialization"
                />
                <label htmlFor="">
                  <p className="pInput"> Medical License Number</p>
                </label>
                <input
                  type="text"
                  id=""
                  className="editInput"
                  value={medLicenseNumber}
                  onChange={(e) => setMedLicenseNumber(e.target.value)}
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
                  value={docYearsOfExperience}
                  onChange={(e) => setDocYearsOfExperience(e.target.value)}
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
                    value={docEmploymentStatus}
                    onChange={(e) => setDocEmploymentStatus(e.target.value)}
                    placeholder="Employment status"
                  />
                </div>

              </form>
            </div>
            <div className="nav__direction">
              <button className="btnBack" onClick={() => history(-1)}>
                Back
              </button>
              <Link to="../docServices">
                <button className="btnNextStep">
                    Next step
                </button>
              </Link>
            </div>
          </div>

          
        </div>
      </>
    );
}
 
export default DocEnterDetails;
