import DomMenu from "../domWorkBasicInfo/DomMenu";
import seperator from "../../../../assets/Separator.svg";
import poly from "../../../../assets/Polygon 1.svg";
import { Link,useNavigate } from "react-router-dom";

const DomServices = () => {
    const history=useNavigate()
  return (
    <>
      <DomMenu />
      <div className="wrapBasicInfo">
        <div className="secondWrap">
          <header className="headBasicInfo">
            <div className="blurBasic">
              <p>
                <span>1 </span> Basic information
              </p>
              <img src={seperator} alt="" className="seperator" />
            </div>
            <div className="blurBasic">
              <p>
                <span>2 </span>Enter Details
              </p>
              <img src={seperator} alt="" className="seperator" />
            </div>

            <div>
              <p>
                <span>3 </span> Select Services
              </p>
              <img src={seperator} alt="" />
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
              <h2>Select Services And Availbility</h2>
            </div>

            <div className="twoForms">
              <form action="" className="serviceForm">
                <label htmlFor="">
                  <p className="pInput"> Days/Week </p>
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
                  <p className="pInput">Hours/Day </p>
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
                  <p className="pInput">Schedule Type </p>
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
              </form>
            </div>
          </div>
          <button className="btnNextStep">
          <Link
              style={{ textDecoration: "none" }}
              to="/staff/domesticWorkers/domReview"
            >
              <p>Next step</p>
            </Link>
          </button>
          <button className="btnBack" onClick={()=>history(-1)}>
            <p>Back</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default DomServices;