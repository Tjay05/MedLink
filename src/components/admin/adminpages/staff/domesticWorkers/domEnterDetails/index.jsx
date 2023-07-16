import seperator from "../../../../../../assets/icons/Separator.svg";
import poly from "../../../../../../assets/icons/Polygon 1.svg";
import calender from "../../../../../../assets/icons/calen.svg";
import { Link, useNavigate } from "react-router-dom";

const DomEnterDetails = () => {
    const history=useNavigate()
  return (
    <>
      <div className="wrapBasicInfo">
        <div className="secondWrap">
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
            <div>
              <h2>Enter Details</h2>
            </div>
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
                    name=""
                    placeholder="certificate"
                  />
                  <img src={poly} alt="" className="imageInput" />
                </div>
                <label htmlFor="">
                  <p className="pInput"> Area of Specialization </p>
                </label>

                <div className="editinput">
                  <input
                    type="text"
                    id=""
                    className="editInput"
                    name=""
                    placeholder="area of specialization"
                  />
                  <img src={poly} alt="" className="imageInput" />
                </div>
                <label htmlFor="">
                  <p className="pInput"> Years of experience</p>
                </label>
                <input
                  type="text"
                  id="text2"
                  className="editInput"
                  name="text3"
                  placeholder="years of experience"
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
                    name=""
                    placeholder="employment status"
                  />

                  <img src={poly} alt="" className="imageInput" />
                </div>
              </form>
            </div>
          </div>
          <button className="btnNextStep">
          <Link to="../domServices">
              <p>Next step</p>
            </Link>
          </button>
          <button className="btnBack" onClick={ ()=>history(-1)}>
            <p>Back</p>

          </button>
        </div>
      </div>
    </>
  );
};

export default DomEnterDetails;
