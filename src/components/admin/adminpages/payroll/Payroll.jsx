import { useState, useEffect } from "react";
import searchIcon from "../../../../assets/icons/search-icon.svg"

const Payroll = () => {
  const [payroll, setPayroll] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredPayroll, setFilteredPayroll] = useState([]);

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

  useEffect(() => {
    const searchWords = search.toLowerCase().split(" ");
    const filteredStaff = payroll.filter((staff) => {
      const fullName = `${staff.firstname} ${staff.lastname}`.toLowerCase();
      return searchWords.every((word) => fullName.includes(word));
    });
    setFilteredPayroll(filteredStaff);
  }, [search, payroll]);

  return ( 
    <div className="wrapPatients">
      <div className="payrollHeader">
        <div className="payrollHead">
          <h2>Payroll</h2>
          <p><span>{filteredPayroll.length} </span>Staff on Payroll</p>
        </div>
        <form className="search-bar" method="get">
            <input 
              className="search__input" 
              type="text" 
              placeholder="Search doctor, nurse etc" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />     
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
      {filteredPayroll.map((payrol) => (
        <div className="allDocs" key={payrol._id} > 
          <p id="user">{`${payrol.firstname} ${payrol.lastname}`}</p>  
          <p>{payrol.id}</p>
          <p> {payrol.UserType}</p>
          <p>{!payrol.pensionDeduction ? 'null' :payrol.pensionDeduction}</p>
          <p>{!payrol.netMonthly ? 'null' : payrol.netMonthly }</p>
          <p>{!payrol.totalAnnualPayment ? 'null' : payrol.totalAnnualPayment}</p> 
        </div>
      ))}
    </div>
   );
}
 
export default Payroll;