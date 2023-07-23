import seperator from "../../../../../../assets/icons/Separator.svg";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { RegPharmacistContext } from "../../../../admincomponents/RegPharmacist";

const PharmBasicInfo = () => {
  const { UserType, setUserType, firstname, setFirstname, lastname, setLastname, email, setEmail, Gender, setGender, number, setNumber, DOB, setDOB } = useContext(RegPharmacistContext);
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
              <label htmlFor="usertype">
                <p className="pInput"> User type </p>
              </label>

              <select 
                id="usertype"
                value={UserType} 
                onChange={ (e) => setUserType(e.target.value) }
              >
                <option value="Doctor">Doctor</option>
                <option value="Pharmacist">Pharmacist</option>
                <option value="Nurse">Nurse</option>
                <option value="Lab Scientist">Lab Scientist</option>
                <option value="Domestic Worker">Domestic Worker</option>
              </select>

              <label htmlFor="firstname">
                <p className="pInput"> First name</p>
              </label>
              <input
                type="text"
                id="firstname"
                className="editInput"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Your First Name"
              />
              <label htmlFor="lastname">
                <p className="pInput"> Last name</p>
              </label>
              <input
                type="text"
                id="lastname"
                className="editInput"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Your Last Name"
              />

            </form>

            <form action="">
              <label htmlFor="email3">
                <p className="pInput"> Email address</p>
              </label>
              <input
                type="email"
                id="email3"
                className="editInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
              />
              <label htmlFor="gender">
                <p className="pInput">Gender </p>
              </label>
              <div className="editinput">
                <select 
                  id="gender"
                  value={Gender}
                  onChange={(e) => setGender(e.target.value)}
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
              <label htmlFor="DOB">
                <p className="pInput">Date of birth </p>
              </label>
              <div className="editinput">
                <input
                  type="date"
                  id="DOB"
                  className="editInput"
                  value={DOB}
                  onChange={(e) => setDOB(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="nav__direction">
            <button className="btnBack" onClick={() => history(-1)}>
              Back
            </button>
            <Link to="pharmEnterDetails" >
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
