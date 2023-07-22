import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";

const NurseBasicinfo = ({ nurseUserType, setNurseUserType, nurseFirstname, setNurseFirstname, nurseLastname, setNurseLastname, nurseEmail, setNurseEmail, nurseGender, setNurseGender, nurseNumber, setNurseNumber, nurseDOB, setNurseDOB }) => {
  const history=useNavigate()
  return (
    <>
      <div className="wrapBasicInfo">
        <header className="headBasicInfo">
          <div>
            <p>
              <span>1 </span> Basic information
            </p>
            <img src={seperator} alt="" />
          </div>

          <div className="blurBasic">
            <p>
              <span>2 </span>Enter Details
            </p>
            <img src={seperator} alt="" className="seperator" />
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
          <h2>Basic Information</h2>
          <div className="twoForms" >
            <form action="">
              <label htmlFor="">
                <p className="pInput"> User Type </p>
              </label>

              <select 
                value={nurseUserType} 
                onChange={ (e) => setNurseUserType(e.target.value) }
              >
                <option value="Doctor">Doctor</option>
                <option value="Pharamacist">Pharmacist</option>
                <option value="Nurse">Nurse</option>
                <option value="Lab Scientist">Lab Scientist</option>
                <option value="Domestic Worker">Domestic Worker</option>
              </select>

              <label htmlFor="">
                <p className="pInput"> First name</p>
              </label>
              <input
                type="text"
                id=""
                className="editInput"
                value={nurseFirstname}
                onChange={(e) => setNurseFirstname(e.target.value)}
                placeholder="First Name"
              />
              <label htmlFor="">
                <p className="pInput"> Last name</p>
              </label>
              <input
                type="text"
                id=""
                className="editInput"
                value={nurseLastname}
                onChange={(e) => setNurseLastname(e.target.value)}
                placeholder="Last Name"
              />

            </form>

            <form action="">
              <label htmlFor="">
                <p className="pInput"> Email address</p>
              </label>
              <input
                type="email"
                id="email3"
                className="editInput"
                value={nurseEmail}
                onChange={(e) => setNurseEmail(e.target.value)}
                placeholder="Your Email Address"
              />
              <label htmlFor="">
                <p className="pInput">Gender </p>
              </label>
              <div className="editinput">
                <select 
                  value={nurseGender}
                  onChange={(e) => setNurseGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <label htmlFor="">
                <p className="pInput">Date of birth </p>
              </label>
              <div className="editinput">
                <input
                  type="date"
                  id=""
                  className="editInput"
                  value={nurseDOB}
                  onChange={(e) => setNurseDOB(e.target.value)}
                  placeholder="Select your Date of Birth "
                />
              </div>
            </form>
          </div>
          <div className="nav__direction">
            <button className="btnBack" onClick={() => history(-1)}>
              Back
            </button>
            <Link to="../nurseEnterDetails">
              <button className="btnNextStep">
                <p>Next step</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NurseBasicinfo;
