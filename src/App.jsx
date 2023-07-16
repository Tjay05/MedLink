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

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" element={<SignIn hospitalId={hospitalId} adminId={adminId} adminPassword={adminPassword} pharmId={pharmId} pharmPword={pharmPword} labId={labId} labPassword={labPassword} docId={docId} docPword={docPword} data={data} setData={setData} />} >
            <Route index element={<Adminform hospitalId={hospitalId} data={data} setData={setData} setHospitalId={setHospitalId} adminId={adminId} setAdminId={setAdminId} adminPassword={adminPassword} setAdminPassword={setAdminPassword} />} />
            <Route path="pharm" element={<PharmForm pharmId={pharmId} data={data} setData={setData} setPharmId={setPharmId} pharmPword={pharmPword} setPharmPword={setPharmPword}  />} />
            <Route path="Lab" element={<Labform labId={labId} data={data} setData={setData} setLabId={setLabId} labPassword={labPassword} setLabPassword={setLabPassword} />} />
            <Route path="doctor" element={<DoctorForm docId={docId} data={data} setData={setData} setDocId={setDocId} docPword={docPword}  setDocPword={setDocPword} />} />
          </Route>
          <Route path="dochome" element={<NavLayout/>} >
            <Route index element={<DocDashboard/>}/>
            <Route path="appointment" element={<DocAppointment/>} />
            <Route path="details" element={<AppointmentDetails/>} />
            <Route path="notifications" element={<DocNotifications/>} />
          </Route>
          <Route path="adminhome" element={<Header/>} >
            {/* Doctor */}
            <Route index element={<AddDoctor/>} />
            <Route path="AddDoctor" element={<DocBasicInfo/>} />
            <Route path="docEnterDetails" element={<DocEnterDetails/>} />
            <Route path="docServices" element={<DocServices/>} />
            <Route path="docReview" element={<DocReview/>} />
            <Route path="docSuccessAdd" element={<DocSuccessAdd/>} />

            {/* Pharmacist */}
            <Route path="pharmacist" element={<AddPharm/>} />
            <Route path="Addpharmacist" element={<PharmBasicInfo/>} />
            <Route path="pharmEnterDetails" element={<PharmEnterDetails/>} />
            <Route path="pharmServices" element={<PharmServices/>} />
            <Route path="pharmReview" element={<PharmReview/>} />
            <Route path="pharmSuccessAdd" element={<PharmSuccessAdd/>} />

            {/* Nurses */}
            <Route path="nurse" element={<AddNurse/>} />
            <Route path="AddNurse" element={<NurseBasicInfo/>} />
            <Route path="nurseEnterDetails" element={<NursesEnterDetails/>} />
            <Route path="nurseServices" element={<NursesServices/>} />
            <Route path="nurseReview" element={<NursesReview/>} />
            <Route path="nurseSuccessAdd" element={<NursesSuccessAdd/>} />

            {/* Lab Scientist */}
            <Route path="labScientist" element={<AddLab/>} />
            <Route path="AddLabSci" element={<LabBasicInfo/>} />
            <Route path="labEnterDetails" element={<LabEnterDetails/>} />
            <Route path="labServices" element={<LabServices/>} />
            <Route path="labReview" element={<LabReview/>} />
            <Route path="labAddSuccess" element={<LabAddSuccess/>} />

            {/* Domestic Workers */}
            <Route path="domesticWorkers" element={<AddDomesticWorkers/>} />
            <Route path="AddDomWorker" element={<BasicInfoDomW/>} />
            <Route path="domEnterDetails" element={<DomEnterDetails/>} />
            <Route path="domServices" element={<DomServices/>} />
            <Route path="domReview" element={<DomReview/>} />
            <Route path="domAddSuccess" element={<DomAddSuccess/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
