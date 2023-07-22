import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";

const BasicinfoDomW = ({ domUserType, setDomUserType, domFirstname, setDomFirstname, domLastname, setDomLastname, domEmail, setDomEmail, domGender, setDomGender, domNumber, setDomNumber, domDOB, setDomDOB }) => {
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
                <p className="pInput"> User Type </p>
              </label>

              <select 
                value={domUserType} 
                onChange={ (e) => setDomUserType(e.target.value) }
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
                value={domFirstname}
                onChange={(e) => setDomFirstname(e.target.value)}
                placeholder="Your First Name"
              />
              <label htmlFor="">
                <p className="pInput"> Last name</p>
              </label>
              <input
                type="text"
                id=""
                className="editInput"
                value={domLastname}
                onChange={(e) => setDomLastname(e.target.value)}
                placeholder="Your Last Name"
              />
            </form>

            <form action="">
              <label htmlFor="">
                <p className="pInput">Phone Number</p>
              </label>
              <input
                type="email"
                id="email3"
                className="editInput"
                value={domNumber}
                onChange={(e) => setDomNumber(e.target.value)}
                placeholder="Your Phone Number"
              />
              <label htmlFor="">
                <p className="pInput">Gender </p>
              </label>
              <div className="editinput">
                <select 
                  value={domGender}
                  onChange={(e) => setDomGender(e.target.value)}
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
                  value={domDOB}
                  onChange={(e) => setDomDOB(e.target.value)}
                  placeholder=" Select your Date of Birth "
                />
              </div>
            </form>
          </div>
          <div className="nav__direction">
            <button className="btnBack" onClick={()=>history(-1)}>
              back
            </button>
            <Link to="../domEnterDetails">
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

export default BasicinfoDomW;
