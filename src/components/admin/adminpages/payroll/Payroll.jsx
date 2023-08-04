import { useState, useEffect } from "react";
import searchIcon from "../../../../assets/icons/search-icon.svg"

const Payroll = () => {
  const [payroll, setPayroll] = useState([]);

  useEffect(() => {
    // setIsLoading(true);
    fetch("https://hospital-management-backend.onrender.com/admin/allStaff")
      .then((res) => res.json())
      .then((data) => {
        setPayroll(data);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false);
      });
  }, []);

  return ( 
    <div className="wrapPatients">
      <div className="payrollHeader">
        <div className="payrollHead">
          <h2>Payroll</h2>
          <p><span>{payroll.length} </span>Staff(s) on Payroll</p>
        </div>
        <form className="search-bar" method="get">
            <input className="search__input" type="text" placeholder="Search doctor, nurse etc" />     
            <button className="search-icon">
                <img src={searchIcon} alt="" />    
            </button>              
        </form>
      </div>
      <div className="payroll__info">
        <p>Staff Name</p>
        <p>ID</p>
        <p>Role</p>
        <p>Pension Deduction</p>
        <p>Net Monthly Pay</p>
        <p>Total Annual Pay</p>
      </div>
      {payroll.map((payrol) => (
        <div className="allDocs" key={payrol._id} > 
          <p id="user">{`${payrol.firstname} ${payrol.lastname}`}</p>  
          <p>{payrol.id}</p>
          <p> {payrol.UserType}</p>
          <p>{payrol.pensionDeduction}</p>
          <p>{payrol.netMonthly}</p>
          <p>{payrol.totalAnnualPayment}</p> 
        </div>
      ))}
    </div>
   );
}
 
export default Payroll;