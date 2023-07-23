import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

const RegLabContext = createContext();

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
  const [Days_per_week , setDaysWeek] = useState('');
  const [Hours_per_day , setHourDay] = useState('');
  const [Schedule , setSchedule] = useState('');

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
    Schedule, setSchedule
    }

    return ( 
        <RegLabContext.Provider value={contextValueLab}>
            <Outlet/>
        </RegLabContext.Provider>
     );
}
 
export default RegLab;
export {RegLabContext};