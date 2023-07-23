import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

const RegDomContext = createContext();

const RegDom = () => {
    // Add Domestic Worker
    const [UserType , setUserType] = useState('Domestic Worker');
    const [firstname , setFirstname] = useState('');
    const [lastname , setLastname] = useState('');
    const [email , setEmail] = useState('');
    const [Gender , setGender] = useState('Male');
    const [number , setNumber] = useState('');
    const [DOB , setDOB] = useState('');
    const [education , setCertificate] = useState('');
    const [areaOfSpecialization , setSpecialization] = useState('');
    const [YearsOfExp , setYearsOfExperience] = useState('');
    const [employStat , setEmploymentStatus] = useState('');
    const [Days_per_week , setDaysWeek] = useState('');
    const [Hours_per_day , setHourDay] = useState('');
    const [Schedule , setSchedule] = useState('');

    const contextValueDom = { 
        UserType, setUserType, 
        firstname, setFirstname, 
        lastname, setLastname, 
        email, setEmail, 
        Gender, setGender, 
        number, setNumber, 
        DOB, setDOB, 
        education, setCertificate, 
        areaOfSpecialization, setSpecialization, 
        YearsOfExp, setYearsOfExperience, 
        employStat, setEmploymentStatus,
        Days_per_week, setDaysWeek, 
        Hours_per_day, setHourDay, 
        Schedule, setSchedule
    }

    return ( 
        <RegDomContext.Provider value={contextValueDom}>
            <Outlet/>
        </RegDomContext.Provider>
     );
}
 
export default RegDom;
export {RegDomContext};