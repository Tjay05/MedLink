import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";

const RegPharmacistContext = createContext()
const adminData = localStorage.getItem('admin');
const admin = JSON.parse(adminData);

const RegPharmacist = () => {
    // Add Pharmacist
    const [UserType , setUserType] = useState('Pharmacist');
    const [firstname , setFirstname] = useState('');
    const [lastname , setLastname] = useState('');
    const [email , setEmail] = useState('');
    const [Gender , setGender] = useState('Male');
    const [number , setNumber] = useState('');
    const [DOB , setDOB] = useState('');
    const [Pharm_Degree , setDegree] = useState('');
    const [area_Of_Specialization , setSpecialization] = useState('');
    const [Pharm_License , setLicenseNumber] = useState('');
    const [Years_Of_Exp , setYearsOfExperience] = useState('');
    const [employ_Stat , setEmploymentStatus] = useState('');
    const [Days_per_week , setDaysWeek] = useState('Mon');
    const [Hours_per_day , setHourDay] = useState('6');
    const [Schedule , setSchedule] = useState('morning');
    const [pensionDeduction, setPensionDeduction] = useState('');
    const [netMonthly, setNetMonthly] = useState('');
    const [totalAnnualPayment, setTotalAnnualPayment] = useState('');
    const [message,setMessage] = useState('')

    const contextValuePharm = {
        UserType, setUserType, 
        firstname, setFirstname, 
        lastname, setLastname, 
        email, setEmail, 
        Gender, setGender, 
        number, setNumber, 
        DOB, setDOB,
        Pharm_Degree, setDegree, 
        area_Of_Specialization, setSpecialization, 
        Pharm_License, setLicenseNumber, 
        Years_Of_Exp, setYearsOfExperience, 
        employ_Stat, setEmploymentStatus,
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
        <RegPharmacistContext.Provider value={contextValuePharm}>
            <Outlet/>
        </RegPharmacistContext.Provider>
     );
}
 
export default RegPharmacist;
export {RegPharmacistContext};
