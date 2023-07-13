import { 
  BrowserRouter, 
  Route, 
  Routes
} from "react-router-dom";


// Pages
import SignIn from "./components/SignIn";
import NavLayout from "./layouts/NavLayout";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/" element={<SignIn />} >
//         <Route index element={<Adminform  /> } />
//         <Route path="pharm" element={<PharmForm/>} />
//         <Route path="lab" element={<Labform/>} />
//         <Route path="doctor" element={<DoctorForm />} />
//       </Route>
//       <Route path="home" element={<NavLayout />}>
//         <Route index element={<DocDashboard/>} />
//         <Route path="appointment" element={<DocAppointment/>} />
//         <Route path="details" element={<AppointmentDetails/>} />
//         <Route path="notifications" element={<DocNotifications/>} />
//       </Route>
//     </Route>
//   )
// )

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<SignIn/>} />
          <Route path="home/*" element={<NavLayout/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
