import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";

const RegNurseContext = createContext();
const adminData = localStorage.getItem('admin');
const admin = JSON.parse(adminData);

const RegNurse = () => {
    // Add Nurse
    const [UserType , setUserType] = useState('Nurse');
    const [firstname , setFirstname] = useState('');
    const [lastname , setLastname] = useState('');
    const [email , setEmail] = useState('');
    const [Gender , setGender] = useState('Male');
    const [number , setNumber] = useState('');
    const [DOB , setDOB] = useState('');
    const [Nurse_Degree , setDegree] = useState('');
    const [areaOfSpecialization , setSpecialization] = useState('');
    const [nurse_License_number , setLicenseNumber] = useState('');
    const [YearsOfExp , setYearsOfExperience] = useState('');
    const [employStat , setEmploymentStatus] = useState('');
    const [Days_per_week , setDaysWeek] = useState('Mon');
    const [Hours_per_day , setHourDay] = useState('6');
    const [Schedule , setSchedule] = useState('morning');
    const [pensionDeduction, setPensionDeduction] = useState('');
    const [netMonthly, setNetMonthly] = useState('');
    const [totalAnnualPayment, setTotalAnnualPayment] = useState('');
    const [message,setMessage] = useState('')

    const contextValueNurse = { 
        UserType, setUserType, 
        firstname, setFirstname, 
        lastname, setLastname, 
        email, setEmail, 
        Gender, setGender, 
        number, setNumber, 
        DOB, setDOB,
        Nurse_Degree, setDegree, 
        areaOfSpecialization, setSpecialization,
        nurse_License_number, setLicenseNumber,
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
        <RegNurseContext.Provider value={contextValueNurse}>
            <Outlet/>
        </RegNurseContext.Provider>
     );
}
 
export default RegNurse;
export {RegNurseContext};