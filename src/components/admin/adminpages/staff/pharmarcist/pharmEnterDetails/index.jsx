import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegPharmacistContext } from "../../../../admincomponents/RegPharmacist";

const PharmEnterDetails = () => {
  const { Pharm_Degree, setDegree, area_Of_Specialization, setSpecialization, Pharm_License, setLicenseNumber, Years_Of_Exp, setYearsOfExperience, employ_Stat, setEmploymentStatus } = useContext(RegPharmacistContext);
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
              <label htmlFor="Degree">
                <p className="pInput"> Pharm. Degree(s)</p>
              </label>

              <div className="editinput">
                <input
                  type="text"
                  id="Degree"
                  className="editInput"
                  value={Pharm_Degree}
                  onChange={(e) => setDegree(e.target.value)}
                  placeholder="Medical degree(s)"
                />
              </div>

              <label htmlFor="area_Of_Specialization">
                <p className="pInput">Area of Specialization</p>
              </label>
              <input
                type="text"
                id="area_Of_Specialization"
                className="editInput"
                value={area_Of_Specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                placeholder="Your Area of specialization"
              />
              <label htmlFor="Pharm_License">
                <p className="pInput"> Pharmacist License Number</p>
              </label>
              <input
                type="text"
                id="Pharm_License"
                className="editInput"
                value={Pharm_License}
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
                value={Years_Of_Exp}
                onChange={(e) => setYearsOfExperience(e.target.value)}
                placeholder="Years of experience"
              />
              <label htmlFor="Employment Status">
                <p className="pInput">Current Employment Status</p>
              </label>
              <div className="editinput">
                <input
                  type="text"
                  id="Employment Status"
                  className="editInput"
                  value={employ_Stat}
                  onChange={(e) => setEmploymentStatus(e.target.value)}
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
