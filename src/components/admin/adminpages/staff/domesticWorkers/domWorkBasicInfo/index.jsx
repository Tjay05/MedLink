import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegDomContext } from "../../../../admincomponents/RegDomWorker";

const BasicinfoDomW = () => {
  const { UserType, setUserType, firstname, setFirstname, lastname, setLastname, email, setEmail, Gender, setGender, number, setNumber, DOB, setDOB } = useContext(RegDomContext);
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
              <label htmlFor="usertype">
                <p className="pInput"> User Type </p>
              </label>

              <select 
                id="usertype"
                value={UserType} 
                onChange={ (e) => setUserType(e.target.value) }
              >
                <option value="Doctor">Doctor</option>
                <option value="Pharamacist">Pharmacist</option>
                <option value="Nurse">Nurse</option>
                <option value="Lab Scientist">Lab Scientist</option>
                <option value="Domestic Worker">Domestic Worker</option>
              </select>

              <label htmlFor="Firstname">
                <p className="pInput"> First name</p>
              </label>
              <input
                type="text"
                id="Firstname"
                className="editInput"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Your First Name"
              />
              <label htmlFor="Lastname">
                <p className="pInput"> Last name</p>
              </label>
              <input
                type="text"
                id="Lastname"
                className="editInput"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Your Last Name"
              />
            </form>

            <form action="">
              <label htmlFor="email3">
                <p className="pInput">Phone Number</p>
              </label>
              <input
                type="email"
                id="email3"
                className="editInput"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Your Phone Number"
              />
              <label htmlFor="gender">
                <p className="pInput">Gender </p>
              </label>
              <div className="editinput">
                <select 
                  value={Gender}
                  id="gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <label htmlFor="dob">
                <p className="pInput">Date of birth </p>
              </label>
              <div className="editinput">
                <input
                  type="date"
                  id="dob"
                  className="editInput"
                  value={DOB}
                  onChange={(e) => setDOB(e.target.value)}
                  placeholder=" Select your Date of Birth "
                />
              </div>
            </form>
          </div>
          <div className="nav__direction">
            <button className="btnBack" onClick={()=>history(-1)}>
              back
            </button>
            <Link to="domEnterDetails">
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
