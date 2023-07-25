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
import Regdoc from "./components/admin/admincomponents/RegDoc";
import RegPharmacist from "./components/admin/admincomponents/RegPharmacist";
import RegNurse from "./components/admin/admincomponents/RegNurse";
import RegLab from "./components/admin/admincomponents/RegLab";
import RegDom from "./components/admin/admincomponents/RegDomWorker";
import Patient from "./components/admin/adminpages/patients";
import PatientList from "./components/admin/adminpages/patients/PatientList";
import PatDetails from "./components/admin/adminpages/patients/PatientDetails";
import PrevApp from "./components/admin/adminpages/patients/PrevAppoint";
import DocDetails from "./components/admin/adminpages/staff/doctor/DocDetails";

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

  // User Details
  const [pers, setPers] = useState('');
  const [pharM, setPharM] = useState('');
  const [nuRse, setNuRse] = useState('');
  const [labWoRk, setLabWoRk] = useState('');
  const [domWk, setDomWk] = useState('');

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
            {/* Patient Side of Admin */}
            <Route path="patients" element={<Patient/>} >
              <Route index element={<PatientList/>} />
              <Route path="patientdetails" element={<PatDetails/>}>
                <Route index element={<PrevApp/>} />
              </Route>
            </Route>
            {/* Doctor */}
            <Route index element={<AddDoctor pers={pers} setPers={setPers} />} />
            <Route path="docdetails" element={<DocDetails pers={pers}/>} />
            <Route path="AddDoctor" element={<Regdoc/>} >
              <Route index element={<DocBasicInfo />}/>
              <Route path="docEnterDetails" element={<DocEnterDetails  />} />
              <Route path="docServices" element={<DocServices />} />
              <Route path="docReview" element={<DocReview />} />
              <Route path="docSuccessAdd" element={<DocSuccessAdd />} />
            </Route>

            {/* Pharmacist */}
            <Route path="pharmacist" element={<AddPharm pharM={pharM} setPharM={setPharM} />} />
            <Route path="Addpharmacist" element={<RegPharmacist/>} >
              <Route index element={<PharmBasicInfo />} />
              <Route path="pharmEnterDetails" element={<PharmEnterDetails />} />
              <Route path="pharmServices" element={<PharmServices />} />
              <Route path="pharmReview" element={<PharmReview />} />
              <Route path="pharmSuccessAdd" element={<PharmSuccessAdd/>} />
            </Route>

            {/* Nurses */}
            <Route path="nurse" element={<AddNurse nuRse={nuRse} setNuRse={setNuRse} />} />
            <Route path="AddNurse" element={<RegNurse/>} >
              <Route index element={<NurseBasicInfo />} />
              <Route path="nurseEnterDetails" element={<NursesEnterDetails />} />
              <Route path="nurseServices" element={<NursesServices />} />
              <Route path="nurseReview" element={<NursesReview />} />
              <Route path="nurseSuccessAdd" element={<NursesSuccessAdd/>} />
            </Route>

            {/* Lab Scientist */}
            <Route path="labScientist" element={<AddLab labWoRk={labWoRk} setLabWoRk={setLabWoRk} />} />
            <Route path="AddLabSci" element={<RegLab/>}>
              <Route index element={<LabBasicInfo />} />
              <Route path="labEnterDetails" element={<LabEnterDetails />} />
              <Route path="labServices" element={<LabServices />} />
              <Route path="labReview" element={<LabReview />} />
              <Route path="labAddSuccess" element={<LabAddSuccess/>} />
            </Route>

            {/* Domestic Workers */}
            <Route path="domesticWorkers" element={<AddDomesticWorkers domWk={domWk} setDomWk={setDomWk} />} />
            <Route path="AddDomWorker" element={<RegDom/>}>
              <Route index element={<BasicInfoDomW />} />
              <Route path="domEnterDetails" element={<DomEnterDetails />} />
              <Route path="domServices" element={<DomServices />} />
              <Route path="domReview" element={<DomReview />} />
              <Route path="domAddSuccess" element={<DomAddSuccess/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
