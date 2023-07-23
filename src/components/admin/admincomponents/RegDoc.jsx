import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";

const RegdocContext = createContext();

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
    const [Days_per_week , setDaysWeek] = useState('');
    const [Hours_per_day , setHourDay] = useState('');
    const [Schedule , setSchedule] = useState('');

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
        Schedule, setSchedule
      };

    return ( 
        <RegdocContext.Provider value={contextValue}>
            <Outlet />
        </RegdocContext.Provider>
     );
}
 
export default Regdoc;
export {RegdocContext};
