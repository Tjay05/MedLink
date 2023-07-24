import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

const RegLabContext = createContext();
const adminData = localStorage.getItem('admin');
const admin = JSON.parse(adminData);

const RegLab = () => {    
  // Add Lab Scientist
  const [UserType , setUserType] = useState('Lab Scientist');
  const [firstname , setFirstname] = useState('');
  const [lastname , setLastname] = useState('');
  const [email , setEmail] = useState('');
  const [Gender , setGender] = useState('Male');
  const [number , setNumber] = useState('');
  const [DOB , setDOB] = useState('');
  const [lab_Degree , setDegree] = useState('');
  const [areaOfSpecialization , setSpecialization] = useState('');
  const [lab_License , setLicenseNumber] = useState('');
  const [YearsOfExp , setYearsOfExperience] = useState('');
  const [employStat , setEmploymentStatus] = useState('');
  const [Days_per_week , setDaysWeek] = useState('Mon');
  const [Hours_per_day , setHourDay] = useState('6');
  const [Schedule , setSchedule] = useState('morning');
  const [pensionDeduction, setPensionDeduction] = useState('');
  const [netMonthly, setNetMonthly] = useState('');
  const [totalAnnualPayment, setTotalAnnualPayment] = useState('');
  const [message,setMessage] = useState('')

  const contextValueLab = { 
    UserType, setUserType, 
    firstname, setFirstname, 
    lastname, setLastname, 
    email, setEmail, 
    Gender, setGender, 
    number, setNumber, 
    DOB, setDOB,
    lab_Degree, setDegree, 
    areaOfSpecialization, setSpecialization, 
    lab_License, setLicenseNumber, 
    YearsOfExp, setYearsOfExperience, 
    employStat, setEmploymentStatus,
    Days_per_week, setDaysWeek, 
    Hours_per_day, setHourDay, 
    Schedule, setSchedule,
    pensionDeduction, setPensionDeduction,
    netMonthly, setNetMonthly,
    totalAnnualPayment, setTotalAnnualPayment,
    addedBy:`${admin.firstname} ${admin.lastname}`,
    message, setMessage
    }

    return ( 
        <RegLabContext.Provider value={contextValueLab}>
            <Outlet/>
        </RegLabContext.Provider>
     );
}
 
export default RegLab;
export {RegLabContext};
