import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Adminform from "./userforms/Adminform";
import DoctorForm from "./userforms/DoctorForm";
import Labform from "./userforms/Labform";
import PharmForm from "./userforms/Pharmform";
// import useFetch from "../Api/useFetch";

const SignIn = () => {
 
  // const loginButtonClicked = () => {
  //   // Perform login logic for doctor
  //   console.log("Login button clicked");
  //   // You can add your login logic here
  //   if(location.pathname.includes === "doctor"){
  //     // <DoctorForm loginId ={docId} loginPassword ={ password} />
  //     const loginId = props.loginId
  //     const loginPassword = propr.loginPassword
  //     const [docId, setDocId] = useState("");
  //     const [password, setPassword] = useState("");
  //     const { data, isPending, error } = useFetch(
  //         "https://hospital-management-backend.onrender.com/doctor/login",
  //         "POST",
  //         {
  //         "Content-type": "application/json",
  //         },
  //         {
  //         id: loginId,
  //         password: password,
  //         }
  //     );
  
  //     const handleSubmit = (e) => {
  //         e.preventDefault();
  //         // Handle form submission
  //         onLogin()
  //     };
  //   }
  // };
  return (
    <div className="container">
      <nav className="brand-name">
        <h1>
          <span className="white-line">Me</span>dli<span className="red-line">nk</span>
        </h1>
      </nav>
      <div className="content">
        <h2>Sign In</h2>
        <Routes>
          <Route path="/" element={<Adminform/>} />
          <Route path="pharm" element={<PharmForm/>} />
          <Route path="Lab" element={<Labform/>} />
          <Route path="doctor" element={<DoctorForm/>} />
        </Routes>
      </div>
      <footer className="med-personnels">
        <ul className="nav-footer">
          <li className="none">
            <NavLink to="./">Admin</NavLink>
          </li>
          <li>
            <NavLink to="pharm" >Pharm</NavLink>
          </li>
          <li>
            <NavLink to="lab">Lab</NavLink>
          </li>
          <li className="active">
            <NavLink to="doctor" >Doctor</NavLink>
          </li>
        </ul>
        <button type="submit">
          Login
        </button>
      </footer>
    </div>
  );
};

export default SignIn;
