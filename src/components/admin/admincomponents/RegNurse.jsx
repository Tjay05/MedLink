import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";

const RegNurseContext = createContext();

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
    const [Days_per_week , setDaysWeek] = useState('');
    const [Hours_per_day , setHourDay] = useState('');
    const [Schedule , setSchedule] = useState('');

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
        Schedule, setSchedule
    }

    return ( 
        <RegNurseContext.Provider value={contextValueNurse}>
            <Outlet/>
        </RegNurseContext.Provider>
     );
}
 
export default RegNurse;
export {RegNurseContext};