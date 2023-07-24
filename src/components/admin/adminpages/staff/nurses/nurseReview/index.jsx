import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegNurseContext } from "../../../../admincomponents/RegNurse";
import { useState } from "react";

const NurseReview = () => {
  const [isPending, setIsPending] = useState(false);
  const { UserType, firstname, lastname, email, Gender, number, DOB, Nurse_Degree, areaOfSpecialization, nurse_License_number, YearsOfExp, employStat, Days_per_week, Hours_per_day, Schedule, pensionDeduction, setPensionDeduction, netMonthly, setNetMonthly, totalAnnualPayment, setTotalAnnualPayment,addedBy, message, setMessage } = useContext(RegNurseContext);

  const history = useNavigate()
  
  const handleSubmit = async() => {

    const nurse = { UserType, firstname, lastname, email, Gender, number, DOB, Nurse_Degree, areaOfSpecialization, nurse_License_number, YearsOfExp, employStat, Days_per_week, Hours_per_day, Schedule, pensionDeduction, netMonthly, totalAnnualPayment, addedBy }

    console.log(nurse);

    setIsPending(true);

    try {
      const response = await fetch("https://hospital-management-backend.onrender.com/nurse/register", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nurse)
      })
      const data = await response.json();
      if (response.ok) {
        setIsPending(false)
        history("../nurseSuccessAdd")
        setMessage(data);
      }
      else {
        setMessage(data)
      }
    } catch(error) {
      console.log(error);
    }
  }
  
  return (
    <>
      <div className="wrapBasicInfo">
        <header className="headBasicInfo">
          <div className="blurBasic">
            <p>
              <Link to="../AddNurse"><span>1 </span> Basic information</Link>
            </p>
            <img src={seperator} alt="" className="seperator" />
          </div>
          <div className="blurBasic">
            <p>
              <Link to="../nurseEnterDetails"><span>2 </span>Enter Details</Link>
            </p>
            <img src={seperator} alt="" className="seperator" />
          </div>
          <div className="blurBasic">
            <p>
              <Link to="../nurseServices"><span>3 </span> Select Services</Link>
            </p>
            <img src={seperator} alt="" className="seperator" />
          </div>

          <div>
            <p>
              <span>4 </span> Wages and Salary
            </p>
            <img src={seperator} alt="" />
          </div>
        </header>
        <div className="basicInfo">
          <div className="reviewAndSubmit">
            <h2>Wages and Salary</h2>
          </div>
          <div className="twoForms">
            <form action="">
              <label htmlFor="pension"><p className="pInput">Pension Deduction</p></label>
              <input 
                type="text" 
                id="pension"
                className="editInput" 
                disabled
                value={netMonthly * 0.1}
                onChange={setPensionDeduction(String(netMonthly * 0.1))}
                placeholder="Pension Deduction"
              />
              <label htmlFor="monthly"><p className="pInput">Monthly Payment</p></label>
              <input 
                type="text" 
                id="monthly"
                className="editInput" 
                value={netMonthly}
                onChange={(e) => setNetMonthly(e.target.value)}
                placeholder="Monthly Payment"
              />
              <label htmlFor="yearly"><p className="pInput">Annual Payment</p></label>
              <input 
                type="text" 
                id="yearly"
                className="editInput" 
                value={netMonthly * 12}
                onChange={setTotalAnnualPayment(String(netMonthly * 12))}
                disabled
                placeholder="Yearly Payment"
              />

            </form>
          </div>
          <div className="nav__direction">
            <button className="btnBack" onClick={() => history(-1)}>
              Back
            </button>
            {!isPending && <button onClick={handleSubmit} className="btnNextStep">
              Submit
            </button>}
            {isPending && <button disabled className="btnNextStep">Adding Nurse...</button> }
          </div>
          <p className="error-message">{message}</p>
        </div>
      </div>
    </>
  );
};

export default NurseReview;
