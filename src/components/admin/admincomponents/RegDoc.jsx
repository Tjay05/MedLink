import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";

const RegdocContext = createContext();
const adminData = localStorage.getItem('admin');
const admin = JSON.parse(adminData);
const Regdoc = () => {
    // Add doctor
    const [UserType , setUserType] = useState('Doctor');
    const [firstname , setFirstname] = useState('');
    const [lastname , setLastname] = useState('');
    const [email , setEmail] = useState('');
    const [Gender , setGender] = useState('Male');
    const [number , setNumber] = useState('');
    const [DOB , setDOB] = useState('');
    const [medicalDegree , setMedDegree] = useState('');
    const [areaOfSpecialization , setSpecialization] = useState('');
    const [med_License_number , setMedLicenseNumber] = useState('');
    const [YearsOfExp , setYearsOfExperience] = useState('');
    const [employStat , setEmploymentStatus] = useState('');
    const [Days_per_week , setDaysWeek] = useState('Mon');
    const [Hours_per_day , setHourDay] = useState('6');
    const [Schedule , setSchedule] = useState('morning');
    const [pensionDeduction, setPensionDeduction] = useState('');
    const [netMonthly, setNetMonthly] = useState('');
    const [totalAnnualPayment, setTotalAnnualPayment] = useState('');
    const [message,setMessage] = useState('')
    const contextValue = {
        UserType, setUserType,
        firstname, setFirstname, 
        lastname, setLastname, 
        email, setEmail, 
        Gender, setGender, 
        number, setNumber, 
        DOB, setDOB,
        medicalDegree, setMedDegree, 
        areaOfSpecialization, setSpecialization, 
        med_License_number, setMedLicenseNumber, 
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
      };

    return ( 
        <RegdocContext.Provider value={contextValue}>
            <Outlet />
        </RegdocContext.Provider>
     );
}
 
export default Regdoc;
export {RegdocContext};
