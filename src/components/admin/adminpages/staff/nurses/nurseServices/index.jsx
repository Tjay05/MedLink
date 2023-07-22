import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";

const NurseServices = ({ nurseDaysWeek, setNurseDaysWeek, nurseHourDay, setNurseHourDay, nurseSchedule, setNurseSchedule }) => {
  const history = useNavigate()
  return (
    <>
      <div className="wrapBasicInfo">
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
          <h2>Select Services And Availbility</h2>
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
                  value={nurseDaysWeek}
                  onChange={(e) => setNurseDaysWeek(e.target.value)}
                  placeholder="Days/Week"
                />
              </div>
              <label htmlFor="">
                <p className="pInput">Hours/Day </p>
              </label>
              <div className="editinput">
                <input
                  type="text"
                  id=""
                  className="editInput"
                  value={nurseHourDay}
                  onChange={(e) => setNurseHourDay(e.target.value)}
                  placeholder="Hours/Day"
                />
              </div>
              <label htmlFor="">
                <p className="pInput">Schedule Type </p>
              </label>
              <div className="editinput">
                <input
                  type="text"
                  id=""
                  className="editInput"
                  value={nurseSchedule}
                  onChange={(e) => setNurseSchedule(e.target.value)}
                  placeholder="Schedule Type"
                />
              </div>
            </form>
          </div>
          <div className="nav__direction">
            <button className="btnBack" onClick={() => history(-1)}>
              Back
            </button>
            <Link to="../nurseReview">
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

export default NurseServices;
