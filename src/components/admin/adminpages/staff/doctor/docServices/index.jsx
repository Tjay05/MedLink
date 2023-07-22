import separator from "../../../../../../assets/icons/Separator.svg";
import { Link,useNavigate } from "react-router-dom";


const DocServices = ({ docDaysWeek, setDocDaysWeek, docHourDay, setDocHourDay, docSchedule, setDocSchedule }) => {
    const history = useNavigate();
  return (
    <>
      <div className="wrapBasicInfo">
        <header className="headBasicInfo">
          <div className="blurBasic">
            <p>
              <span>1 </span> Basic information
            </p>
            <img src={separator} alt="" className="seperator" />
          </div>
          <div className="blurBasic">
            <p>
              <span>2 </span>Enter Details
            </p>
            <img src={separator} alt="" className="seperator" />
          </div>

          <div>
            <p>
              <span>3 </span> Select Services
            </p>
            <img src={separator} alt="" />
          </div>
          
          <div className="blurBasic">
            <p>
              <span>4 </span> Review and Submit
            </p>
            <img src={separator} alt="" className="seperator" />
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
                  value={docDaysWeek}
                  onChange={(e) => setDocDaysWeek(e.target.value)}
                  placeholder="select user type"
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
                  value={docHourDay}
                  onChange={(e) => setDocHourDay(e.target.value)}
                  placeholder="select gender"
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
                  value={docSchedule}
                  onChange={(e) => setDocSchedule(e.target.value)}
                  placeholder="select gender"
                />
              </div>
            </form>
          </div>
          <div className="nav__direction">
            <button className="btnBack" onClick={() => history(-1)}>
              Back
            </button>
            <Link to="../docReview" >
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

export default DocServices;
