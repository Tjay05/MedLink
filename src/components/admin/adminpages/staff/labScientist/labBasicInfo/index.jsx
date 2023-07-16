import seperator from "../../../../../../assets/icons/Separator.svg";
import poly from "../../../../../../assets/icons/Polygon 1.svg";
import calender from "../../../../../../assets/icons/calen.svg";
import { Link, useNavigate } from "react-router-dom";

const LabBasicinfo = () => {
    const history=useNavigate()
  return (
    <>
      <div className="wrapBasicInfo">
        <div className="secondWrap">
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
            <div>
              <h2>Basic Information</h2>
            </div>

            <div
              className="
              twoForms"
            >
              <form action="">
                <label htmlFor="">
                  <p className="pInput"> User type </p>
                </label>

                <div className="editinput">
                  <input
                    type="text"
                    id=""
                    className="editInput"
                    name=""
                    placeholder="select user type"
                  />
                  <img src={poly} alt="" className="imageInput" />
                </div>

                <label htmlFor="">
                  <p className="pInput"> First name</p>
                </label>
                <input
                  type="text"
                  id=""
                  className="editInput"
                  name=""
                  placeholder="Your first name"
                />
                <label htmlFor="">
                  <p className="pInput"> Last name</p>
                </label>
                <input
                  type="text"
                  id=""
                  className="editInput"
                  name=""
                  placeholder="Your last name"
                />

                <label htmlFor="">
                  <p className="pInput"> Email address</p>
                </label>
                <input
                  type="email"
                  id="email3"
                  className="editInput"
                  name="email3"
                  placeholder="Your email address"
                />
              </form>

              <form action="">
                <label htmlFor="">
                  <p className="pInput">Gender </p>
                </label>
                <div className="editinput">
                  <input
                    type="text"
                    id=""
                    className="editInput"
                    name=""
                    placeholder="select gender"
                  />

                  <img src={poly} alt="" className="imageInput" />
                </div>
                <label htmlFor="">
                  <p className="pInput">Date of birth </p>
                </label>
                <div className="editinput">
                  <input
                    type="text"
                    id=""
                    className="editInput"
                    name=""
                    placeholder=" select your date of birth "
                  />
                  <img src={calender} alt="" className="imageInput" />
                </div>
              </form>
            </div>
          </div>

          <button className="btnNextStep">
            <Link to="../labEnterDetails" >
              <p>Next step</p>
            </Link>
          </button>
          <button className="btnBack " onClick={() => history(-1)}>
            <p>Back</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default LabBasicinfo;
