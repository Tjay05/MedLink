
import "./style.css";
import Header from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//doctor👇👇👇
import Staff from "./pages/staff";
import AddDoctor from "./pages/staff/doctor";
import DocBasicInfo from "./pages/staff/doctor/docBasicInfo";
import DocEnterDetails from "./pages/staff/doctor/docEnterDetails";
import DocServices from "./pages/staff/doctor/docServices";
import DocReview from "./pages/staff/doctor/docReview";
import DocAddSuccess from "./pages/staff/doctor/docSucessAdd";


//pharmacist👇👇
import AddPharm from "./pages/staff/pharmarcist";
import PharmBasicInfo from "./pages/staff/pharmarcist/pharmBasicInfo";
import PharmEnterDetails from "./pages/staff/pharmarcist/pharmEnterDetails";
import PharmServices from "./pages/staff/pharmarcist/pharmServices";
import PharmReview from "./pages/staff/pharmarcist/pharmReview";
import PharmSuccessAdd from "./pages/staff/pharmarcist/pharmSuccessAdd";


import AddNurse from "./pages/staff/nurses";
import NurseBasicinfo from "./pages/staff/nurses/nurseBasicInfo";
import NurseEnterDetails from "./pages/staff/nurses/nurseEnterDetails";
import NurseServices from "./pages/staff/nurses/nurseServices";
import NurseReview from "./pages/staff/nurses/nurseReview";
import NurseAddSuccess from "./pages/staff/nurses/nurseSuccessAdd";


import AddLabSci from "./pages/staff/labScientist";
import LabBasicinfo from "./pages/staff/labScientist/labBasicInfo";
import LabEnterDetails from "./pages/staff/labScientist/labEnterDetails";
import LabServices from "./pages/staff/labScientist/labServices";
import LabReview from "./pages/staff/labScientist/labReview";
import LabAddSuccess from "./pages/staff/labScientist/labAddSuccess";


import AddDomesticWorkers from "./pages/staff/domesticWorkers";
import BasicinfoDomW from "./pages/staff/domesticWorkers/domWorkBasicInfo";
import DomEnterDetails from "./pages/staff/domesticWorkers/domEnterDetails";
import DomServices from "./pages/staff/domesticWorkers/domServices";
import DomReview from "./pages/staff/domesticWorkers/domReview";
import DomSuccessAdd from "./pages/staff/domesticWorkers/domAddSuccess";

import Patient from "./pages/patients";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Staff />}>
            <Route path="staff/doctor" element={<AddDoctor />} />
            <Route
              path="staff/doctor/docBasicInfo"
              element={<DocBasicInfo />}
            />
            <Route
              path="staff/doctor/docEnterDetails"
              element={<DocEnterDetails />}
            />
            <Route path="staff/doctor/docServices" element={<DocServices />} />
            <Route path="staff/doctor/docReview" element={<DocReview />} />
            <Route
              path="staff/doctor/docSuccessAdd"
              element={<DocAddSuccess />}
            />
            <Route path="staff/doctor/docSuccessAdd" element={<AddDoctor />} />

            <Route path="staff/pharmacist" element={<AddPharm />} />
            <Route
              path="staff/pharmarcist/pharmBasicInfo"
              element={<PharmBasicInfo />}
            />
            <Route
              path="staff/pharmarcist/pharmEnterDetails"
              element={<PharmEnterDetails />}
            />
            <Route
              path="staff/pharmarcist/pharmServices"
              element={<PharmServices />}
            />
            <Route
              path="staff/pharmarcist/pharmReview"
              element={<PharmReview />}
            />
            <Route
              path="staff/pharmarcist/pharmSuccessAdd"
              element={<PharmSuccessAdd />}
            />
            <Route
              path="staff/pharmarcist/pharmSuccessAdd"
              element={<AddPharm />}
            />

            <Route path="staff/nurses" element={<AddNurse />} />
            <Route
              path="staff/nurses/nurseBasicInfo"
              element={<NurseBasicinfo />}
            />
            <Route
              path="staff/nurses/nurseEnterDetails"
              element={<NurseEnterDetails />}
            />
            <Route
              path="staff/nurses/nurseServices"
              element={<NurseServices />}
            />
            <Route path="staff/nurses/nurseReview" element={<NurseReview />} />
            <Route
              path="staff/nurses/nurseSuccessAdd"
              element={<NurseAddSuccess />}
            />
            <Route path="staff/nurses/nurseSuccessAdd" element={<AddNurse />} />


            <Route path="staff/labScientist" element={<AddLabSci />} />
            <Route
              path="staff/labScientist/labBasicInfo"
              element={<LabBasicinfo />}
            />
            <Route
              path="staff/labScientist/labEnterDetails"
              element={<LabEnterDetails />}
            />
            <Route
              path="staff/labScientist/labServices"
              element={<LabServices />}
            />
             <Route
              path="staff/labScientist/labReview"
              element={<LabReview/>}
            />
              <Route
              path="staff/labScientist/labAddSuccess"
              element={<LabAddSuccess/>}
            />
 <Route
              path="staff/labScientist/labAddSuccess"
              element={<AddLabSci/>}
            />
            
            
            <Route
              path="staff/domesticWorkers"
              element={<AddDomesticWorkers />}
            />
          </Route>
          <Route
              path="staff/domesticWorkers/domWorkBasicInfo"
              element={<BasicinfoDomW />}>
          </Route>

          <Route
              path="staff/domesticWorkers/domEnterDetails"
              element={<DomEnterDetails />}>
          </Route>
          
          <Route
              path="staff/domesticWorkers/domServices"
              element={<DomServices />}>
          </Route>
          <Route
              path="staff/domesticWorkers/domReview"
              element={<DomReview/>}>
          </Route>
          <Route
              path="staff/domesticWorkers/domAddSuccess"
              element={<DomSuccessAdd/>}>
          </Route>
          
          
          <Route path="patients" element={<Patient />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
