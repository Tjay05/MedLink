import seperator from "../../../../../../assets/icons/Separator.svg";
import {useNavigate, Link } from "react-router-dom";

const PharmBasicInfo = ({ pharmUserType, setPharmUserType, pharmFirstname, setPharmFirstname, pharmLastname, setPharmLastname, pharmEmail, setPharmEmail, pharmGender, setPharmGender, pharmNumber, setPharmNumber, pharmDOB, setPharmDOB }) => {
    const history = useNavigate();
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
                value={pharmUserType} 
                onChange={ (e) => setPharmUserType(e.target.value) }
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
                value={pharmFirstname}
                onChange={(e) => setPharmFirstname(e.target.value)}
                placeholder="Your first name"
              />
              <label htmlFor="">
                <p className="pInput"> Last name</p>
              </label>
              <input
                type="text"
                id=""
                className="editInput"
                value={pharmLastname}
                onChange={(e) => setPharmLastname(e.target.value)}
                placeholder="Your last name"
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
                value={pharmEmail}
                onChange={(e) => setPharmEmail(e.target.value)}
                placeholder="Your email address"
              />
              <label htmlFor="">
                <p className="pInput">Gender </p>
              </label>
              <div className="editinput">
                <select 
                  value={pharmGender}
                  onChange={(e) => setPharmGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* <label htmlFor="">
                  <p className="pInput"> Designation</p>
                </label>
                <input
                  type="text"
                  id=""
                  className="editInput"
                  name=""
                  placeholder="Your first name"
                /> */}
              <label htmlFor="">
                <p className="pInput">Date of birth </p>
              </label>
              <div className="editinput">
                <input
                  type="date"
                  id=""
                  className="editInput"
                  value={pharmDOB}
                  onChange={(e) => setPharmDOB(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="nav__direction">
            <button className="btnBack" onClick={() => history(-1)}>
              Back
            </button>
            <Link to="../pharmEnterDetails" >
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

export default PharmBasicInfo;
