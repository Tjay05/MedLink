import { NavLink, Outlet } from "react-router-dom";
// import useFetch from "../Api/useFetch";
// import DoctorForm from "./DoctorForm";

const SignIn = () => {
  const loginButtonClicked = () => {
    // Perform login logic for doctor
    console.log("Login button clicked");
    // You can add your login logic here
  };

  return (
    <div className="container">
      <nav className="brand-name">
        <h1>
          <span className="white-line">Me</span>dli<span className="red-line">nk</span>
        </h1>
      </nav>
      <div className="content">
        <h2>Sign In</h2>
        <Outlet />
        {/* <DoctorForm/> */}
      </div>
      <footer className="med-personnels">
        <ul className="nav-footer">
          <li className="none">
            <NavLink to="admin">Admin</NavLink>
          </li>
          <li>
            <NavLink to="pharm" >Pharm</NavLink>
          </li>
          <li>
            <NavLink to="lab">Lab</NavLink>
          </li>
          <li className="active">
            <NavLink to="./" >Doctor</NavLink>
          </li>
        </ul>
        <button type="submit" onClick={loginButtonClicked}>
          Login
        </button>
      </footer>
      
    </div>
  );
};

export default SignIn;
