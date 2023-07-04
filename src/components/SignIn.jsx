import { Link } from "react-router-dom";
import DoctorForm from "./DoctorForm";

const SignIn = () => {
    return ( 
        <div className="container">
            <nav className="brand-name">
                <h1><span className="white-line">Me</span>dli<span className="red-line">nk</span></h1>
            </nav>
            <div className="content">
                <h2>Sign In</h2>
                <DoctorForm />
            </div>
            <footer className="med-personnels">
                <ul className="nav-footer">
                    <li className="none"><a href="">Admin</a></li>
                    <li><a>Pharm</a></li>
                    <li><a>Lab</a></li>
                    <li className="active"><a>Doctor</a></li>
                </ul>
                <button type="submit"><Link to="home">Login</Link></button>
            </footer>
        </div>
     );
}
 
export default SignIn;