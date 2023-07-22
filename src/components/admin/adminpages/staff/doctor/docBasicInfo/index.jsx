import seperator from "../../../../../../assets/icons/Separator.svg";
import {useNavigate, Link } from "react-router-dom";

const DocBasicInfo = ({ docUserType, setDocUserType, docFirstname, setDocFirstname, docLastname, setDocLastname, docEmail, setDocEmail, docGender, setDocGender, docNumber, setDocNumber, docDOB, setDocDOB }) => {
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
          <div className="twoForms">
            <form action="">
            <label htmlFor="">
                <p className="pInput"> User type </p>
              </label>

              <select 
                value={docUserType} 
                onChange={ (e) => setDocUserType(e.target.value) }
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
                value={docFirstname}
                onChange={(e) => setDocFirstname(e.target.value)}
                placeholder="Your first name"
              />
              <label htmlFor="">
                <p className="pInput"> Last name</p>
              </label>
              <input
                type="text"
                id=""
                className="editInput"
                value={docLastname}
                onChange={(e) => setDocLastname(e.target.value)}
                placeholder="Your last name"
              />

              <label htmlFor="">
                <p className="pInput"> Email address</p>
              </label>
              <input
                type="email"
                id="email3"
                className="editInput"
                value={docEmail}
                onChange={(e) => setDocEmail(e.target.value)}
                placeholder="Your email address"
              />
            </form>

            <form action="">
              <label htmlFor="">
                <p className="pInput">Gender </p>
              </label>
              <div className="editinput">
                <select 
                  value={docGender}
                  onChange={(e) => setDocGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <label htmlFor="">
                <p className="pInput"> Phone Number</p>
              </label>
              <input
                type="text"
                id="number"
                className="editInput"
                value={docNumber}
                onChange={(e) => setDocNumber(e.target.value)}
                placeholder="Your number"
              />
              <label htmlFor="">
                <p className="pInput">Date of birth </p>
              </label>
              <input
                type="date"
                id=""
                className="editInput"
                value={docDOB}
                onChange={(e) => setDocDOB(e.target.value)}
                placeholder=" select your date of birth "
              />
            </form>
          </div>
          <div className="nav__direction">
            <button className="btnBack" onClick={() => history(-1)}>
              Back
            </button>
            <Link to="../docEnterDetails">
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

export default DocBasicInfo;
