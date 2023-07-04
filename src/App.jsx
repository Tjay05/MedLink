import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

// Pages
import SignIn from "./components/SignIn";

// Nav
import NavLayout from "./layouts/NavLayout";

// pages
import DocDashboard from "./components/dochome/DocDashboard"
import DocAppointment from "./components/dochome/DocAppointment"
import DocNotifications from "./components/dochome/DocNotifications"
import AppointmentDetails from "./components/dochome/AppointmentDetails";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<SignIn />} />
      <Route path="home" element={<NavLayout />}>
        <Route path="dashboard" element={<DocDashboard/>} />
        <Route path="appointment" element={<DocAppointment/>}>
          <Route path="details" element={<AppointmentDetails/>} />
        </Route>
        <Route path="notifications" element={<DocNotifications/>} />
      </Route>
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
