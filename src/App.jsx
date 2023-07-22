import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

// Layouts
import SignIn from "./components/SignIn";

// User Forms
import Adminform from "./components/userforms/Adminform";
import DoctorForm from "./components/userforms/DoctorForm";
import Labform from "./components/userforms/Labform";
import PharmForm from "./components/userforms/Pharmform";

// Admin Pages
import Header from "./components/admin/admincomponents/Header";

// Admin: Doc Pages
import AddDoctor from "./components/admin/adminpages/staff/doctor";
import DocBasicInfo from "./components/admin/adminpages/staff/doctor/docBasicInfo";
import DocEnterDetails from "./components/admin/adminpages/staff/doctor/docEnterDetails";
import DocServices from "./components/admin/adminpages/staff/doctor/docServices";
import DocReview from "./components/admin/adminpages/staff/doctor/docReview";
import DocSuccessAdd from "./components/admin/adminpages/staff/doctor/docSucessAdd";

// Pharmacist Pages
import AddPharm from "./components/admin/adminpages/staff/pharmarcist/index";
import PharmBasicInfo from "./components/admin/adminpages/staff/pharmarcist/pharmBasicInfo";
import PharmEnterDetails from "./components/admin/adminpages/staff/pharmarcist/pharmEnterDetails";
import PharmServices from "./components/admin/adminpages/staff/pharmarcist/pharmServices";
import PharmReview from "./components/admin/adminpages/staff/pharmarcist/pharmReview";
import PharmSuccessAdd from "./components/admin/adminpages/staff/pharmarcist/pharmSuccessAdd";

// Nurse Pages
import AddNurse from "./components/admin/adminpages/staff/nurses/index";
import NurseBasicInfo from "./components/admin/adminpages/staff/nurses/nurseBasicInfo";
import NursesEnterDetails from "./components/admin/adminpages/staff/nurses/nurseEnterDetails";
import NursesServices from "./components/admin/adminpages/staff/nurses/nurseServices";
import NursesReview from "./components/admin/adminpages/staff/nurses/nurseReview";
import NursesSuccessAdd from "./components/admin/adminpages/staff/nurses/nurseSuccessAdd";

// Lab Scientist Pages
import AddLab from "./components/admin/adminpages/staff/labScientist/index";
import LabBasicInfo from "./components/admin/adminpages/staff/labScientist/labBasicInfo";
import LabEnterDetails from "./components/admin/adminpages/staff/labScientist/labEnterDetails";
import LabServices from "./components/admin/adminpages/staff/labScientist/labServices";
import LabReview from "./components/admin/adminpages/staff/labScientist/labReview";
import LabAddSuccess from "./components/admin/adminpages/staff/labScientist/labAddSuccess"

// Domestic Workers Page
import AddDomesticWorkers from "./components/admin/adminpages/staff/domesticWorkers/index";
import BasicInfoDomW from "./components/admin/adminpages/staff/domesticWorkers/domWorkBasicInfo";
import DomEnterDetails from "./components/admin/adminpages/staff/domesticWorkers/domEnterDetails";
import DomServices from "./components/admin/adminpages/staff/domesticWorkers/domServices";
import DomReview from "./components/admin/adminpages/staff/domesticWorkers/domReview";
import DomAddSuccess from "./components/admin/adminpages/staff/domesticWorkers/domAddSuccess";

// Doctor Pages
import NavLayout from "./layouts/NavLayout";
import DocDashboard from "./components/dochome/DocDashboard";
import DocAppointment from "./components/dochome/DocAppointment";
import DocNotifications from "./components/dochome/DocNotifications";
import AppointmentDetails from "./components/dochome/AppointmentDetails";
import DocProfile from "./components/dochome/DocProfile";

