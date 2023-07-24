import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegLabContext } from "../../../../admincomponents/RegLab";

const LabServices = () => {
  const { Days_per_week, setDaysWeek, Hours_per_day, setHourDay, Schedule, setSchedule } = useContext(RegLabContext);
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
                <span>4 </span> Wages and Salary
              </p>
              <img src={seperator} alt="" className="seperator" />
            </div>
          </header>

          <div className="basicInfo">
            <h2>Select Services And Availbility</h2>
            <div className="twoForms">
              <form action="" className="serviceForm">
                <label htmlFor="Days">
                  <p className="pInput"> Days/Week </p>
                </label>
                <div className="editinput">
                  <select 
                    id="Days"
                    value={Days_per_week}
                    onChange={(e) => setDaysWeek(e.target.value)}
                  >
                    <option value="Mon">Monday</option>
                    <option value="Tues">Tuesday</option>
                    <option value="Wed">Wednesday</option>
                    <option value="Thurs">Thursday</option>
                    <option value="Fri">Friday</option>
                    <option value="Sat">Saturday</option>
                    <option value="Sun">Sunday</option>
                  </select>
                </div>
                <label htmlFor="Hours">
                  <p className="pInput">Hours/Day </p>
                </label>
                <div className="editinput">
                  <select 
                    id="Hours"
                    value={Hours_per_day}
                    onChange={(e) => setHourDay(e.target.value)}
                  >
                    <option value="6">6 Hours</option>
                    <option value="12">12 Hours</option>
                    <option value="18">18 Hours</option>
                    <option value="24">24 Hours</option>
                  </select>
                </div>
                <label htmlFor="Schedule">
                  <p className="pInput">Schedule Type </p>
                </label>
                <div className="editinput">
                  <select 
                    id="Schedule"
                    value={Schedule}
                    onChange={(e) => setSchedule(e.target.value)}
                  >
                    <option value="morning">6am - 12pm</option>
                    <option value="afternoon">12pm - 6pm</option>
                    <option value="evening">6pm - 12am</option>
                    <option value="night">12am - 6am</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="nav__direction">
              <button className="btnBack" onClick={()=>history(-1)}>
                Back
              </button>
              <Link to="../labReview">
                <button className="btnNextStep">
                  <p>Next step</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
};

export default LabServices;
