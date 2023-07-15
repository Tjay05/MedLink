import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

// User Forms
import Adminform from "./components/userforms/Adminform";
import DoctorForm from "./components/userforms/DoctorForm";
import Labform from "./components/userforms/Labform";
import PharmForm from "./components/userforms/Pharmform";

// Doctor Pages
import NavLayout from "./layouts/NavLayout";
import DocDashboard from "./components/dochome/DocDashboard";
import DocAppointment from "./components/dochome/DocAppointment";
import DocNotifications from "./components/dochome/DocNotifications";
import AppointmentDetails from "./components/dochome/AppointmentDetails";

// Layouts
import SignIn from "./components/SignIn";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
