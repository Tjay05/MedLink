import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";

const DomEnterDetails = ({ domCertificate, setDomCertificate, domSpecialization, setDomSpecialization, domYearsOfExperience, setDomYearsOfExperience, domEmploymentStatus, setDomEmploymentStatus }) => {
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
                <p className="pInput"> Educational Background</p>
              </label>

              <div className="editinput">
                <input
                  type="text"
                  id=""
                  className="editInput"
                  value={domCertificate}
                  onChange={(e) => setDomCertificate(e.target.value)}
                  placeholder="Certificate"
                />
              </div>
              <label htmlFor="">
                <p className="pInput"> Area of Specialization </p>
              </label>

              <div className="editinput">
                <input
                  type="text"
                  id=""
                  className="editInput"
                  value={domSpecialization}
                  onChange={(e) => setDomSpecialization(e.target.value)}
                  placeholder="Area of Specialization"
                />
              </div>
              <label htmlFor="">
                <p className="pInput"> Years of experience</p>
              </label>
              <input
                type="text"
                id="text2"
                className="editInput"
                value={domYearsOfExperience}
                onChange={(e) => setDomYearsOfExperience(e.target.value)}
                placeholder="Years of Experience"
              />
            </form>
            <form action="">
              <label htmlFor="">
                <p className="pInput">Current Employment Status</p>
              </label>
              <div className="editinput">
                <input
                  type="text"
                  id=""
                  className="editInput"
                  value={domEmploymentStatus}
                  onChange={(e) => setDomEmploymentStatus(e.target.value)}
                  placeholder="Employment Status"
                />
              </div>
            </form>
          </div>
          <div className="nav__direction">
            <button className="btnBack" onClick={ ()=>history(-1)}>
              Back
            </button>
            <Link to="../domServices">
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

export default DomEnterDetails;
