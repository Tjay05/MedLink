import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegDomContext } from "../../../../admincomponents/RegDomWorker";

const DomEnterDetails = () => {
  const { education, setCertificate, areaOfSpecialization, setSpecialization, YearsOfExp, setYearsOfExperience, employStat, setEmploymentStatus } = useContext(RegDomContext);
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
              <label htmlFor="Education">
                <p className="pInput"> Educational Background</p>
              </label>

              <div className="editinput">
                <input
                  type="text"
                  id="Education"
                  className="editInput"
                  value={education}
                  onChange={(e) => setCertificate(e.target.value)}
                  placeholder="Certificate"
                />
              </div>
              <label htmlFor="special">
                <p className="pInput"> Area of Specialization </p>
              </label>

              <div className="editinput">
                <input
                  type="text"
                  id="special"
                  className="editInput"
                  value={areaOfSpecialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  placeholder="Area of Specialization"
                />
              </div>
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
            </form>
            <form action="">
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