function App() {
  // ADMIN
  const [hospitalId, setHospitalId] = useState('');
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  // PHARMACIST
  const [pharmId, setPharmId] = useState('');
  const [pharmPword, setPharmPword] = useState('');

  // LAB
  const [labId, setLabId] = useState('');
  const [labPassword, setLabPassword] = useState('');

  // DOCTOR
  const [docId, setDocId] = useState("");
  const [docPword, setDocPword] = useState("");

  // Responses
  const [data, setData] = useState('');
  const [adminData, setAdminData] = useState('');

  // REGISTRATION VARIABLES
  // Add doctor
  const [docUserType , setDocUserType] = useState('Doctor');
  const [docFirstname , setDocFirstname] = useState('');
  const [docLastname , setDocLastname] = useState('');
  const [docEmail , setDocEmail] = useState('');
  const [docGender , setDocGender] = useState('Male');
  const [docNumber , setDocNumber] = useState('');
  const [docDOB , setDocDOB] = useState('');
  const [docMedDegree , setDocMedDegree] = useState('');
  const [docSpecialization , setDocSpecialization] = useState('');
  const [medLicenseNumber , setMedLicenseNumber] = useState('');
  const [docYearsOfExperience , setDocYearsOfExperience] = useState('');
  const [docEmploymentStatus , setDocEmploymentStatus] = useState('');
  const [docDaysWeek , setDocDaysWeek] = useState('');
  const [docHourDay , setDocHourDay] = useState('');
  const [docSchedule , setDocSchedule] = useState('');

  // Add Pharmacist
  const [pharmUserType , setPharmUserType] = useState('Pharmacist');
  const [pharmFirstname , setPharmFirstname] = useState('');
  const [pharmLastname , setPharmLastname] = useState('');
  const [pharmEmail , setPharmEmail] = useState('');
  const [pharmGender , setPharmGender] = useState('Male');
  const [pharmNumber , setPharmNumber] = useState('');
  const [pharmDOB , setPharmDOB] = useState('');
  const [pharmDegree , setPharmDegree] = useState('');
  const [pharmSpecialization , setPharmSpecialization] = useState('');
  const [pharmLicenseNumber , setPharmLicenseNumber] = useState('');
  const [pharmYearsOfExperience , setPharmYearsOfExperience] = useState('');
  const [pharmEmploymentStatus , setPharmEmploymentStatus] = useState('');
  const [pharmDaysWeek , setPharmDaysWeek] = useState('');
  const [pharmHourDay , setPharmHourDay] = useState('');
  const [pharmSchedule , setPharmSchedule] = useState('');

  // Add Nurse
  const [nurseUserType , setNurseUserType] = useState('Nurse');
  const [nurseFirstname , setNurseFirstname] = useState('');
  const [nurseLastname , setNurseLastname] = useState('');
  const [nurseEmail , setNurseEmail] = useState('');
  const [nurseGender , setNurseGender] = useState('Male');
  const [nurseNumber , setNurseNumber] = useState('');
  const [nurseDOB , setNurseDOB] = useState('');
  const [nurseDegree , setNurseDegree] = useState('');
  const [nurseSpecialization , setNurseSpecialization] = useState('');
  const [nurseLicenseNumber , setNurseLicenseNumber] = useState('');
  const [nurseYearsOfExperience , setNurseYearsOfExperience] = useState('');
  const [nurseEmploymentStatus , setNurseEmploymentStatus] = useState('');
  const [nurseDaysWeek , setNurseDaysWeek] = useState('');
  const [nurseHourDay , setNurseHourDay] = useState('');
  const [nurseSchedule , setNurseSchedule] = useState('');

  // Add Lab Scientist
  const [labUserType , setLabUserType] = useState('Lab Scientist');
  const [labFirstname , setLabFirstname] = useState('');
  const [labLastname , setLabLastname] = useState('');
  const [labEmail , setLabEmail] = useState('');
  const [labGender , setLabGender] = useState('Male');
  const [labNumber , setLabNumber] = useState('');
  const [labDOB , setLabDOB] = useState('');
  const [labDegree , setLabDegree] = useState('');
  const [labSpecialization , setLabSpecialization] = useState('');
  const [labLicenseNumber , setLabLicenseNumber] = useState('');
  const [labYearsOfExperience , setLabYearsOfExperience] = useState('');
  const [labEmploymentStatus , setLabEmploymentStatus] = useState('');
  const [labDaysWeek , setLabDaysWeek] = useState('');
  const [labHourDay , setLabHourDay] = useState('');
  const [labSchedule , setLabSchedule] = useState('');

  // Add Domestic Worker
  const [domUserType , setDomUserType] = useState('Domestic Worker');
  const [domFirstname , setDomFirstname] = useState('');
  const [domLastname , setDomLastname] = useState('');
  const [domEmail , setDomEmail] = useState('');
  const [domGender , setDomGender] = useState('Male');
  const [domNumber , setDomNumber] = useState('');
  const [domDOB , setDomDOB] = useState('');
  const [domCertificate , setDomCertificate] = useState('');
  const [domSpecialization , setDomSpecialization] = useState('');
  const [domLicenseNumber , setDomLicenseNumber] = useState('');
  const [domYearsOfExperience , setDomYearsOfExperience] = useState('');
  const [domEmploymentStatus , setDomEmploymentStatus] = useState('');
  const [domDaysWeek , setDomDaysWeek] = useState('');
  const [domHourDay , setDomHourDay] = useState('');
  const [domSchedule , setDomSchedule] = useState('');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" element={<SignIn hospitalId={hospitalId} adminData={adminData} setAdminData={setAdminData} adminId={adminId} adminPassword={adminPassword} pharmId={pharmId} pharmPword={pharmPword} labId={labId} labPassword={labPassword} docId={docId} docPword={docPword} data={data} setData={setData} />} >
            <Route index element={<Adminform hospitalId={hospitalId} adminData={adminData} setAdminData={setAdminData} setHospitalId={setHospitalId} adminId={adminId} setAdminId={setAdminId} adminPassword={adminPassword} setAdminPassword={setAdminPassword} />} />
            <Route path="pharm" element={<PharmForm pharmId={pharmId} data={data} setData={setData} setPharmId={setPharmId} pharmPword={pharmPword} setPharmPword={setPharmPword}  />} />
            <Route path="Lab" element={<Labform labId={labId} data={data} setData={setData} setLabId={setLabId} labPassword={labPassword} setLabPassword={setLabPassword} />} />
            <Route path="doctor" element={<DoctorForm docId={docId} data={data} setData={setData} setDocId={setDocId} docPword={docPword}  setDocPword={setDocPword} />} />
          </Route>
          <Route path="dochome" element={<NavLayout/>} >
            <Route index element={<DocDashboard/>}/>
            <Route path="appointment" element={<DocAppointment/>} />
            <Route path="details" element={<AppointmentDetails/>} />
            <Route path="notifications" element={<DocNotifications/>} />
            <Route path="docProfile" element={<DocProfile/>}/>
          </Route>
          <Route path="adminhome" element={<Header/>} >
            {/* Doctor */}
            <Route index element={<AddDoctor/>} />
            <Route path="AddDoctor" element={
              <DocBasicInfo docUserType={docUserType} setDocUserType={setDocUserType} docFirstname={docFirstname} setDocFirstname={setDocFirstname} docLastname={docLastname} setDocLastname={setDocLastname} docEmail={docEmail} setDocEmail={setDocEmail} docGender={docGender} setDocGender={setDocGender} docNumber={docNumber} setDocNumber={setDocNumber} docDOB={docDOB} setDocDOB={setDocDOB} />
            }/>
            <Route path="docEnterDetails" element={
              <DocEnterDetails docMedDegree={docMedDegree} setDocMedDegree={setDocMedDegree} docSpecialization={docSpecialization} setDocSpecialization={setDocSpecialization} medLicenseNumber={medLicenseNumber} setMedLicenseNumber={setMedLicenseNumber} docYearsOfExperience={docYearsOfExperience} setDocYearsOfExperience={setDocYearsOfExperience} docEmploymentStatus={docEmploymentStatus} setDocEmploymentStatus={setDocEmploymentStatus} />
            } />
            <Route path="docServices" element={
              <DocServices docDaysWeek={docDaysWeek} setDocDaysWeek={setDocDaysWeek} docHourDay={docHourDay} setDocHourDay={setDocHourDay} docSchedule={docSchedule} setDocSchedule={setDocSchedule} />
            } />
            <Route path="docReview" element={
              <DocReview docUserType={docUserType} setDocUserType={setDocUserType} docFirstname={docFirstname} setDocFirstname={setDocFirstname} docLastname={docLastname} setDocLastname={setDocLastname} docEmail={docEmail} setDocEmail={setDocEmail} docGender={docGender} setDocGender={setDocGender} docNumber={docNumber} setDocNumber={setDocNumber} docDOB={docDOB} setDocDOB={setDocDOB} docMedDegree={docMedDegree} setDocMedDegree={setDocMedDegree} docSpecialization={docSpecialization} setDocSpecialization={setDocSpecialization} medLicenseNumber={medLicenseNumber} setMedLicenseNumber={setMedLicenseNumber} docYearsOfExperience={docYearsOfExperience} setDocYearsOfExperience={setDocYearsOfExperience} docEmploymentStatus={docEmploymentStatus} setDocEmploymentStatus={setDocEmploymentStatus} docDaysWeek={docDaysWeek} setDocDaysWeek={setDocDaysWeek} docHourDay={docHourDay} setDocHourDay={setDocHourDay} docSchedule={docSchedule} setDocSchedule={setDocSchedule}/>
            } />
            <Route path="docSuccessAdd" element={<DocSuccessAdd docFirstname={docFirstname} docLastname={docLastname} />} />

            {/* Pharmacist */}
            <Route path="pharmacist" element={<AddPharm/>} />
            <Route path="Addpharmacist" element={
              <PharmBasicInfo pharmUserType={pharmUserType} setPharmUserType={setPharmUserType} pharmFirstname={pharmFirstname} setPharmFirstname={setPharmFirstname} pharmLastname={pharmLastname} setPharmLastname={setPharmLastname} pharmEmail={pharmEmail} setPharmEmail={setPharmEmail} pharmGender={pharmGender} setPharmGender={setPharmGender} pharmNumber={pharmNumber} setPharmNumber={setPharmNumber} pharmDOB={pharmDOB} setPharmDOB={setPharmDOB} />
            } />
            <Route path="pharmEnterDetails" element={
              <PharmEnterDetails pharmDegree={pharmDegree} setPharmDegree={setPharmDegree} pharmSpecialization={pharmSpecialization} setPharmSpecialization={setPharmSpecialization} pharmLicenseNumber={pharmLicenseNumber} setPharmLicenseNumber={setPharmLicenseNumber} pharmYearsOfExperience={pharmYearsOfExperience} setPharmYearsOfExperience={setPharmYearsOfExperience} pharmEmploymentStatus={pharmEmploymentStatus} setPharmEmploymentStatus={setPharmEmploymentStatus} />
            } />
            <Route path="pharmServices" element={
              <PharmServices pharmDaysWeek={pharmDaysWeek} setPharmDaysWeek={setPharmDaysWeek} pharmHourDay={pharmHourDay} setPharmHourDay={setPharmHourDay} pharmSchedule={pharmSchedule} setPharmSchedule={setPharmSchedule} />
            } />
            <Route path="pharmReview" element={
              <PharmReview pharmUserType={pharmUserType} pharmFirstname={pharmFirstname} pharmLastname={pharmLastname} pharmEmail={pharmEmail} pharmGender={pharmGender} pharmNumber={pharmNumber} pharmDOB={pharmDOB} pharmDegree={pharmDegree} pharmSpecialization={pharmSpecialization} pharmLicenseNumber={pharmLicenseNumber} pharmYearsOfExperience={pharmYearsOfExperience} pharmEmploymentStatus={pharmEmploymentStatus} pharmDaysWeek={pharmDaysWeek} pharmHourDay={pharmHourDay} pharmSchedule={pharmSchedule} />
            } />
            <Route path="pharmSuccessAdd" element={<PharmSuccessAdd/>} />

            {/* Nurses */}
            <Route path="nurse" element={<AddNurse/>} />
            <Route path="AddNurse" element={
              <NurseBasicInfo nurseUserType={nurseUserType} setNurseUserType={setNurseUserType} nurseFirstname={nurseFirstname} setNurseFirstname={setNurseFirstname} nurseLastname={nurseLastname} setNurseLastname={setNurseLastname} nurseEmail={nurseEmail} setNurseEmail={setNurseEmail} nurseGender={nurseGender} setNurseGender={setNurseGender} nurseNumber={nurseNumber} setNurseNumber={setNurseNumber} nurseDOB={nurseDOB} setNurseDOB={setNurseDOB} />
            } />
            <Route path="nurseEnterDetails" element={
              <NursesEnterDetails nurseDegree={nurseDegree} setNurseDegree={setNurseDegree} nurseSpecialization={nurseSpecialization} setNurseSpecialization={setNurseSpecialization} nurseLicenseNumber={nurseLicenseNumber} setNurseLicenseNumber={setNurseLicenseNumber} nurseYearsOfExperience={nurseYearsOfExperience} setNurseYearsOfExperience={setNurseYearsOfExperience} nurseEmploymentStatus={nurseEmploymentStatus} setNurseEmploymentStatus={setNurseEmploymentStatus} />
            } />
            <Route path="nurseServices" element={
              <NursesServices nurseDaysWeek={nurseDaysWeek} setNurseDaysWeek={setNurseDaysWeek} nurseHourDay={nurseHourDay} setNurseHourDay={setNurseHourDay} nurseSchedule={nurseSchedule} setNurseSchedule={setNurseSchedule} />
            } />
            <Route path="nurseReview" element={
              <NursesReview nurseUserType={nurseUserType} nurseFirstname={nurseFirstname} nurseLastname={nurseLastname} nurseEmail={nurseEmail} nurseGender={nurseGender} nurseNumber={nurseNumber} nurseDOB={nurseDOB} nurseDegree={nurseDegree} nurseSpecialization={nurseSpecialization} nurseLicenseNumber={nurseLicenseNumber} nurseYearsOfExperience={nurseYearsOfExperience} nurseEmploymentStatus={nurseEmploymentStatus} nurseDaysWeek={nurseDaysWeek} nurseHourDay={nurseHourDay} nurseSchedule={nurseSchedule} />
            } />
            <Route path="nurseSuccessAdd" element={<NursesSuccessAdd/>} />

            {/* Lab Scientist */}
            <Route path="labScientist" element={<AddLab/>} />
            <Route path="AddLabSci" element={
              <LabBasicInfo labUserType={labUserType} setLabUserType={setLabUserType} labFirstname={labFirstname} setLabFirstname={setLabFirstname} labLastname={labLastname} setLabLastname={setLabLastname} labEmail={labEmail} setLabEmail={setLabEmail} labGender={labGender} setLabGender={setLabGender} labNumber={labNumber} setLabNumber={setLabNumber} labDOB={labDOB} setLabDOB={setLabDOB} />
            } />
            <Route path="labEnterDetails" element={
              <LabEnterDetails labDegree={labDegree} setLabDegree={setLabDegree} labSpecialization={labSpecialization} setLabSpecialization={setLabSpecialization} labLicenseNumber={labLicenseNumber} setLabLicenseNumber={setLabLicenseNumber} labYearsOfExperience={labYearsOfExperience} setLabYearsOfExperience={setLabYearsOfExperience} labEmploymentStatus={labEmploymentStatus} setLabEmploymentStatus={setLabEmploymentStatus} />
            } />
            <Route path="labServices" element={
              <LabServices labDaysWeek={labDaysWeek} setLabDaysWeek={setLabDaysWeek} labHourDay={labHourDay} setLabHourDay={setLabHourDay} labSchedule={labSchedule} setLabSchedule={setLabSchedule} />
            } />
            <Route path="labReview" element={
              <LabReview labUserType={labUserType} labFirstname={labFirstname} labLastname={labLastname} labEmail={labEmail} labGender={labGender} labNumber={labNumber} labDOB={labDOB} labDegree={labDegree} labSpecialization={labSpecialization} labLicenseNumber={labLicenseNumber} labYearsOfExperience={labYearsOfExperience} labEmploymentStatus={labEmploymentStatus} labDaysWeek={labDaysWeek} labHourDay={labHourDay} labSchedule={labSchedule} />
            } />
            <Route path="labAddSuccess" element={<LabAddSuccess/>} />

            {/* Domestic Workers */}
            <Route path="domesticWorkers" element={<AddDomesticWorkers/>} />
            <Route path="AddDomWorker" element={
              <BasicInfoDomW domUserType={domUserType} setDomUserType={setDomUserType} domFirstname={domFirstname} setDomFirstname={setDomFirstname} domLastname={domLastname} setDomLastname={setDomLastname} domEmail={domEmail} setDomEmail={setDomEmail} domGender={domGender} setDomGender={setDomGender} domNumber={domNumber} setDomNumber={setDomNumber} domDOB={domDOB} setDomDOB={setDomDOB} />
            } />
            <Route path="domEnterDetails" element={
              <DomEnterDetails domCertificate={domCertificate} setDomCertificate={setDomCertificate} domSpecialization={domSpecialization} setDomSpecialization={setDomSpecialization} domYearsOfExperience={domYearsOfExperience} setDomYearsOfExperience={setDomYearsOfExperience} domEmploymentStatus={domEmploymentStatus} setDomEmploymentStatus={setDomEmploymentStatus} />
            } />
            <Route path="domServices" element={
              <DomServices domDaysWeek={domDaysWeek} setDomDaysWeek={setDomDaysWeek} domHourDay={domHourDay} setDomHourDay={setDomHourDay} domSchedule={domSchedule} setDomSchedule={setDomSchedule} />
            } />
            <Route path="domReview" element={
              <DomReview domUserType={domUserType} domFirstname={domFirstname} domLastname={domLastname} domEmail={domEmail} domGender={domGender} domNumber={domNumber} domDOB={domDOB} domCertificate={domCertificate} domSpecialization={domSpecialization} domYearsOfExperience={domYearsOfExperience} domEmploymentStatus={domEmploymentStatus} domDaysWeek={domDaysWeek} domHourDay={domHourDay} domSchedule={domSchedule} />
            } />
            <Route path="domAddSuccess" element={<DomAddSuccess/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
