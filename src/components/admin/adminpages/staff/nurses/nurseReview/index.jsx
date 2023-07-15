import NurseMenu from "../nurseBasicInfo/NurseMenu";
import seperator from "../../../../assets/Separator.svg";
import { Link,useNavigate } from "react-router-dom";
// import poly from "../assets/Polygon 1.svg";


const NurseReview = () => {
    const history=useNavigate()
  return (
    <>
      <NurseMenu />

      <div className="wrapBasicInfo">
        <div className="secondWrap1">
          <header className="headBasicInfo1">
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

            <div className="blurBasic">
              <p>
                <span>3 </span> Select Services
              </p>
              <img src={seperator} alt="" className="seperator" />
            </div>
            <div>
              <p>
                <span>4 </span> Review and Submit
              </p>
              <img src={seperator} alt="" />
            </div>
          </header>
          <div className="basicInfo">
            <div className="reviewAndSubmit">
              <h2>Review and Submit</h2>
            </div>
          </div>

          <div className="btnReviewWrap">
            <button className="btnNextStep">
              <Link
                style={{ textDecoration: "none" }}
                to="/staff/nurses/nurseSuccessAdd"
              >
                <p>Next step</p>
              </Link>
            </button>
            <button className="btnBack" onClick={() => history(-1)}>
              <p>Back</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NurseReview;
